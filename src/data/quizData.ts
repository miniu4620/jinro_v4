import { PersonalityType, PersonalityTypeId, QuizQuestion, QuizChoice } from '../types';

export const PERSONALITY_TYPES: Record<PersonalityTypeId, PersonalityType> = {
  apple: {
    id: 'apple',
    name: 'Fresh Apple',
    nameKo: '싱그러운 사과형',
    emoji: '🍏',
    flavor: '산뜻한 청사과 요거트 셔벗',
    colorName: '애플민트 그린 & 라임',
    bgGradient: 'from-emerald-500 via-teal-400 to-lime-300',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    cardBorder: 'border-emerald-400',
    keywords: ['#창의적발상', '#아이디어뱅크', '#호기심대장', '#디자인감각'],
    summary: '남들이 미처 보지 못한 새로운 시각과 독창적인 발상으로 세상을 감각적으로 디자인하는 크리에이터',
    defaultDescription: '님은 반짝이는 영감과 감각적인 시선으로 일상을 특별하게 디자인하는 싱그러운 사과형!',
    recommendedFields: ['시각 · 공간 디자인 계열', '소프트웨어 · 융합예술 계열', '건축 · 공간기획 계열'],
    recommendedMajors: ['시각디자인학과', '산업디자인학과', '소프트웨어융합학과', '실내건축디자인학과', '디지털미디어학과'],
    craftKit: {
      title: '청사과 요거트 셔벗 미니어처 키트 🍏',
      description: '상큼한 라임그린 컬러 클레이에 민트 잎 파츠와 미니어처 사과 슬라이스가 돋보이는 산뜻한 세트!',
      clayColor: '#86efac',
      toppings: ['미니 사과 토핑 슬라이스', '민트 허브 파츠', '반짝이 슈가 파우더'],
      sauce: '상큼한 투명 청사과 젤 시럽',
    },
  },
  dragonfruit: {
    id: 'dragonfruit',
    name: 'Vibrant Dragon Fruit',
    nameKo: '화려한 용과형',
    emoji: '🐉',
    flavor: '이국적인 핑크 드래곤프루트 소르베',
    colorName: '비비드 마젠타 핑크 & 네온 그린',
    bgGradient: 'from-fuchsia-600 via-pink-500 to-rose-400',
    badgeColor: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300',
    cardBorder: 'border-fuchsia-400',
    keywords: ['#독보적개성', '#트렌드세터', '#과감한도전', '#파격의혁신'],
    summary: '남들의 기준에 얽매이지 않고 나만의 독보적인 색깔과 당당한 도전으로 세상을 놀라게 하는 혁신가',
    defaultDescription: '님은 넘치는 개성과 거침없는 열정으로 무대를 장악하는 화려한 용과형!',
    recommendedFields: ['패션 · 뷰티디자인 계열', '공연예술 · 실용음악 계열', '글로벌 엔터테인먼트 계열'],
    recommendedMajors: ['패션디자인학과', '공연기획학과', '실용음악학과', '문화콘텐츠학과', '방송연예학과'],
    craftKit: {
      title: '마젠타 용과 스쿱 미니어처 키트 🐉',
      description: '선명한 핫핑크 클레이에 까만 참깨 비즈와 이국적인 그린 뿔 파츠가 어우러진 유니크한 세트!',
      clayColor: '#ec4899',
      toppings: ['블랙 세서미 비즈', '네온 그린 드래곤 칩', '골드 스타 파우더'],
      sauce: '글로시 비비드 핑크 레진',
    },
  },
  blueberry: {
    id: 'blueberry',
    name: 'Smart Blueberry',
    nameKo: '명석한 블루베리형',
    emoji: '🫐',
    flavor: '깊고 진한 와일드 블루베리 젤라또',
    colorName: '딥 인디고 블루 & 바이올렛',
    bgGradient: 'from-indigo-600 via-purple-500 to-sky-400',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    cardBorder: 'border-indigo-400',
    keywords: ['#지적탐구', '#논리분석', '#데이터장인', '#완벽주의'],
    summary: '차분하고 예리한 통찰력으로 복잡한 정보 속에서 핵심을 짚어내고 최고의 해법을 도출하는 지적 전략가',
    defaultDescription: '님은 깊이 있는 탐구력과 명쾌한 논리로 문제를 해결하는 명석한 블루베리형!',
    recommendedFields: ['컴퓨터 · 인공지능 공학 계열', '자연과학 · 빅데이터 분석 계열', '의생명과학 계열'],
    recommendedMajors: ['컴퓨터공학과', '데이터사이언스학과', '인공지능학과', '통계학과', '소프트웨어학과'],
    craftKit: {
      title: '딥 블루베리 파르페 미니어처 키트 🫐',
      description: '진한 바이올렛 블루 클레이에 앙증맞은 통 블루베리 파츠와 블루 글레이즈가 담긴 세련된 세트!',
      clayColor: '#6366f1',
      toppings: ['미니 생블루베리 구슬', '실버 스타 더스트', '스노우 파우더'],
      sauce: '투명 블루베리 젤리 레진',
    },
  },
  grapefruit: {
    id: 'grapefruit',
    name: 'Tangy Grapefruit',
    nameKo: '당찬 자몽형',
    emoji: '🍊',
    flavor: '달콤 쌉싸름한 루비 레드 자몽 셔벗',
    colorName: '코랄 핑크 & 루비 자몽 오렌지',
    bgGradient: 'from-rose-500 via-orange-400 to-amber-300',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
    cardBorder: 'border-orange-400',
    keywords: ['#당당한매력', '#솔직담백', '#트렌드감각', '#빛나는순발력'],
    summary: '호불호가 확실하고 감각적인 센스가 뛰어나며, 솔직하고 당당한 에너지로 유행을 선도하는 트렌드 메이커',
    defaultDescription: '님은 톡 쏘는 솔직함과 뛰어난 센스로 모두의 시선을 사로잡는 매력적인 자몽형!',
    recommendedFields: ['마케팅 · 광고홍보 계열', '미디어 · 저널리즘 계열', '브랜드 기획 · 큐레이션 계열'],
    recommendedMajors: ['광고홍보학과', '미디어커뮤니케이션학과', '경영학과(마케팅)', '소비자학과', '신문방송학과'],
    craftKit: {
      title: '루비 자몽 에이드 스쿱 미니어처 키트 🍊',
      description: '영롱한 코랄 오렌지 클레이와 반투명 자몽 슬라이스, 반짝이는 탄산 펄이 돋보이는 상큼한 세트!',
      clayColor: '#fb923c',
      toppings: ['루비 자몽 슬라이스 칩', '투명 탄산 비즈', '코랄 하트 스프링클'],
      sauce: '생생한 자몽 글레이즈 레진',
    },
  },
  banana: {
    id: 'banana',
    name: 'Energetic Banana',
    nameKo: '유쾌발랄 바나나형',
    emoji: '🍌',
    flavor: '달콤향긋 커스터드 바나나 스쿱',
    colorName: '스위트 바나나 옐로우 & 캐러멜',
    bgGradient: 'from-amber-400 via-yellow-300 to-orange-300',
    badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    cardBorder: 'border-yellow-400',
    keywords: ['#초긍정에너지', '#유쾌한센스', '#친화력만렙', '#현장행동파'],
    summary: '어디서나 주위를 환하게 밝히는 유쾌한 비타민 에너지와 친화력으로 사람들을 하나로 모으는 분위기 메이커',
    defaultDescription: '님은 보는 사람까지 기분 좋아지게 만드는 활기찬 에너자이저 바나나형!',
    recommendedFields: ['글로벌 비즈니스 · 관광 계열', '이벤트 · 공연기획 · 레저 계열', '스포츠마케팅 계열'],
    recommendedMajors: ['호텔관광경영학과', '글로벌비즈니스학과', '스포츠마케팅학과', '연극영화학과', '항공서비스학과'],
    craftKit: {
      title: '스위트 바나나 캐러멜 미니어처 키트 🍌',
      description: '부드러운 노란색 클레이와 바나나 칩 토핑, 황금빛 캐러멜 시럽이 완벽 조화된 활기찬 세트!',
      clayColor: '#fde047',
      toppings: ['바나나 슬라이스 데코', '캐러멜 크런치 큐브', '레인보우 믹스 스프링클'],
      sauce: '황금빛 골든 캐러멜 레진 시럽',
    },
  },
  strawberry: {
    id: 'strawberry',
    name: 'Lovely Strawberry',
    nameKo: '달콤톡톡 딸기형',
    emoji: '🍓',
    flavor: '달콤한 생딸기 바닐라 스쿱',
    colorName: '스트로베리 핑크 & 밀크화이트',
    bgGradient: 'from-pink-500 via-rose-400 to-amber-200',
    badgeColor: 'bg-rose-100 text-rose-700 border-rose-200',
    cardBorder: 'border-pink-300',
    keywords: ['#공감요정', '#따뜻한소통', '#섬세한배려', '#다정한힐러'],
    summary: '사람들의 마음을 섬세하게 살피고 따뜻한 온기로 팀을 화목하게 만드는 다정한 힐러',
    defaultDescription: '님은 사람들의 마음에 달콤한 미소를 피워내는 사랑스러운 딸기형!',
    recommendedFields: ['교육 · 상담 · 복지 계열', '아동 · 청소년 지원 계열', '심리상담 · 헬스케어 계열'],
    recommendedMajors: ['심리학과', '유아교육과', '사회복지학과', '상담심리학과', '특수교육과'],
    craftKit: {
      title: '달콤 딸기선데 미니어처 키트 🍓',
      description: '부드러운 베이비핑크 클레이와 딸기알갱이 토핑, 투명 딸기시럽 레진이 포함된 사랑스러운 세트!',
      clayColor: '#fda4af',
      toppings: ['딸기 슬라이스 칩', '화이트 하트 스프링클', '초코 크런치 파우더'],
      sauce: '반짝이는 딸기 글레이즈 레진',
    },
  },
  watermelon: {
    id: 'watermelon',
    name: 'Generous Watermelon',
    nameKo: '시원통쾌 수박형',
    emoji: '🍉',
    flavor: '가슴속까지 뻥 뚫리는 시원한 수박 슬러시',
    colorName: '크림슨 레드 & 에메랄드 그린',
    bgGradient: 'from-red-500 via-rose-400 to-emerald-400',
    badgeColor: 'bg-red-100 text-red-800 border-red-300',
    cardBorder: 'border-red-400',
    keywords: ['#넓은포용력', '#듬직한리더', '#시원시원결단', '#의리파대장'],
    summary: '시원시원한 결단력과 바다처럼 넓은 포용력으로 구성원들을 든든하게 받쳐주고 앞장서 이끄는 대장부 리더',
    defaultDescription: '님은 듬직한 품성과 시원한 결단력으로 모두를 이끄는 믿음직한 수박형!',
    recommendedFields: ['경영조직 · 리더십 계열', '행정 · 정책 · 법률 계열', '조직관리 · 프로젝트 총괄 계열'],
    recommendedMajors: ['경영학과', '행정학과', '법학과', '정치외교학과', '공공관리학과'],
    craftKit: {
      title: '시원 수박 슬러시 미니어처 키트 🍉',
      description: '선명한 수박 레드 클레이에 그린 껍질 몰드와 앙증맞은 수박씨 토핑이 담긴 듬직한 세트!',
      clayColor: '#f87171',
      toppings: ['미니 수박씨 비즈', '초록 껍질 몰드 파츠', '슈가 크리스털 글리터'],
      sauce: '맑고 투명한 워터멜론 시럽',
    },
  },
  lime: {
    id: 'lime',
    name: 'Zesty Lime',
    nameKo: '번뜩이는 라임형',
    emoji: '🍋',
    flavor: '톡 쏘는 상쾌함, 라임 모히또 셔벗',
    colorName: '비비드 네온 라임 & 옐로그린',
    bgGradient: 'from-lime-400 via-emerald-400 to-cyan-400',
    badgeColor: 'bg-lime-100 text-lime-900 border-lime-300',
    cardBorder: 'border-lime-400',
    keywords: ['#번뜩이는재치', '#순발력최강', '#위기해결사', '#유연한센스'],
    summary: '돌발 상황에서도 당황하지 않고 재치 있는 기지와 빠른 순발력으로 스마트하게 돌파구를 찾아내는 문제 해결사',
    defaultDescription: '님은 톡 쏘는 재치와 기민한 순발력으로 위기를 기회로 바꾸는 번뜩이는 라임형!',
    recommendedFields: ['소프트웨어 엔지니어링 계열', '사이버보안 · 시스템 대응 계열', '산업시스템공학 계열'],
    recommendedMajors: ['소프트웨어공학과', '정보보안학과', '산업공학과', '로봇시스템공학과', '스마트융합학과'],
    craftKit: {
      title: '톡톡 라임 샤베트 미니어처 키트 🍋',
      description: '눈부신 네온 라임 클레이와 앙증맞은 라임 조각 파츠, 시트러스 슈가 토핑이 어우러진 톡 쏘는 세트!',
      clayColor: '#bef264',
      toppings: ['미니어처 라임 웨지', '민트 리프 파츠', '반짝이 레몬 슈가'],
      sauce: '상쾌한 클리어 라임 레진 시럽',
    },
  },
  carrot: {
    id: 'carrot',
    name: 'Solid Carrot',
    nameKo: '성실단단 당근형',
    emoji: '🥕',
    flavor: '고소하고 든든한 시나몬 당근 케이크 스쿱',
    colorName: '딥 캐럿 오렌지 & 테라코타',
    bgGradient: 'from-amber-600 via-orange-500 to-yellow-500',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    cardBorder: 'border-amber-500',
    keywords: ['#성실끝판왕', '#장인정신', '#철저한계획', '#신뢰와책임'],
    summary: '묵묵하고 단단하게 뿌리를 내리듯, 성실한 노력과 높은 책임감으로 마침내 정상에 오르는 독보적 실력파 장인',
    defaultDescription: '님은 흔들리지 않는 끈기와 깊은 성실함으로 신뢰를 쌓아가는 단단한 당근형!',
    recommendedFields: ['기계 · 로봇 · 정밀공학 계열', '약학 · 바이오화학 계열', '금융회계 · 세무 계열'],
    recommendedMajors: ['기계공학과', '화학공학과', '약학과', '회계세무학과', '신소재공학과'],
    craftKit: {
      title: '스위트 캐럿 케이크 미니어처 키트 🥕',
      description: '따뜻한 오렌지 브라운 클레이에 미니 당근 잎 토핑과 시나몬 쿠키 크런치가 담긴 믿음직한 세트!',
      clayColor: '#ea580c',
      toppings: ['미니 당근 파츠', '피칸 쿠키 크런치', '화이트 크림치즈 드리즐'],
      sauce: '진한 메이플 카라멜 레진',
    },
  },
  avocado: {
    id: 'avocado',
    name: 'Calm Avocado',
    nameKo: '부드러운 아보카도형',
    emoji: '🥑',
    flavor: '부드럽고 풍부한 크리미 아보카도 바닐라',
    colorName: '소프트 올리브 그린 & 웜 베이지',
    bgGradient: 'from-emerald-600 via-green-400 to-lime-200',
    badgeColor: 'bg-green-100 text-green-900 border-green-300',
    cardBorder: 'border-green-400',
    keywords: ['#안정감원탑', '#평화주의자', '#마인드컨트롤', '#포근한중재자'],
    summary: '어떤 소용돌이 속에서도 흔들리지 않는 부드러움과 평정심으로 사람들의 마음을 편안하게 이어주는 평화주의자',
    defaultDescription: '님은 숲처럼 깊고 온화한 포용력으로 주변의 평화를 지키는 부드러운 아보카도형!',
    recommendedFields: ['환경생태 · 자원공학 계열', '식품영양 · 바이오헬스 계열', '인문철학 · 조경디자인 계열'],
    recommendedMajors: ['환경공학과', '식품영양학과', '조경학과', '바이오자원환경학과', '철학과'],
    craftKit: {
      title: '크리미 아보카도 보울 미니어처 키트 🥑',
      description: '은은한 아보카도 그린 클레이와 동글동글 브라운 씨앗 파츠, 부드러운 올리브 글레이즈가 담긴 세트!',
      clayColor: '#a7f3d0',
      toppings: ['아보카도 씨앗 우드 비즈', '골드 피스타치오 가루', '화이트 코코넛 파우더'],
      sauce: '차분한 올리브 오일 광택 레진',
    },
  },
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    badge: '상황 1 · 박람회 도착',
    scenario: '은평대전 전공박람회 현장에 막 도착했어! 수많은 부스가 눈앞에 쫙 펼쳐져 있을 때 내 첫 발걸음은?',
    title: '박람회장에서 나의 첫 탐방 스타일은?',
    choices: [
      {
        text: '와 신난다! 사람 많고 북적이는 인기 체험 부스로 먼저 달려간다!',
        subtext: '현장 분위기를 온몸으로 즐기며 직관적으로 발길 닿는 곳으로 GO!',
        extraversion: 1,
        feeling: 0,
        reaction: '활기찬 에너지 폭발! ✨',
        types: ['banana', 'watermelon', 'dragonfruit', 'strawberry', 'grapefruit'],
      },
      {
        text: '안내 팸플릿과 배치도를 펼치고 미리 찜해둔 관심 부스부터 차례대로 탐방한다.',
        subtext: '시간과 동선을 꼼꼼하게 계산하며 효율적으로 관람을 시작해요.',
        extraversion: -1,
        feeling: 0,
        reaction: '계획적이고 스마트한 탐험가! 📋',
        types: ['blueberry', 'carrot', 'apple', 'lime', 'avocado'],
      },
    ],
  },
  {
    id: 2,
    badge: '상황 2 · 미니유공방 점토 조색',
    scenario: '미니어처 아이스크림을 만들다가 점토가 생각했던 모양과 살짝 다르게 빚어졌다면?',
    title: '예상 밖의 상황에서 나의 반응은?',
    choices: [
      {
        text: '어? 이것도 은근 개성 있고 느낌 있는데? 즉흥적으로 새로운 디저트로 변신시킨다!',
        subtext: '실수도 하나의 영감! 유연하고 감각적인 나만의 작품으로 완성해요.',
        extraversion: 0,
        feeling: 1,
        reaction: '예술적인 센스와 즉흥력! 🎨',
        types: ['apple', 'dragonfruit', 'grapefruit', 'lime', 'banana'],
      },
      {
        text: '원래 도안과 비율을 다시 천천히 살피며 정교하게 도구로 디테일을 수정한다.',
        subtext: '완성도 높은 퀄리티를 위해 차분하게 원인을 짚고 다시 매끄럽게 다듬어요.',
        extraversion: 0,
        feeling: -1,
        reaction: '장인 정신과 꼼꼼한 집중력! 🔍',
        types: ['carrot', 'blueberry', 'avocado', 'watermelon', 'strawberry'],
      },
    ],
  },
  {
    id: 3,
    badge: '상황 3 · 전공 멘토 선배와의 대화',
    scenario: '관심 학과의 대학생 선배와 1:1 진로 상담을 할 기회가 생겼어! 가장 먼저 묻고 싶은 질문은?',
    title: '대학 생활에서 내가 가장 궁금한 것은?',
    choices: [
      {
        text: '"학과 분위기나 동아리 활동, 축제 같은 캠퍼스 라이프는 어때요?"',
        subtext: '선배들과의 교류, 활기찬 학과 문화와 다채로운 경험이 가장 궁금해요.',
        extraversion: 1,
        feeling: 1,
        reaction: '따뜻한 친화력과 호기심! 💬',
        types: ['strawberry', 'banana', 'dragonfruit', 'watermelon', 'grapefruit'],
      },
      {
        text: '"학년별 핵심 커리큘럼과 졸업 후 구체적인 취업·진로 로드맵은 어떻게 되나요?"',
        subtext: '전공 전문성을 기르는 실제 배움의 깊이와 진로 성과가 가장 중요해요.',
        extraversion: -1,
        feeling: -1,
        reaction: '철저하고 진지한 미래 설계! 🎯',
        types: ['blueberry', 'carrot', 'apple', 'lime', 'avocado'],
      },
    ],
  },
  {
    id: 4,
    badge: '상황 4 · 친구의 진로 고민',
    scenario: '함께 온 친구가 "아직 하고 싶은 전공을 못 정해서 너무 불안해..."라며 털어놓을 때 나는?',
    title: '친구의 고민을 들었을 때 나의 첫 마디는?',
    choices: [
      {
        text: '"맞아, 그럴 수 있어. 지금 충분히 잘하고 있으니까 조급해하지 마!" 따뜻하게 안아준다.',
        subtext: '친구의 불안한 마음에 온전히 공감하고 기운을 북돋아주는 것이 우선이에요.',
        extraversion: 0,
        feeling: 1,
        reaction: '다정한 공감 힐러의 마음! 💖',
        types: ['strawberry', 'avocado', 'watermelon', 'apple', 'grapefruit'],
      },
      {
        text: '"네가 평소 좋아하는 관심사나 잘했던 활동부터 하나씩 리스트로 적어볼까?" 현실적인 해결책을 제안한다.',
        subtext: '불안을 해소하려면 차분하게 상황을 정리하고 실질적인 대안을 찾는 것이 도움돼요.',
        extraversion: 0,
        feeling: -1,
        reaction: '믿음직한 스마트 솔루션! 💡',
        types: ['lime', 'blueberry', 'carrot', 'dragonfruit', 'banana'],
      },
    ],
  },
  {
    id: 5,
    badge: '상황 5 · 전공 부스 팀 프로젝트',
    scenario: '새로운 팀 프로젝트를 맡아 아이디어를 모아야 할 때, 내가 가장 발휘하고 싶은 역할은?',
    title: '팀 안에서 내가 빛나는 순간은?',
    choices: [
      {
        text: '거침없이 의견을 내고 실행 일정을 주도하며 팀원들의 사기를 북돋우는 역할!',
        subtext: '망설임 없이 행동으로 옮겨 눈에 보이는 결과를 빠르게 만들어내요.',
        extraversion: 1,
        feeling: 0,
        reaction: '파워풀한 추진 대장! 🚀',
        types: ['watermelon', 'banana', 'carrot', 'dragonfruit', 'lime'],
      },
      {
        text: '독창적인 콘셉트를 기획하고 시각 디자인이나 자료 완성도를 극대화하는 역할!',
        subtext: '깊이 있는 고민으로 차별화된 아이디어와 감각적인 퀄리티를 책임져요.',
        extraversion: -1,
        feeling: 0,
        reaction: '남다른 크리에이티브 마인드! 🎨',
        types: ['apple', 'blueberry', 'grapefruit', 'strawberry', 'avocado'],
      },
    ],
  },
  {
    id: 6,
    badge: '상황 6 · 미니어처 토핑 마무리',
    scenario: '나만의 미니어처 아이스크림 스쿱 위에 올릴 마지막 시그니처 토핑을 고를 때 나의 취향은?',
    title: '작품의 마무리를 장식할 나의 감성은?',
    choices: [
      {
        text: '눈길을 사로잡는 화려하고 반짝이는 시럽과 알록달록 사랑스러운 스프링클!',
        subtext: '누가 봐도 한눈에 설레고 즐거워지는 화사한 스타일을 선호해요.',
        extraversion: 1,
        feeling: 1,
        reaction: '화려하고 사랑스러운 감각! 🌈',
        types: ['dragonfruit', 'strawberry', 'grapefruit', 'banana', 'watermelon'],
      },
      {
        text: '단정하고 정갈한 클래식 초코칩과 황금 비율로 얹는 미니 허브 잎 파츠!',
        subtext: '심플함 속에 완성도와 묵직한 고급스러움이 깃든 밸런스를 좋아해요.',
        extraversion: -1,
        feeling: -1,
        reaction: '완벽한 밸런스와 심미안! 🌿',
        types: ['blueberry', 'carrot', 'avocado', 'apple', 'lime'],
      },
    ],
  },
  {
    id: 7,
    badge: '상황 7 · 새로운 분야를 배울 때',
    scenario: '완전히 생소한 새로운 분야나 도구를 처음 접했을 때 나의 학습 방식은?',
    title: '새로운 도전에 마주했을 때 나의 행동은?',
    choices: [
      {
        text: '일단 직접 만져보고 버튼도 눌러보며 몸으로 부딪혀 빠르게 감을 잡는다!',
        subtext: '체험과 시행착오 속에서 가장 직관적이고 빠르게 배울 수 있어요.',
        extraversion: 1,
        feeling: 0,
        reaction: '행동으로 돌파하는 용기! ⚡',
        types: ['banana', 'lime', 'dragonfruit', 'watermelon', 'carrot'],
      },
      {
        text: '관련 서적이나 강의, 튜토리얼을 먼저 꼼꼼히 찾아보고 원리를 파악한 뒤 시작한다.',
        subtext: '기초 원리와 체계를 탄탄하게 이해해야 자신감 있게 나아갈 수 있어요.',
        extraversion: -1,
        feeling: 0,
        reaction: '깊이 있는 학구열과 통찰! 📖',
        types: ['blueberry', 'apple', 'avocado', 'strawberry', 'grapefruit'],
      },
    ],
  },
  {
    id: 8,
    badge: '상황 8 · 직업과 진로의 핵심 가치',
    scenario: '훗날 내가 사회에 진출하여 일할 때, 가장 큰 보람을 느낄 것 같은 순간은?',
    title: '내가 가장 소중하게 생각하는 직업적 가치는?',
    choices: [
      {
        text: '내 작업과 활동을 통해 많은 사람들이 미소 짓고 따뜻한 위로와 행복을 얻을 때!',
        subtext: '사람과 사람을 잇고 긍정적인 온기를 사회에 전파하는 것이 꿈이에요.',
        extraversion: 0,
        feeling: 1,
        reaction: '세상을 밝히는 선한 영향력! ☀️',
        types: ['strawberry', 'avocado', 'banana', 'watermelon', 'apple'],
      },
      {
        text: '누구도 대체할 수 없는 나만의 정밀한 전문 지식과 독보적인 기술을 인정받을 때!',
        subtext: '치열한 노력으로 실력을 갈고닦아 그 분야의 최고 권위자가 되는 것이 꿈이에요.',
        extraversion: 0,
        feeling: -1,
        reaction: '최고를 향한 독보적 전문성! 💎',
        types: ['carrot', 'blueberry', 'lime', 'dragonfruit', 'grapefruit'],
      },
    ],
  },
  {
    id: 9,
    badge: '상황 9 · 축제와 전공박람회 스태프',
    scenario: '은평대전 축제 기획 스태프로 참여한다면 가장 잘 해낼 수 있는 포지션은?',
    title: '행사 현장에서 나의 능력을 가장 잘 살릴 곳은?',
    choices: [
      {
        text: '무대 위에서 마이크를 잡고 안내하거나 방문객들을 환영하는 밝은 소통 스태프!',
        subtext: '특유의 친화력과 센스로 현장의 분위기를 후끈 달아오르게 만들어요.',
        extraversion: 1,
        feeling: 1,
        reaction: '현장의 활력소 분위기 메이커! 🎤',
        types: ['banana', 'watermelon', 'dragonfruit', 'lime', 'grapefruit'],
      },
      {
        text: '전체 동선과 부스 배치, 브랜딩 포스터와 전시 공간을 세심하게 총괄하는 기획 스태프!',
        subtext: '보이지 않는 곳까지 치밀하게 챙기며 완성도 높은 박람회를 만들어내요.',
        extraversion: -1,
        feeling: -1,
        reaction: '축제를 총괄하는 스마트 디렉터! 📐',
        types: ['apple', 'blueberry', 'carrot', 'avocado', 'strawberry'],
      },
    ],
  },
  {
    id: 10,
    badge: '상황 10 · 10년 뒤의 나에게',
    scenario: '앞으로 10년 뒤, 각 분야에서 멋지게 활약하고 있을 때 내가 가장 듣고 싶은 찬사는?',
    title: '내가 꿈꾸는 최고의 미래 순간은?',
    choices: [
      {
        text: '"너와 함께 일하면 언제나 에너지가 넘치고 큰 힘이 돼!" 모두가 함께 일하고 싶어 하는 리더',
        subtext: '서로 좋은 영향을 주고받으며 함께 성장하고 감동을 일궈내는 삶을 꿈꿔요.',
        extraversion: 1,
        feeling: 1,
        reaction: '모두를 빛나게 하는 최고의 파트너! 👑',
        types: ['strawberry', 'watermelon', 'avocado', 'banana', 'grapefruit'],
      },
      {
        text: '"역시 한 분야의 최고 전문가답다! 누구도 따라올 수 없는 실력이야." 독보적인 스페셜리스트',
        subtext: '끊임없는 연구와 정진으로 깊은 내공을 쌓아 세상의 인정을 받는 삶을 꿈꿔요.',
        extraversion: -1,
        feeling: -1,
        reaction: '정상을 향해 달리는 진정한 장인! 🏆',
        types: ['carrot', 'blueberry', 'lime', 'apple', 'dragonfruit'],
      },
    ],
  },
];

