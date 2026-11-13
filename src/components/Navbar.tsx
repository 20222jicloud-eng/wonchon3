import React, { useState } from 'react';
import { Compass, Waves, HelpCircle, Volume2, VolumeX, Anchor, Share2 } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export type NavTab = 'intro' | 'explorer' | 'uses' | 'quiz';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab, onOpenShare }) => {
  const [muted, setMuted] = useState<boolean>(soundManager.getMuted());

  const toggleSound = () => {
    const next = !muted;
    soundManager.setMuted(next);
    setMuted(next);
    if (!next) {
      soundManager.playClick();
    }
  };

  const navItems: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'intro', label: '1. 갯벌이란?', icon: <Waves className="w-4 h-4" /> },
    { id: 'explorer', label: '2. 7대 갯벌 탐험', icon: <Compass className="w-4 h-4" />, badge: '우리나라 지도' },
    { id: 'uses', label: '3. 갯벌의 이용', icon: <Anchor className="w-4 h-4" /> },
    { id: 'quiz', label: '4. 갯벌 퀴즈', icon: <HelpCircle className="w-4 h-4" />, badge: '인증서' },
  ];

  return (
    <header className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Title */}
          <div
            onClick={() => {
              soundManager.playClick();
              onSelectTab('intro');
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-white flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform">
              🦀
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
                  한국의 갯벌
                </span>
                <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded border border-amber-300">
                  초등 탐구
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                우리나라 7대 갯벌 위치·생태 탐구 & 실험관찰 길잡이
              </p>
            </div>
          </div>

          {/* Controls: Share & Sound */}
          <div className="flex items-center gap-2">
            {/* Classroom / Student Share Button */}
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenShare();
              }}
              className="px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-transform hover:scale-102 flex items-center gap-1.5 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>사이트 공유 (QR코드)</span>
            </button>

            {/* Sound Toggle Button */}
            <button
              onClick={toggleSound}
              title={muted ? '소리 켜기' : '소리 끄기'}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            >
              {muted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-amber-600" />}
              <span className="hidden md:inline">{muted ? '소리 끔' : '효과음'}</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex items-center gap-1.5 sm:gap-3 overflow-x-auto pb-2.5 -mb-px no-scrollbar">
          {navItems.map(item => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  soundManager.playClick();
                  onSelectTab(item.id);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive ? 'bg-amber-700 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
