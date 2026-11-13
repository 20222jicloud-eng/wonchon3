import React, { useState } from 'react';
import { MUDFLATS_DATA } from './data/mudflatsData';
import { Navbar, NavTab } from './components/Navbar';
import { IntroSection } from './components/IntroSection';
import { MudflatsExplorer } from './components/MudflatsExplorer';
import { UsesSection } from './components/UsesSection';
import { QuizSection } from './components/QuizSection';
import { ShareModal } from './components/ShareModal';
import { X } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('intro');
  const [selectedMudflatId, setSelectedMudflatId] = useState<string>('ganghwa');
  const [showHelperTip, setShowHelperTip] = useState<boolean>(true);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

  // Scroll to top when changing tab
  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Floating helper character message per tab
  const getHelperMessage = () => {
    switch (currentTab) {
      case 'intro':
        return '안녕! 나는 갯벌 박사 꽃게랑이야 🦀 갯벌이 왜 세계자연유산인지 1번부터 차근차근 살펴보자!';
      case 'explorer':
        return '지도의 7개 핀을 눌러봐! 실제 우리나라 지도에서 강화도부터 순천만까지 위치와 생물을 확인하고 실험관찰에 쏙 적어보자 🗺️';
      case 'uses':
        return '우리가 먹는 바지락과 소금, 그리고 기후위기를 막는 블루카본까지! 갯벌이 우리를 얼마나 도와주는지 알아볼까? 🌊';
      case 'quiz':
        return '퀴즈를 풀고 갯벌 박사 인증서를 받아가! 만점에 도전해 볼까? 🎯';
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 flex flex-col font-sans selection:bg-amber-200">
      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenShare={() => setIsShareModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {currentTab === 'intro' && (
          <IntroSection
            onGoToExplorer={() => handleSelectTab('explorer')}
            onGoToUses={() => handleSelectTab('uses')}
          />
        )}

        {currentTab === 'explorer' && (
          <MudflatsExplorer
            mudflats={MUDFLATS_DATA}
            selectedMudflatId={selectedMudflatId}
            onSelectMudflat={setSelectedMudflatId}
            onGoToUses={() => handleSelectTab('uses')}
            onGoToQuiz={() => handleSelectTab('quiz')}
          />
        )}

        {currentTab === 'uses' && (
          <UsesSection
            onGoToExplorer={() => handleSelectTab('explorer')}
            onGoToQuiz={() => handleSelectTab('quiz')}
          />
        )}

        {currentTab === 'quiz' && (
          <QuizSection
            onGoToExplorer={() => handleSelectTab('explorer')}
          />
        )}
      </main>

      {/* Classroom Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* Floating Crab Mascot Guide (no print) */}
      {showHelperTip && (
        <div className="no-print fixed bottom-5 right-5 z-40 max-w-xs animate-slide-up">
          <div className="bg-white rounded-2xl p-3.5 shadow-xl border-2 border-amber-400 flex items-start gap-3 relative">
            <button
              onClick={() => setShowHelperTip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 text-xs shadow-sm cursor-pointer"
              title="닫기"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="text-3xl shrink-0 select-none animate-bounce">
              🦀
            </div>
            <div className="text-xs text-slate-700 leading-snug">
              <span className="font-extrabold text-amber-800 block mb-0.5">
                꼬마 게 &lsquo;꽃게랑이&rsquo;의 꿀팁
              </span>
              <p>{getHelperMessage()}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer (no print) */}
      <footer className="no-print mt-16 bg-white border-t border-slate-200 py-8 px-4 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 font-display text-slate-700 text-sm">
            <span>🦀 한국의 갯벌 탐구 - 초등 과학 및 실험관찰 길잡이</span>
          </div>
          <p>
            초등학교 과학 갯벌 생태계 탐구 학습용 | 7대 대표 갯벌: 강화도, 서천, 고창, 신안, 진도, 보성순천, 봉암
          </p>
          <p className="text-[11px] text-slate-400">
            유네스코 세계자연유산 &lsquo;한국의 갯벌(Getbol, Korean Tidal Flats)&rsquo;과 국토지리정보원 정밀 지리 자료를 바탕으로 제작되었습니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