export function calculatePersonalityType(
  answersOrScore: QuizChoice[] | number,
  feelingScore?: number
): PersonalityTypeId {
  // If answers array is provided, calculate scores based on 10 types
  if (Array.isArray(answersOrScore)) {
    const scores: Record<PersonalityTypeId, number> = {
      apple: 0,
      dragonfruit: 0,
      blueberry: 0,
      grapefruit: 0,
      banana: 0,
      strawberry: 0,
      watermelon: 0,
      lime: 0,
      carrot: 0,
      avocado: 0,
    };

    answersOrScore.forEach((choice) => {
      if (choice && choice.types) {
        choice.types.forEach((typeId) => {
          scores[typeId] = (scores[typeId] || 0) + 1;
        });
      }
    });

    const candidateOrder: PersonalityTypeId[] = [
      'apple',
      'dragonfruit',
      'blueberry',
      'grapefruit',
      'banana',
      'strawberry',
      'watermelon',
      'lime',
      'carrot',
      'avocado',
    ];

    let highestType: PersonalityTypeId = 'strawberry';
    let maxScore = -1;

    for (const t of candidateOrder) {
      if (scores[t] > maxScore) {
        maxScore = scores[t];
        highestType = t;
      }
    }

    return highestType;
  }

  // Fallback for number scores
  const extraversion = answersOrScore;
  const feeling = feelingScore ?? 0;

  if (extraversion >= 0 && feeling >= 0) return 'strawberry';
  if (extraversion < 0 && feeling >= 0) return 'apple';
  if (extraversion < 0 && feeling < 0) return 'blueberry';
  return 'banana';
}
