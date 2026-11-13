import React from 'react';
import { MUDFLAT_USES } from '../data/mudflatsData';
import { Anchor, Sparkles, HeartHandshake, CheckCircle2, ChevronRight, Compass, HelpCircle } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface UsesSectionProps {
  onGoToExplorer: () => void;
  onGoToQuiz: () => void;
}

export const UsesSection: React.FC<UsesSectionProps> = ({ onGoToExplorer, onGoToQuiz }) => {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white rounded-3xl p-6 sm:p-10 shadow-md">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-bold mb-3 border border-teal-500/30">
            <Anchor className="w-3.5 h-3.5" />
            갯벌과 우리의 일상생활
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white mb-3">
            갯벌은 우리에게 어떤 도움을 줄까요?
          </h2>
          <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
            갯벌은 맛있는 해산물을 안겨주는 어머니 같은 바다이자, 가족들과 즐거운 추억을 쌓는 생태 놀이터이고, 
            지구의 기후 위기를 막아주는 고마운 탄소 흡수원이에요. 
            우리가 갯벌을 어떻게 이용하고 지켜가야 하는지 알아보고 <strong>실험관찰</strong>에 정리해 볼까요?
          </p>
        </div>
      </section>

      {/* Grid of 5 Major Uses */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MUDFLAT_USES.map((use, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-teal-400 transition-all hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">{use.icon}</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                  {idx + 1}번째 가치
                </span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 mb-2">
                {use.category}
              </h3>
              <p className="text-sm text-slate-700 font-medium mb-3 leading-snug">
                {use.desc}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                {use.detail}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <div className="text-[11px] font-bold text-teal-800 mb-1.5">
                대표 사례 및 키워드:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {use.examples.map((ex, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-teal-50 text-teal-900 font-semibold px-2 py-0.5 rounded-md border border-teal-200"
                  >
                    #{ex}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* 6th Card: Future & Conservation Promise */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border-2 border-amber-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">🌱</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900">
                우리의 실천
              </span>
            </div>
            <h3 className="text-xl font-bold font-display text-amber-950 mb-2">
              초등학생이 지키는 갯벌 약속
            </h3>
            <p className="text-sm text-amber-900 leading-relaxed mb-4">
              갯벌을 이용할 때는 생물들을 마구잡이로 잡지 않고, 어린 생물은 다시 놓아주며, 
              쓰레기를 절대 버리지 않는 약속이 필요해요!
            </p>
          </div>
          <div className="text-xs text-amber-800 bg-white/80 p-3 rounded-xl border border-amber-200 font-medium space-y-1">
            <div>✅ 갯벌 체험 후 어린 조개는 꼭 살려주기</div>
            <div>✅ 비닐봉지와 플라스틱 챙겨오기</div>
            <div>✅ 합성세제 줄여 바다 깨끗하게 하기</div>
          </div>
        </div>
      </div>

      {/* Comparison: Past Reclamation vs Modern Mudflat Restoration */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display mb-2 flex items-center gap-2">
          <HeartHandshake className="w-6 h-6 text-teal-600" />
          <span>생각해 보기: 갯벌을 메우던 과거와 되살리는 오늘날</span>
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mb-6">
          과거에는 농경지와 공장을 만들기 위해 갯벌을 흙으로 메우는 "간척 사업"을 많이 했지만, 
          오늘날에는 오히려 갯벌의 가치를 깨닫고 바닷길을 다시 터주는 "역간척"과 복원을 하고 있어요.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950">
            <span className="font-bold text-rose-700 block mb-1">❌ 무분별한 간척 사업의 문제점</span>
            <ul className="space-y-1 text-slate-700">
              <li>• 수많은 철새와 해양 생물들이 보금자리를 잃고 사라졌어요.</li>
              <li>• 자연 정화 능력이 없어져 바닷물이 오염되고 적조 현상이 생겼어요.</li>
              <li>• 큰 태풍과 파도가 올 때 자연 방패가 사라져 침수 피해가 커졌어요.</li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950">
            <span className="font-bold text-emerald-800 block mb-1">⭕ 오늘날 갯벌 복원의 지혜</span>
            <ul className="space-y-1 text-slate-700">
              <li>• 갯벌을 지키면 수산물 생산과 생태 관광으로 더 큰 경제적 가치가 생겨요.</li>
              <li>• 유네스코 세계자연유산으로 등재되어 전 세계인의 사랑을 받아요.</li>
              <li>• 탄소를 빨아들이는 블루카본으로 지구 온난화를 막는 최고의 해법이에요!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={() => {
            soundManager.playClick();
            onGoToExplorer();
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold border-2 border-slate-300 text-sm shadow-xs transition-all hover:scale-102"
        >
          <Compass className="w-4 h-4 text-amber-600" />
          <span>← 7대 갯벌 지도 다시 보기</span>
        </button>
        <button
          onClick={() => {
            soundManager.playClick();
            onGoToQuiz();
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-all hover:scale-102"
        >
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span>마지막 단계: 갯벌 퀴즈 풀러 가기 🎯</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
