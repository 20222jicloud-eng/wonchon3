import React, { useState } from 'react';
import { MudflatInfo } from '../types/mudflat';
import { MapPin, Navigation, Sparkles, CheckCircle2, Waves, Compass } from 'lucide-react';
import southKoreaMap from '@svg-maps/south-korea';
import { soundManager } from '../utils/soundEffects';

interface KoreaMudflatMapProps {
  mudflats: MudflatInfo[];
  selectedMudflatId: string;
  onSelectMudflat: (id: string) => void;
  compact?: boolean;
}

// Korean names for the 17 administrative divisions
const PROVINCE_KOREAN_NAMES: Record<string, string> = {
  'seoul': '서울특별시',
  'busan': '부산광역시',
  'daegu': '대구광역시',
  'incheon': '인천광역시',
  'gwangju': '광주광역시',
  'daejeon': '대전광역시',
  'ulsan': '울산광역시',
  'sejong': '세종특별자치시',
  'gyeonggi': '경기도',
  'gangwon': '강원특별자치도',
  'north-chungcheong': '충청북도',
  'south-chungcheong': '충청남도',
  'north-jeolla': '전북특별자치도',
  'south-jeolla': '전라남도',
  'north-gyeongsang': '경상북도',
  'south-gyeongsang': '경상남도',
  'jeju': '제주특별자치도',
};

