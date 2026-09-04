import React from 'react';
import { Sparkles, IceCream, Trophy, BookOpen, User, RefreshCw } from 'lucide-react';
import { AppScreen } from '../types';

interface NavbarProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
  nickname: string;
  onResetNickname: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  nickname,
  onResetNickname,
  onOpenAdmin,
}) => {
  return (
    <header className="sticky top-0 z-50 h-16 bg-white border-b border-slate-200 px-3 sm:px-6 md:px-8 flex items-center justify-between shadow-xs">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Brand Logo & Title */}
        <button
          onClick={() => onNavigate('start')}
          id="nav-logo-btn"
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-base shadow-xs group-hover:bg-blue-700 transition-colors">
            M
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-slate-900 leading-tight">
                은평대전 전공박람회 <span className="text-blue-600 font-medium">×</span> 미니유공방
              </h1>
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium uppercase tracking-wider hidden sm:block">
              MINIU WORKSHOP
            </div>
          </div>
        </button>

        {/* Navigation Tabs (제작안내 removed) */}
        <nav className="flex items-center gap-1 sm:gap-1.5">
          <button
            onClick={() => onNavigate('quiz')}
            id="nav-tab-quiz"
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              currentScreen === 'quiz' || currentScreen === 'result'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">성향진단</span>
            <span className="sm:hidden">진단</span>
          </button>

          <button
            onClick={() => onNavigate('game')}
            id="nav-tab-game"
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              currentScreen === 'game'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">카드랭킹</span>
            <span className="sm:hidden">랭킹</span>
          </button>

          <button
            onClick={() => onNavigate('guestbook')}
            id="nav-tab-guestbook"
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              currentScreen === 'guestbook'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>방명록</span>
          </button>
        </nav>

        {/* Right Section: Participant Status & Top-Right M Logo (Admin Mode) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {nickname ? (
            <div className="flex items-center gap-2 pl-2 sm:pl-3 border-l border-slate-200">
              <div className="hidden md:flex flex-col items-end leading-none">
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">참여자</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 max-w-[90px] truncate mt-0.5">
                  {nickname}
                </span>
              </div>
              <button
                onClick={onResetNickname}
                id="nav-reset-nick-btn"
                title="닉네임 변경"
                className="p-1 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : null}

          {/* Mini-U Workshop M Brand Logo on Top-Right -> Admin Mode */}
          <button
            type="button"
            onClick={onOpenAdmin}
            title="관리자 모드"
            id="nav-top-right-m-logo"
            className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center font-black text-sm shadow-xs transition-transform active:scale-95 cursor-pointer"
          >
            M
          </button>
        </div>
      </div>
    </header>
  );
};
