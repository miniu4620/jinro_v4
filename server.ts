import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

// Enable CORS for all incoming requests (crucial for iframe & external preview routing)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-admin-password"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// JSON and URL-encoded body parsers
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

// Database file setup
const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "db.json");
const DB_BACKUP_FILE = path.join(DATA_DIR, "db.backup.json");

export interface GuestbookEntry {
  id: string;
  nickname: string;
  personalityType?: string;
  message: string;
  sticker: string;
  likes: number;
  createdAt: string;
}

export interface RankingRecord {
  id: string;
  nickname: string;
  timeSeconds: number;
  moves: number;
  createdAt: string;
}

export interface DatabaseSchema {
  guestbook: GuestbookEntry[];
  rankings: RankingRecord[];
}

const initialData: DatabaseSchema = {
  guestbook: [
    {
      id: "seed-1",
      nickname: "꿈꾸는별",
      personalityType: "apple",
      message: "은평대전 전공박람회 미니유공방 부스 방문 완료! 성향 진단도 신기하고 미니어처 키트 체험 너무 유익했어요 ✨",
      sticker: "🍏",
      likes: 12,
      createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    },
    {
      id: "seed-2",
      nickname: "히어로",
      personalityType: "dragonfruit",
      message: "작가님들과 함께 미니어처 작품 만들어보는 시간 정말 특별했습니다! 전공 상담까지 알차게 받았어요 🎓",
      sticker: "🐉",
      likes: 9,
      createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    },
    {
      id: "seed-3",
      nickname: "지우랑민서",
      personalityType: "strawberry",
      message: "친구랑 같이 와서 서로 진로 성향 맞춰봤어요! 카드 맞추기 랭킹전도 너무 재밌어요 파이팅 🍓",
      sticker: "🍓",
      likes: 8,
      createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    },
  ],
  rankings: [
    {
      id: "rank-sample-1",
      nickname: "순발력대장",
      timeSeconds: 15.2,
      moves: 10,
      createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    },
    {
      id: "rank-sample-2",
      nickname: "꿈꾸는별",
      timeSeconds: 18.4,
      moves: 12,
      createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    },
  ],
};

let memoryDb: DatabaseSchema | null = null;

function readDb(): DatabaseSchema {
  if (memoryDb) {
    return memoryDb;
  }

  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      memoryDb = {
        guestbook: Array.isArray(parsed.guestbook) ? parsed.guestbook : initialData.guestbook,
        rankings: Array.isArray(parsed.rankings) ? parsed.rankings : initialData.rankings,
      };
      return memoryDb;
    }

    // Try backup if main file does not exist
    if (fs.existsSync(DB_BACKUP_FILE)) {
      const raw = fs.readFileSync(DB_BACKUP_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      memoryDb = {
        guestbook: Array.isArray(parsed.guestbook) ? parsed.guestbook : initialData.guestbook,
        rankings: Array.isArray(parsed.rankings) ? parsed.rankings : initialData.rankings,
      };
      fs.writeFileSync(DB_FILE, JSON.stringify(memoryDb, null, 2), "utf-8");
      return memoryDb;
    }

    // Create new initial DB
    memoryDb = initialData;
    fs.writeFileSync(DB_FILE, JSON.stringify(memoryDb, null, 2), "utf-8");
    fs.writeFileSync(DB_BACKUP_FILE, JSON.stringify(memoryDb, null, 2), "utf-8");
    return memoryDb;
  } catch (err) {
    console.error("Failed to read DB, returning default data:", err);
    memoryDb = initialData;
    return memoryDb;
  }
}

function writeDb(data: DatabaseSchema): void {
  try {
    memoryDb = data;
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    const serialized = JSON.stringify(data, null, 2);
    // Write directly to DB file
    fs.writeFileSync(DB_FILE, serialized, "utf-8");
    // Also save backup synchronously
    fs.writeFileSync(DB_BACKUP_FILE, serialized, "utf-8");
  } catch (err) {
    console.error("Failed to write to DB:", err);
  }
}

