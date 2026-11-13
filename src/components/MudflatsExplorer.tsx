import React, { useState } from 'react';
import { MudflatInfo } from '../types/mudflat';
import { KoreaMudflatMap } from './KoreaMudflatMap';
import {
  MapPin,
  Sparkles,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Compass,
  Lightbulb,
  Copy
} from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface MudflatsExplorerProps {
  mudflats: MudflatInfo[];
  selectedMudflatId: string;
  onSelectMudflat: (id: string) => void;
  onGoToUses: () => void;
  onGoToQuiz: () => void;
}

export const MudflatsExplorer: React.FC<MudflatsExplorerProps> = ({
  mudflats,
  selectedMudflatId,
  onSelectMudflat,
  onGoToUses,
  onGoToQuiz
}) => {
  const [activeCreatureTab, setActiveCreatureTab] = useState<number>(0);
  const [copiedTip, setCopiedTip] = useState<boolean>(false);

  const current = mudflats.find(m => m.id === selectedMudflatId) || mudflats[0];

  const handleSelect = (id: string) => {
    soundManager.playClick();
    onSelectMudflat(id);
    setActiveCreatureTab(0);
  };

  const handleCopyWorkbookNotes = () => {
    soundManager.playFanfare();
    const textToCopy = `[${current.name} 실험관찰 탐구 정리]
- 위치: ${current.region} (${current.locationDescription})
- 갯벌 종류: ${current.type}
- 주요 특징:
${current.features.map(f => `  • ${f}`).join('\n')}
- 대표 생물: ${current.keyCreatures.map(c => `${c.name}(${c.category})`).join(', ')}
- 흥미로운 이야기: ${current.story.title} - ${current.story.content[0]}`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedTip(true);
    setTimeout(() => setCopiedTip(false), 2500);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Introduction */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold mb-2">
              <Compass className="w-3.5 h-3.5" />
              대한민국 7대 대표 갯벌 랜선 여행
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              우리나라 지도와 함께 만나는 7대 보물 갯벌
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              지도의 핀을 누르거나 갯벌 이름을 선택하여 위치, 생태 환경, 대표 생물, 흥미진진한 이야기를 탐구하고 <strong>실험관찰</strong>에 적어보세요.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                soundManager.playClick();
                onGoToUses();
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold border border-amber-300 text-xs sm:text-sm transition-colors"
            >
              <span>갯벌의 이용 보기</span>
              <ChevronRight className="w-4 h-4 text-amber-700" />
            </button>
          </div>
        </div>

        {/* 7 Mudflats Quick Selection Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-4 border-t border-slate-100 mt-5 no-scrollbar">
          {mudflats.map((m, idx) => {
            const isSelected = m.id === current.id;
            return (
              <button
                key={m.id}
                onClick={() => handleSelect(m.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-amber-500 text-white shadow-md scale-102'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{idx + 1}. {m.name}</span>
                {m.unescoStatus && <span className="text-[11px]">⭐</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Korea Map Section */}
      <section>
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm sm:text-base">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>우리나라 지도 속 {current.name} 위치 확인</span>
          </div>
          <span className="text-xs text-slate-500">
            * 지도의 빨간 핀이 <strong>{current.name}</strong> 위치예요!
          </span>
        </div>

        <KoreaMudflatMap
          mudflats={mudflats}
          selectedMudflatId={current.id}
          onSelectMudflat={handleSelect}
        />
      </section>

      {/* Main Detailed Inspection for the selected mudflat */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm space-y-8">
        {/* Title & Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                {current.badge}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800">
                {current.type}
              </span>
              {current.unescoStatus && (
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                  유네스코 세계자연유산 (한국의 갯벌)
                </span>
              )}
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
              {current.name}
            </h3>
            <p className="text-slate-500 text-sm mt-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>{current.region}</span>
              <span className="mx-1.5 text-slate-300">|</span>
              <span>면적: {current.areaSummary}</span>
            </p>
          </div>

          {/* Copy Workbook Notes Button */}
          <div className="relative">
            <button
              onClick={handleCopyWorkbookNotes}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm shadow-md transition-transform hover:scale-102 active:scale-98"
            >
              <Copy className="w-4 h-4" />
              <span>실험관찰 정리 내용 복사하기</span>
            </button>
            {copiedTip && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 animate-bounce z-20">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>실험관찰 정리 내용이 복사되었어요!</span>
              </div>
            )}
          </div>
        </div>

        {/* 1. Location and Environmental Features */}
        <div>
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-3">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>1. 갯벌의 위치 및 지형 환경 특징</span>
          </div>

          <div className="bg-amber-50/60 rounded-2xl p-5 border border-amber-200/70 mb-4">
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
              📍 <strong>위치 상세:</strong> {current.locationDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.features.map((feature, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5"
              >
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-black flex items-center justify-center shrink-0 text-xs">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Key Creatures (Interactive Gallery with Real Photos) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <span className="text-xl">📸</span>
              <span>2. {current.name}에 사는 대표 생물 친구들 (실제 사진)</span>
            </div>
            <span className="text-xs text-slate-500">생물 카드를 누르면 실제 사진과 생태가 펼쳐져요!</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {current.keyCreatures.map((creature, idx) => {
              const isSelected = activeCreatureTab === idx;
              return (
                <button
                  key={creature.id}
                  onClick={() => {
                    soundManager.playClick();
                    setActiveCreatureTab(idx);
                  }}
                  className={`text-left rounded-2xl border-2 transition-all overflow-hidden flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'border-amber-500 bg-amber-50/90 shadow-md ring-3 ring-amber-400/30'
                      : 'border-slate-200 bg-white hover:border-amber-300 hover:shadow-xs'
                  }`}
                >
                  {/* Photo Thumbnail */}
                  <div className="relative w-full h-28 bg-slate-100 overflow-hidden">
                    <img
                      src={creature.imageUrl}
                      alt={creature.imageAlt || `${creature.name} 실제 사진`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        // Fallback in case of network issue
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'text-4xl');
                          target.parentElement.innerHTML = creature.emoji;
                        }
                      }}
                    />
                    <div className="absolute top-2 left-2 text-base px-1.5 py-0.5 rounded-lg bg-black/50 backdrop-blur-xs text-white">
                      {creature.emoji}
                    </div>
                    <span className="absolute top-2 right-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/90 text-slate-700 shadow-xs">
                      {creature.category}
                    </span>
                  </div>

                  {/* Card Info */}
                  <div className="p-3">
                    <h4 className="font-bold text-sm text-slate-900 font-display">
                      {creature.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {creature.oneLiner}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Creature Detail Spotlight with Large Photo */}
          {current.keyCreatures[activeCreatureTab] && (
            <div className="bg-gradient-to-r from-amber-50 via-sky-50 to-teal-50 rounded-3xl p-5 sm:p-6 border-2 border-amber-200/90 shadow-xs flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Real Photo Large Display */}
              <div className="relative w-full md:w-72 h-56 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-slate-900 shrink-0">
                <img
                  src={current.keyCreatures[activeCreatureTab].imageUrl}
                  alt={current.keyCreatures[activeCreatureTab].imageAlt || `${current.keyCreatures[activeCreatureTab].name} 실제 생태 사진`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-xl flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-1">
                    <span>{current.keyCreatures[activeCreatureTab].emoji}</span>
                    <span>{current.keyCreatures[activeCreatureTab].name} 실제 사진</span>
                  </span>
                  <span className="text-amber-300 font-bold">생태 도감</span>
                </div>
              </div>

              {/* Text Description */}
              <div className="flex-1 space-y-2 text-left w-full">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                    {current.keyCreatures[activeCreatureTab].name}
                  </h4>
                  <span className="text-xs px-2.5 py-0.5 bg-amber-200 text-amber-900 font-bold rounded-full">
                    {current.keyCreatures[activeCreatureTab].category}
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-teal-100 text-teal-800 font-semibold rounded-md">
                    실제 생태 서식 사진 확인
                  </span>
                </div>

                <p className="text-sm font-bold text-amber-900">
                  &ldquo;{current.keyCreatures[activeCreatureTab].oneLiner}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {current.keyCreatures[activeCreatureTab].description}
                </p>

                <div className="mt-3 text-xs bg-white/95 p-3 rounded-2xl border border-amber-300 text-amber-950 flex items-start gap-2 shadow-2xs">
                  <span className="text-amber-600 font-bold text-sm shrink-0">🔍 신기한 비밀:</span>
                  <span className="leading-relaxed font-medium">{current.keyCreatures[activeCreatureTab].funFact}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. Exciting Story for Kids */}
        <div>
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-3">
            <BookOpen className="w-5 h-5 text-teal-600" />
            <span>3. 초등학생이 재미있어할 갯벌 이야기</span>
          </div>

          <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-bold mb-3 border border-teal-500/30">
              📖 흥미진진 갯벌 스토리
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-display text-amber-300 mb-1">
              {current.story.title}
            </h4>
            <p className="text-xs sm:text-sm text-teal-200 mb-5">
              {current.story.subtitle}
            </p>

            <div className="space-y-3 text-slate-200 text-xs sm:text-sm leading-relaxed mb-6">
              {current.story.content.map((paragraph, idx) => (
                <p key={idx} className="bg-white/5 p-3 rounded-xl border border-white/10">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-amber-400/20 border border-amber-400/40 rounded-xl p-3.5 flex items-start gap-2 text-amber-200 text-xs">
              <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">생각해 볼 점:</strong> {current.story.moralOrTip}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Workbook Observation Notes (실험관찰에 쏙! 탐구 정리) */}
        <div className="bg-slate-50 rounded-2xl p-5 border-2 border-dashed border-teal-300">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-teal-950 font-bold text-sm sm:text-base">
              <ClipboardCheck className="w-5 h-5 text-teal-600" />
              <span>실험관찰에 쏙! 핵심 탐구 정리 노트</span>
            </div>
            <span className="text-xs text-teal-700 bg-teal-100 px-2.5 py-0.5 rounded-full font-semibold">
              실험관찰 책에 적어보세요
            </span>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {current.observationKeyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">✔</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Navigation between mudflats */}
      <div className="flex items-center justify-between pt-2">
        {(() => {
          const currentIndex = mudflats.findIndex(m => m.id === current.id);
          const prev = currentIndex > 0 ? mudflats[currentIndex - 1] : null;
          const next = currentIndex < mudflats.length - 1 ? mudflats[currentIndex + 1] : null;

          return (
            <>
              {prev ? (
                <button
                  onClick={() => handleSelect(prev.id)}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 shadow-2xs"
                >
                  <span>← 이전: {prev.name}</span>
                </button>
              ) : <div />}

              {next ? (
                <button
                  onClick={() => handleSelect(next.id)}
                  className="px-4 py-2 rounded-xl bg-amber-500 text-white text-xs sm:text-sm font-bold hover:bg-amber-600 flex items-center gap-1.5 shadow-xs"
                >
                  <span>다음: {next.name} →</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    soundManager.playClick();
                    onGoToUses();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-teal-700 text-white text-xs sm:text-sm font-bold hover:bg-teal-800 flex items-center gap-1.5 shadow-xs"
                >
                  <span>갯벌의 이용 배우러 가기 🌊</span>
                </button>
              )}
            </>
          );
        })()}
      </div>
    </div>
  );
};
