import React from 'react';
import { GENERAL_MUDFLAT_INFO } from '../data/mudflatsData';
import { Sparkles, Shield, Waves, Globe, Compass, ChevronRight, Award, Anchor } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface IntroSectionProps {
  onGoToExplorer: () => void;
  onGoToUses: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onGoToExplorer, onGoToUses }) => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 via-sky-50 to-teal-50 border-2 border-amber-200/80 p-6 sm:p-10 shadow-sm">
        <div className="absolute -right-8 -bottom-10 opacity-15 text-[150px] select-none pointer-events-none">
          🦀
        </div>
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-200/80 text-amber-900 rounded-full text-xs font-bold mb-4 tracking-wide shadow-2xs">
            <Sparkles className="w-4 h-4 text-amber-700" />
            초등 과학 연계 갯벌 탐구 길잡이
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display mb-4 leading-tight">
            우리나라의 살아 숨 쉬는 보물, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-teal-700 to-sky-700">
              한국의 갯벌
            </span>을 탐구해 봐요!
          </h1>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
            매일 바닷물이 빠져나가면 나타나는 신비한 진흙 세상, <strong>갯벌</strong>! 
            우리나라 서해안과 남해안 갯벌은 전 세계가 감탄한 <strong>유네스코 세계자연유산</strong>이자, 
            수천 종의 생물이 살아가는 지구의 거대한 보물창고예요. 
            우리나라 지도에서 위치와 특징을 살펴보고 <strong>실험관찰</strong>에 쏙 정리해 볼까요?
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                soundManager.playClick();
                onGoToExplorer();
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold shadow-md transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-5 h-5" />
              <span>7대 대표 갯벌 지도 탐험하기</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                onGoToUses();
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold border-2 border-slate-300 shadow-xs transition-colors"
            >
              <Anchor className="w-5 h-5 text-teal-600" />
              <span>갯벌의 이용 살펴보기</span>
            </button>
          </div>
        </div>
      </section>

      {/* 1. What is a tidal flat? (Definition & Formation) */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl font-bold">
            1
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              갯벌이란 무엇일까요?
            </h2>
            <p className="text-sm text-slate-500">밀물과 썰물이 만들어내는 신비한 자연의 땅</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50/60 rounded-2xl p-5 border border-amber-200/70">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-base mb-2">
              <Waves className="w-5 h-5 text-amber-600" />
              <span>갯벌의 정의 (뜻)</span>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {GENERAL_MUDFLAT_INFO.definition}
            </p>
            <div className="mt-3 text-xs bg-white/90 p-3 rounded-xl text-amber-900 font-medium border border-amber-200">
              💡 <strong>밀물</strong>: 바닷물이 육지 쪽으로 밀려 들어오는 현상 <br />
              💡 <strong>썰물</strong>: 바닷물이 바다 쪽으로 빠져나가는 현상 <br />
              👉 우리나라는 달과 태양의 인력 때문에 하루에 약 2번씩 밀물과 썰물이 반복돼요!
            </div>
          </div>

          <div className="bg-sky-50/60 rounded-2xl p-5 border border-sky-200/70">
            <div className="flex items-center gap-2 text-sky-800 font-bold text-base mb-2">
              <Globe className="w-5 h-5 text-sky-600" />
              <span>갯벌은 어떻게 만들어질까요?</span>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {GENERAL_MUDFLAT_INFO.formation}
            </p>
            <div className="mt-3 text-xs bg-white/90 p-3 rounded-xl text-sky-900 font-medium border border-sky-200">
              🌊 <strong>만들어지는 3대 조건</strong>: <br />
              1. 흙과 모래를 실어 나르는 큰 강이 있어야 해요. <br />
              2. 밀물과 썰물의 차이(조수간만의 차)가 커야 해요. <br />
              3. 파도가 잔잔한 만(바다가 육지로 굽어 들어간 곳)이어야 해요.
            </div>
          </div>
        </div>
      </section>

      {/* 2. Types of Mudflats */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center text-2xl font-bold">
            2
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              갯벌의 3가지 종류 비교하기
            </h2>
            <p className="text-sm text-slate-500">진흙과 모래의 비율에 따라 성격도, 사는 생물도 달라져요!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GENERAL_MUDFLAT_INFO.types.map((type, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-gradient-to-b from-slate-50 to-white rounded-2xl p-5 border-2 border-slate-200 hover:border-amber-400 transition-all hover:shadow-md"
            >
              <div>
                <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 mb-2">
                  {type.badge}
                </span>
                <h3 className="text-xl font-black text-slate-800 font-display mb-2">
                  {type.title}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {type.description}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                <div className="bg-amber-50/70 p-2 rounded-lg">
                  <span className="font-bold text-amber-900">대표 생물: </span>
                  <span className="text-slate-700">{type.creatures}</span>
                </div>
                <div className="bg-sky-50/70 p-2 rounded-lg">
                  <span className="font-bold text-sky-900">대표 지역: </span>
                  <span className="text-slate-700">{type.representative}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The 4 Superpowers of Mudflats */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-bold mb-3 border border-teal-500/30">
            <Shield className="w-3.5 h-3.5" />
            지구와 사람을 살리는 놀라운 능력
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white mb-2">
            갯벌이 가진 4대 슈퍼파워 (보물 기능)
          </h2>
          <p className="text-slate-300 text-sm">
            갯벌은 단순한 진흙탕이 아니라 지구 환경을 지키는 가장 위대한 생태계예요!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {GENERAL_MUDFLAT_INFO.fourSuperpowers.map((power, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 hover:bg-white/15 transition-colors"
            >
              <div className="text-4xl mb-3">{power.icon}</div>
              <h3 className="text-lg font-bold font-display text-amber-300 mb-2">
                {power.title}
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                {power.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. UNESCO World Heritage Feature */}
      <section className="bg-amber-50 rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-xs flex flex-col md:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
          <Award className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <div className="inline-block px-2.5 py-0.5 bg-amber-200 text-amber-900 rounded font-bold text-xs">
            {GENERAL_MUDFLAT_INFO.worldHeritage.title}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
            전 세계가 인정한 대한민국 갯벌의 가치!
          </h3>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {GENERAL_MUDFLAT_INFO.worldHeritage.significance}
          </p>
          <div className="pt-2 text-xs font-semibold text-amber-800 flex flex-wrap gap-2">
            <span className="bg-white px-2 py-1 rounded-md border border-amber-200">충남 서천 갯벌</span>
            <span className="bg-white px-2 py-1 rounded-md border border-amber-200">전북 고창 갯벌</span>
            <span className="bg-white px-2 py-1 rounded-md border border-amber-200">전남 신안 갯벌</span>
            <span className="bg-white px-2 py-1 rounded-md border border-amber-200">전남 보성·순천 갯벌</span>
          </div>
        </div>
      </section>

      {/* Call to Next Step */}
      <div className="text-center py-4">
        <p className="text-slate-600 text-sm mb-4">
          갯벌의 기본 지식을 배웠다면, 이제 우리나라 지도를 보며 <strong>7대 대표 갯벌</strong>을 하나씩 탐험해 볼까요?
        </p>
        <button
          onClick={() => {
            soundManager.playClick();
            onGoToExplorer();
          }}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold text-lg shadow-lg transition-transform hover:scale-102"
        >
          <span>우리나라 7대 갯벌 지도 탐험하기</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