// Lazy Gemini Client
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!geminiClient) {
    geminiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiClient;
}

// --- API Endpoints ---
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Guestbook APIs
app.get("/api/guestbook", (_req, res) => {
  try {
    const db = readDb();
    // Return sorted by most recent
    const sorted = [...db.guestbook].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    res.json(sorted);
  } catch (err) {
    console.error("GET /api/guestbook error:", err);
    res.status(500).json({ error: "방명록 목록을 불러오지 못했습니다." });
  }
});

app.post("/api/guestbook", (req, res) => {
  try {
    const { nickname, personalityType, message, sticker } = req.body || {};
    const cleanNick = String(nickname || "").trim();
    const cleanMsg = String(message || "").trim();

    if (!cleanNick) {
      return res.status(400).json({ success: false, error: "닉네임을 입력해주세요." });
    }
    if (!cleanMsg) {
      return res.status(400).json({ success: false, error: "방문 소감 또는 메시지를 입력해주세요." });
    }

    const db = readDb();
    const newEntry: GuestbookEntry = {
      id: `guest-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      nickname: cleanNick.slice(0, 15),
      personalityType: personalityType || "apple",
      message: cleanMsg.slice(0, 300),
      sticker: sticker || "💖",
      likes: 0,
      createdAt: new Date().toISOString(),
    };

    // Store at beginning
    db.guestbook.unshift(newEntry);
    // Keep generous history for event (up to 5,000 records)
    if (db.guestbook.length > 5000) {
      db.guestbook = db.guestbook.slice(0, 5000);
    }
    writeDb(db);

    return res.status(201).json({ success: true, item: newEntry, totalCount: db.guestbook.length });
  } catch (err: any) {
    console.error("POST /api/guestbook error:", err);
    return res.status(500).json({ success: false, error: err?.message || "방명록 저장 중 오류가 발생했습니다." });
  }
});

app.post("/api/guestbook/:id/like", (req, res) => {
  try {
    const { id } = req.params;
    const db = readDb();
    const entry = db.guestbook.find((e) => e.id === id);
    if (!entry) {
      return res.status(404).json({ success: false, error: "방명록을 찾을 수 없습니다." });
    }

    entry.likes = (entry.likes || 0) + 1;
    writeDb(db);
    return res.json({ success: true, likes: entry.likes });
  } catch (err: any) {
    console.error("POST /api/guestbook/:id/like error:", err);
    return res.status(500).json({ success: false, error: "좋아요 처리에 실패했습니다." });
  }
});

// Admin verify & delete guestbook item
app.delete("/api/guestbook/:id", (req, res) => {
  try {
    const { id } = req.params;
    const adminPassword =
      req.headers["x-admin-password"] ||
      req.query.password ||
      (req.body && req.body.password);

    if (adminPassword !== "0410") {
      return res.status(401).json({ success: false, error: "관리자 인증에 실패했습니다." });
    }

    const db = readDb();
    const index = db.guestbook.findIndex((e) => e.id === id);
    if (index === -1) {
      return res.status(404).json({ success: false, error: "해당 방명록 항목을 찾을 수 없습니다." });
    }

    const deletedItem = db.guestbook.splice(index, 1)[0];
    writeDb(db);
    return res.json({ success: true, message: "방명록이 삭제되었습니다.", deletedId: deletedItem.id });
  } catch (err: any) {
    console.error("DELETE /api/guestbook/:id error:", err);
    return res.status(500).json({ success: false, error: "방명록 삭제 중 오류가 발생했습니다." });
  }
});

// Rankings APIs
app.get("/api/rankings", (req, res) => {
  try {
    const db = readDb();
    const limit = req.query.limit ? Math.min(Number(req.query.limit) || 50, 200) : 50;
    // Sort by time (ascending: fastest first)
    const sorted = [...db.rankings].sort((a, b) => a.timeSeconds - b.timeSeconds);
    return res.json(sorted.slice(0, limit));
  } catch (err) {
    console.error("GET /api/rankings error:", err);
    return res.status(500).json({ error: "랭킹 데이터를 불러오지 못했습니다." });
  }
});

app.post("/api/rankings", (req, res) => {
  try {
    const { nickname, timeSeconds, moves } = req.body || {};
    const parsedTime = Number(timeSeconds);

    if (isNaN(parsedTime) || parsedTime <= 0) {
      return res.status(400).json({ success: false, error: "올바른 기록 시간(초)이 필요합니다." });
    }

    const cleanNick = String(nickname || "").trim() || "은평청소년";

    const db = readDb();
    const newRecord: RankingRecord = {
      id: `rank-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      nickname: cleanNick.slice(0, 15),
      timeSeconds: Math.round(parsedTime * 10) / 10,
      moves: Math.max(1, Number(moves) || 0),
      createdAt: new Date().toISOString(),
    };

    db.rankings.push(newRecord);
    // Sort ascending by time
    db.rankings.sort((a, b) => a.timeSeconds - b.timeSeconds);

    // Keep generous participant history for the entire expo (up to 3,000 records)
    if (db.rankings.length > 3000) {
      db.rankings = db.rankings.slice(0, 3000);
    }
    writeDb(db);

    const myRank = db.rankings.findIndex((r) => r.id === newRecord.id) + 1;
    const top50 = db.rankings.slice(0, 50);

    return res.status(201).json({
      success: true,
      rank: myRank,
      record: newRecord,
      rankings: top50,
      totalParticipants: db.rankings.length,
    });
  } catch (err: any) {
    console.error("POST /api/rankings error:", err);
    return res.status(500).json({ success: false, error: err?.message || "랭킹 등록 중 오류가 발생했습니다." });
  }
});

