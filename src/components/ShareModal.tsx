import React, { useState, useEffect, useRef } from 'react';
import { X, Copy, CheckCircle2, Share2, QrCode, Smartphone, ExternalLink, School } from 'lucide-react';
import QRCode from 'qrcode';
import { soundManager } from '../utils/soundEffects';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [shareUrl, setShareUrl] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Determine the best public URL to share
    const sharedAppUrl = 'https://ais-pre-hxq5mp4dx77gwk7nqejmhh-51728309261.asia-northeast1.run.app';
    if (typeof window !== 'undefined') {
      const current = window.location.href;
      // If we are on the dev or pre url, prefer the pre (shared) url
      if (current.includes('ais-dev-')) {
        setShareUrl(sharedAppUrl);
      } else {
        setShareUrl(current);
      }
    } else {
      setShareUrl(sharedAppUrl);
    }
  }, []);

  // Generate QR code when modal opens
  useEffect(() => {
    if (isOpen && canvasRef.current && shareUrl) {
      QRCode.toCanvas(
        canvasRef.current,
        shareUrl,
        {
          width: 220,
          margin: 2,
          color: {
            dark: '#0f172a',
            light: '#ffffff'
          }
        },
        error => {
          if (error) console.error('Failed to generate QR code', error);
        }
      );
    }
  }, [isOpen, shareUrl]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    soundManager.playClick();
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleNativeShare = async () => {
    soundManager.playClick();
    if (navigator.share) {
      try {
        await navigator.share({
          title: '한국의 갯벌 - 초등학생 갯벌 탐구 & 실험관찰 길잡이',
          text: '우리나라 7대 대표 갯벌(강화도, 서천, 고창, 신안, 진도, 보성순천, 봉암)의 위치와 생태를 탐구하고 퀴즈를 풀어보세요!',
          url: shareUrl,
        });
      } catch {
        // User cancelled share
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-amber-300 relative space-y-6">
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          title="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1 pt-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 mx-auto flex items-center justify-center text-2xl shadow-xs">
            📢
          </div>
          <h3 className="text-2xl font-black text-slate-900 font-display">
            『한국의 갯벌』 학생들과 공유하기
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            링크를 복사하거나 QR 코드를 화면에 띄워 학생들이 쉽게 접속하도록 안내해 주세요.
          </p>
        </div>

        {/* 1. QR Code Display */}
        <div className="bg-gradient-to-b from-amber-50 to-orange-50/40 rounded-2xl p-5 border border-amber-200 flex flex-col items-center justify-center text-center">
          <div className="bg-white p-2.5 rounded-2xl shadow-sm border border-slate-200 mb-2">
            <canvas ref={canvasRef} className="block w-[200px] h-[200px]" />
          </div>
          <span className="text-xs font-bold text-amber-900 flex items-center gap-1">
            <QrCode className="w-3.5 h-3.5 text-amber-600" />
            <span>교실 TV나 모니터에 띄워 카메라로 스캔!</span>
          </span>
          <span className="text-[11px] text-slate-500 mt-0.5">
            학생들의 태블릿(아이패드, 갤럭시탭, 크롬북)이나 스마트폰 카메라로 비추면 바로 열려요.
          </span>
        </div>

        {/* 2. Direct Link URL Box */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <span>공유용 웹사이트 주소 (URL)</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl text-slate-800 font-mono select-all outline-none"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer shrink-0 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-500 hover:bg-amber-600 text-white'
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>복사완료!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>주소 복사</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3. Classroom Sharing Tips */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs text-slate-600 space-y-1.5">
          <div className="font-bold text-slate-800 flex items-center gap-1 text-[13px] mb-1">
            <School className="w-4 h-4 text-teal-600" />
            <span>선생님을 위한 학급 공유 안내</span>
          </div>
          <div>
            • <strong>학급 게시판</strong>: e학습터, 위두랑, 패들렛(Padlet), 클래스123, 학급 밴드에 주소를 올려주세요.
          </div>
          <div>
            • <strong>수업 활용</strong>: 학생들이 7대 갯벌 위치와 생물을 조사하며 과학 『실험관찰』 책에 기록하고, 마지막에 퀴즈를 풀어 박사 인증서를 발급받게 지도해 주세요.
          </div>
        </div>

        {/* Native mobile share if supported */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button
            onClick={handleNativeShare}
            className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-amber-400" />
            <span>모바일 앱(카카오톡, 문자 등)으로 공유하기</span>
          </button>
        )}
      </div>
    </div>
  );
};