export const KoreaMudflatMap: React.FC<KoreaMudflatMapProps> = ({
  mudflats,
  selectedMudflatId,
  onSelectMudflat,
  compact = false
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selectedMudflat = mudflats.find(m => m.id === selectedMudflatId) || mudflats[0];
  const activeHovered = mudflats.find(m => m.id === (hoveredId || selectedMudflatId));

  const handlePinClick = (id: string) => {
    soundManager.playClick();
    onSelectMudflat(id);
  };

  return (
    <div className={`bg-white rounded-3xl border-2 border-amber-200/90 shadow-md p-4 sm:p-6 ${compact ? '' : 'lg:flex lg:gap-6'}`}>
      {/* Map visual column */}
      <div className={`relative flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 via-cyan-50/40 to-blue-50/50 rounded-2xl p-4 border border-sky-100 ${compact ? 'h-[400px]' : 'lg:w-1/2 min-h-[480px]'}`}>
        
        {/* Sea Labels (Geographically verified) */}
        <div className="absolute top-10 left-6 text-xs sm:text-sm font-black text-sky-700/80 select-none tracking-wider pointer-events-none">
          황해 (서해)
          <div className="text-[10px] font-normal text-sky-600/70">조수간만의 차가 큰 갯벌 지대</div>
        </div>
        <div className="absolute top-20 right-8 text-xs sm:text-sm font-black text-blue-700/80 select-none tracking-wider pointer-events-none">
          동해 (East Sea)
        </div>
        <div className="absolute bottom-10 right-16 text-xs sm:text-sm font-black text-teal-700/80 select-none tracking-wider pointer-events-none">
          남해 (South Sea)
        </div>

        {/* Real South Korea Map SVG from @svg-maps/south-korea */}
        <svg
          viewBox={southKoreaMap.viewBox || '0 0 524 631'}
          className="w-full h-full max-h-[460px] drop-shadow-sm select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="mapShadow" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#0369a1" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* Render All 17 Provinces of South Korea */}
          <g filter="url(#mapShadow)">
            {(southKoreaMap.locations as Array<{ id: string; name: string; path: string }>).map(loc => {
              // Highlight provinces where the 7 mudflats are located
              const hasMudflat = ['incheon', 'south-chungcheong', 'north-jeolla', 'south-jeolla', 'south-gyeongsang'].includes(loc.id);
              return (
                <path
                  key={loc.id}
                  id={loc.id}
                  d={loc.path}
                  fill={hasMudflat ? '#fef3c7' : '#f8fafc'}
                  stroke="#cbd5e1"
                  strokeWidth="1.2"
                  className="transition-colors hover:fill-amber-100/70"
                >
                  <title>{PROVINCE_KOREAN_NAMES[loc.id] || loc.name}</title>
                </path>
              );
            })}
          </g>

          {/* Dokdo and Ulleungdo Highlight Labels in East Sea */}
          <text x="395" y="195" fontSize="10" fontWeight="bold" fill="#0369a1">
            울릉도
          </text>
          <text x="495" y="225" fontSize="9" fontWeight="bold" fill="#0369a1">
            독도
          </text>

          {/* Jeju Label */}
          <text x="112" y="614" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f766e">
            제주특별자치도
          </text>

          {/* The 7 Mudflats Pins */}
          {mudflats.map((m, idx) => {
            const isSelected = m.id === selectedMudflatId;
            const isHovered = m.id === hoveredId;

            return (
              <g
                key={m.id}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => handlePinClick(m.id)}
                onMouseEnter={() => setHoveredId(m.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Ping Ripple when selected */}
                {isSelected && (
                  <>
                    <circle
                      cx={m.coordinates.x}
                      cy={m.coordinates.y}
                      r="22"
                      fill="#ef4444"
                      opacity="0.3"
                      className="animate-ping"
                    />
                    <circle
                      cx={m.coordinates.x}
                      cy={m.coordinates.y}
                      r="12"
                      fill="#ef4444"
                      opacity="0.2"
                    />
                  </>
                )}

                {/* Pin Base Circle */}
                <circle
                  cx={m.coordinates.x}
                  cy={m.coordinates.y}
                  r={isSelected ? 6 : 4.5}
                  fill={isSelected ? '#dc2626' : isHovered ? '#ea580c' : '#0284c7'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />

                {/* Pin Pointer Marker */}
                <g transform={`translate(${m.coordinates.x}, ${m.coordinates.y - 14})`}>
                  <path
                    d="M 0 0 C -9 -11, -11 -20, 0 -26 C 11 -20, 9 -11, 0 0 Z"
                    fill={isSelected ? '#dc2626' : isHovered ? '#ea580c' : '#0369a1'}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                  />
                  <text
                    x="0"
                    y="-13"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="black"
                    fill="#ffffff"
                  >
                    {idx + 1}
                  </text>
                </g>

                {/* Name Label with shadow for maximum legibility */}
                <text
                  x={m.coordinates.x + (m.coordinates.x > 200 ? 14 : -14)}
                  y={m.coordinates.y - 2}
                  textAnchor={m.coordinates.x > 200 ? 'start' : 'end'}
                  fontSize="12"
                  fontWeight={isSelected ? '900' : '700'}
                  fill={isSelected ? '#b91c1c' : '#1e293b'}
                  className="select-none"
                  stroke="#ffffff"
                  strokeWidth="3.5"
                  paintOrder="stroke"
                  strokeLinejoin="round"
                >
                  {m.name}
                  {m.unescoStatus && ' ⭐'}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Map Legend */}
        <div className="w-full mt-2 flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-[11px] text-slate-700 bg-white/90 backdrop-blur rounded-xl border border-slate-200">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block animate-pulse"></span>
            <span className="font-bold text-red-700">선택된 갯벌 위치</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-500 font-bold">⭐</span>
            <span>유네스코 세계자연유산</span>
          </div>
          <div className="text-slate-600 font-medium">
            총 <strong>7대 대표 갯벌</strong>
          </div>
        </div>
      </div>

      {/* Info Column for the selected mudflat */}
      <div className={`flex flex-col justify-between mt-4 lg:mt-0 ${compact ? '' : 'lg:w-1/2'}`}>
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
            <Navigation className="w-3.5 h-3.5 text-amber-600" />
            <span>지도에서 확인하는 우리나라 갯벌 위치</span>
          </div>

          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-800 font-display flex items-center gap-2">
              <span>{activeHovered?.name}</span>
              {activeHovered?.unescoStatus && (
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full border border-amber-300">
                  세계자연유산
                </span>
              )}
            </h3>
            <span className="text-xs px-2.5 py-1 bg-sky-100 text-sky-800 font-bold rounded-lg">
              {activeHovered?.type}
            </span>
          </div>

          <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-2xl mb-3 text-sm text-slate-700">
            <div className="font-bold text-amber-950 mb-1 flex items-center gap-1">
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span>{activeHovered?.region}</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700">
              {activeHovered?.locationDescription}
            </p>
          </div>

          {/* Quick Features Preview */}
          <div className="space-y-1.5 mb-3">
            <div className="text-xs font-bold text-slate-700 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>이 갯벌만의 특별한 특징</span>
            </div>
            {activeHovered?.features.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="text-blue-600 font-bold">✔</span>
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>

          {/* Representative Creatures preview chips */}
          <div className="mb-4">
            <div className="text-xs font-bold text-slate-700 mb-1.5">
              살고 있는 대표 생물:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeHovered?.keyCreatures.map(c => (
                <span
                  key={c.id}
                  className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 bg-white border border-slate-200 rounded-xl text-slate-700 shadow-2xs"
                >
                  <img
                    src={c.imageUrl}
                    alt={c.name}
                    className="w-4 h-4 rounded-full object-cover shrink-0"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="font-semibold">{c.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mudflat Quick Selection Grid */}
        <div className="pt-3 border-t border-slate-200">
          <div className="text-xs font-bold text-slate-600 mb-2">
            다른 갯벌 위치 바로보기 (클릭해 보세요):
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {mudflats.map((m, idx) => {
              const isCurrent = m.id === selectedMudflatId;
              return (
                <button
                  key={m.id}
                  onClick={() => handlePinClick(m.id)}
                  className={`text-xs text-left px-2.5 py-1.5 rounded-xl font-medium transition-all flex items-center justify-between ${
                    isCurrent
                      ? 'bg-amber-500 text-white shadow-xs font-bold'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span className="truncate">{idx + 1}. {m.name.replace(' 갯벌', '')}</span>
                  {isCurrent && <CheckCircle2 className="w-3.5 h-3.5 shrink-0 ml-1" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