// Admin delete ranking record
app.delete("/api/rankings/:id", (req, res) => {
  try {
    const { id } = req.params;
    const adminPassword =
      req.headers["x-admin-password"] ||
      req.query.password ||
      (req.body && req.body.password);

    if (adminPassword !== "0410") {
      return res.status(401).json({ success: false, error: "관리자 인증에 실패했습니다." });
    }

    const db = readDb();
    const index = db.rankings.findIndex((e) => e.id === id);
    if (index === -1) {
      return res.status(404).json({ success: false, error: "해당 랭킹 항목을 찾을 수 없습니다." });
    }

    const deletedItem = db.rankings.splice(index, 1)[0];
    writeDb(db);
    return res.json({ success: true, message: "랭킹 기록이 삭제되었습니다.", deletedId: deletedItem.id });
  } catch (err: any) {
    console.error("DELETE /api/rankings/:id error:", err);
    return res.status(500).json({ success: false, error: "랭킹 삭제 중 오류가 발생했습니다." });
  }
});

// Database stats for event monitoring
app.get("/api/stats", (_req, res) => {
  const db = readDb();
  res.json({
    totalGuestbook: db.guestbook.length,
    totalRankings: db.rankings.length,
    fastestTime: db.rankings.length > 0 ? Math.min(...db.rankings.map((r) => r.timeSeconds)) : null,
    time: new Date().toISOString(),
  });
});

// Gemini-powered personalized description
app.post("/api/generate-description", async (req, res) => {
  const { nickname, type } = req.body || {};
  const cleanNick = String(nickname || "방문자").slice(0, 12).trim();

  // Fallback map for 10 fruit types
  const fallbackMap: Record<string, string> = {
    apple: `${cleanNick}님은 반짝이는 영감과 감각적인 시선으로 세상을 새롭게 디자인하는 싱그러운 사과형! 🍏`,
    dragonfruit: `${cleanNick}님은 독보적인 개성과 과감한 도전으로 세상을 놀라게 만드는 화려한 용과형! 🐉`,
    blueberry: `${cleanNick}님은 깊이 있는 탐구력과 명쾌한 논리로 문제를 해결하는 명석한 블루베리형! 🫐`,
    grapefruit: `${cleanNick}님은 톡 쏘는 당당함과 트렌디한 센스로 무대를 사로잡는 매력적인 자몽형! 🍊`,
    banana: `${cleanNick}님은 밝고 유쾌한 에너지와 친화력으로 모두에게 비타민 미소를 전하는 바나나형! 🍌`,
    strawberry: `${cleanNick}님은 따뜻한 온기와 섬세한 공감력으로 사람들의 마음을 보듬어주는 달콤 딸기형! 🍓`,
    watermelon: `${cleanNick}님은 시원한 결단력과 듬직한 포용력으로 모두를 이끄는 믿음직한 수박형! 🍉`,
    lime: `${cleanNick}님은 번뜩이는 재치와 순발력으로 어떤 위기도 유쾌하게 돌파하는 톡톡 라임형! 🍋`,
    carrot: `${cleanNick}님은 한결같은 성실함과 깊은 장인정신으로 독보적인 실력을 완성하는 단단 당근형! 🥕`,
    avocado: `${cleanNick}님은 온화한 평정심과 부드러운 중재력으로 주변의 평화를 지켜주는 포근 아보카도형! 🥑`,
  };

  const defaultDescription = fallbackMap[type] || `${cleanNick}님은 미니유공방의 특별한 주인공! ✨`;

  try {
    const ai = getGeminiClient();
    if (!ai) {
      return res.json({ description: defaultDescription, source: "template" });
    }

    const typeDetails: Record<string, string> = {
      apple: "창의적이고 독창적인 영감으로 일상을 디자인하는 '싱그러운 사과형'",
      dragonfruit: "과감한 도전과 파격적인 개성을 지닌 트렌드세터 '화려한 용과형'",
      blueberry: "예리한 논리와 지적 호기심으로 본질을 탐구하는 '명석한 블루베리형'",
      grapefruit: "솔직당당한 매력과 감각적인 직관을 갖춘 '당찬 자몽형'",
      banana: "유쾌한 비타민 에너지와 친화력 넘치는 행동파 '발랄 바나나형'",
      strawberry: "따뜻한 배려와 섬세한 공감력으로 마음을 힐링해주는 '달콤 딸기형'",
      watermelon: "시원시원한 결단력과 넓은 포용력으로 이끄는 '듬직한 수박형'",
      lime: "번뜩이는 재치와 순발력으로 문제를 해결하는 '톡톡 라임형'",
      carrot: "끈기 있는 노력과 높은 책임감으로 신뢰받는 '성실 당근형'",
      avocado: "부드러운 평정심과 온화한 밸런스로 안정을 주는 '포근 아보카도형'",
    };

    const targetTrait = typeDetails[type] || "매력 넘치는 탐험가";

    const prompt = `당신은 청소년 전공박람회 '은평대전'의 미니유공방 부스 안내 멘토 AI입니다.
참가자 닉네임: "${cleanNick}"
성향 진단 결과: "${targetTrait}"

규칙:
1. "${cleanNick}님은 ~" 으로 시작하는 자연스럽고 기분 좋은 한 줄(40~65자 이내) 축하/성향 요약 문구를 한국어로 작성하세요.
2. 부스 체험 분위기에 어울리도록 친절하고 응원하는 톤을 사용하세요.
3. 이모지 1~2개 포함.
4. 오직 완성된 한 줄 문장만 출력하세요 (따옴표, 인사말, 추가 해설 절대 금지).`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
    });

    const generatedText = response.text?.trim();
    if (generatedText && generatedText.length >= 10 && generatedText.length <= 120) {
      return res.json({ description: generatedText, source: "gemini" });
    }

    return res.json({ description: defaultDescription, source: "fallback" });
  } catch (err) {
    console.error("Gemini generation failed, using fallback:", err);
    return res.json({ description: defaultDescription, source: "fallback" });
  }
});

// Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Eunpyeong Expo server listening on port ${PORT}`);
  });
}

startServer();
