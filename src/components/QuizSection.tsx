import React, { useState, useRef, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import {
  HelpCircle,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Printer,
  Medal,
  Download,
  FileDown,
  Edit2,
  Compass,
  ArrowRight,
  Copy,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { jsPDF } from 'jspdf';
import { soundManager } from '../utils/soundEffects';
import { drawCertificateToCanvas } from '../utils/certificateCanvas';

interface QuizSectionProps {
  onGoToExplorer: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ onGoToExplorer }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number>>({});
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<Record<number, boolean>>({});
  const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [studentNameInput, setStudentNameInput] = useState<string>('');
  const [confirmedName, setConfirmedName] = useState<string>('');
  const [isSavingPdf, setIsSavingPdf] = useState<boolean>(false);
  const [isSavingImage, setIsSavingImage] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'info'; text: string } | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('');

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (optIndex: number) => {
    if (isAnswerSubmitted[currentQ.id]) return;
    soundManager.playClick();
    setSelectedOptions(prev => ({ ...prev, [currentQ.id]: optIndex }));
  };

  const handleSubmitAnswer = () => {
    const chosen = selectedOptions[currentQ.id];
    if (chosen === undefined) return;

    const isCorrect = chosen === currentQ.correctIndex;
    setIsAnswerSubmitted(prev => ({ ...prev, [currentQ.id]: true }));

    if (isCorrect) {
      soundManager.playCorrect();
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    } else {
      soundManager.playWrong();
    }
  };

  const handleNext = () => {
    soundManager.playClick();
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finished all questions -> go to Name input stage
      setIsQuizComplete(true);
      setShowCertificate(false);
      soundManager.playFanfare();
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    soundManager.playClick();
    setSelectedOptions({});
    setIsAnswerSubmitted({});
    setCurrentIndex(0);
    setIsQuizComplete(false);
    setShowCertificate(false);
    setStatusMessage(null);
  };

  // Calculate score
  const correctCount = Object.keys(isAnswerSubmitted).filter(id => {
    const qId = Number(id);
    const q = QUIZ_QUESTIONS.find(item => item.id === qId);
    return q && selectedOptions[qId] === q.correctIndex;
  }).length;

  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  // Student enters name and triggers certificate generation
  const handleConfirmNameAndShowCert = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    soundManager.playFanfare();
    const finalName = studentNameInput.trim() || '어린이 탐험가';
    setConfirmedName(finalName);
    setShowCertificate(true);
    setStatusMessage(null);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 }
    });
  };

  // Draw certificate on canvas whenever certificate is opened or name updates
  useEffect(() => {
    if (showCertificate && canvasRef.current) {
      drawCertificateToCanvas(canvasRef.current, confirmedName || '어린이 탐험가', scorePercentage);
      try {
        const dataUrl = canvasRef.current.toDataURL('image/png');
        setImagePreviewUrl(dataUrl);
      } catch (e) {
        console.error('Failed to create preview url', e);
      }
    }
  }, [showCertificate, confirmedName, scorePercentage]);

  // 100% Reliable PDF Download using direct Canvas 2D + jsPDF
  const handleDownloadPDF = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    soundManager.playClick();
    setIsSavingPdf(true);
    setStatusMessage(null);

    try {
      // Make sure canvas is fresh
      drawCertificateToCanvas(canvas, confirmedName || '어린이 탐험가', scorePercentage);

      // Create PDF in Landscape A4 (297mm x 210mm)
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.96);
      pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210);

      const filename = `${confirmedName || '어린이'}_갯벌_박사_인증서.pdf`;
      pdf.save(filename);

      setStatusMessage({
        type: 'success',
        text: `📄 '${filename}' PDF 파일이 정상적으로 다운로드되었습니다!`
      });
    } catch (err) {
      console.error('PDF export error', err);
      // Fallback: trigger data url download
      fallbackDownloadImage();
    } finally {
      setIsSavingPdf(false);
    }
  };

  // 100% Reliable Image (PNG) Download
  const handleDownloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    soundManager.playClick();
    setIsSavingImage(true);
    setStatusMessage(null);

    try {
      drawCertificateToCanvas(canvas, confirmedName || '어린이 탐험가', scorePercentage);

      if (canvas.toBlob) {
        canvas.toBlob((blob) => {
          if (!blob) {
            fallbackDownloadImage();
            return;
          }
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          const filename = `${confirmedName || '어린이'}_갯벌_박사_인증서.png`;
          link.href = url;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(url), 2000);

          setStatusMessage({
            type: 'success',
            text: `🖼️ '${filename}' 이미지 파일이 저장되었습니다!`
          });
          setIsSavingImage(false);
        }, 'image/png');
      } else {
        fallbackDownloadImage();
      }
    } catch (err) {
      console.error('Image export error', err);
      fallbackDownloadImage();
    }
  };

  const fallbackDownloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      const filename = `${confirmedName || '어린이'}_갯벌_박사_인증서.png`;
      link.href = dataUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setStatusMessage({
        type: 'success',
        text: `🖼️ '${filename}' 파일 다운로드를 실행했습니다!`
      });
    } catch (e) {
      console.error('Fallback download failed', e);
      setStatusMessage({
        type: 'info',
        text: '💡 아래 인증서 이미지를 마우스 오른쪽 클릭(또는 길게 누르기)하여 [이미지를 다른 이름으로 저장]을 선택해 보세요!'
      });
    } finally {
      setIsSavingImage(false);
      setIsSavingPdf(false);
    }
  };

  // Copy Certificate Image to Clipboard (Ctrl+V into Word / HWP)
  const handleCopyToClipboard = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    soundManager.playClick();
    try {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
          setStatusMessage({
            type: 'success',
            text: '📋 인증서가 클립보드에 복사되었습니다! 한글(HWP)이나 파워포인트, 메신저에서 Ctrl+V를 누르면 바로 붙여넣어집니다.'
          });
        } catch {
          setStatusMessage({
            type: 'info',
            text: '💡 아래 인증서 이미지에서 마우스 우클릭 후 [이미지 복사]를 선택해 보세요!'
          });
        }
      });
    } catch {
      // ignore
    }
  };

  // Standard Print
  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      {/* Quiz Header (no print) */}
      <div className="no-print bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            도전! 갯벌 탐구 퀴즈
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            내가 배운 갯벌 지식, 퀴즈로 확인해 볼까요?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            우리나라 7대 갯벌과 갯벌의 비밀을 퀴즈로 풀고 
            <strong> '갯벌 생태 박사 인증서'</strong>를 발급받아 내 컴퓨터에 저장해 보세요!
          </p>
        </div>

        {/* Progress Badge */}
        {!isQuizComplete && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 shrink-0 text-center">
            <span className="text-xs font-bold text-slate-500 block">진행 상황</span>
            <span className="text-xl font-black text-amber-600 font-display">
              {currentIndex + 1} <span className="text-xs text-slate-400">/ {totalQuestions} 문항</span>
            </span>
          </div>
        )}
      </div>

      {/* 1. QUIZ IN PROGRESS (no-print) */}
      {!isQuizComplete && (
        <div className="no-print bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-sm space-y-6">
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-amber-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div>
            <span className="inline-block text-xs font-extrabold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md mb-2">
              문제 {currentQ.id} {currentQ.type === 'ox' ? '(OX 퀴즈)' : '(선택형)'}
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-slate-900 font-display leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Hint badge */}
          <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-start gap-1.5">
            <span className="font-bold text-amber-600 shrink-0">💡 힌트:</span>
            <span>{currentQ.hint}</span>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOptions[currentQ.id] === idx;
              const hasSubmitted = isAnswerSubmitted[currentQ.id];
              const isCorrectAnswer = idx === currentQ.correctIndex;

              let style = 'border-slate-200 bg-white hover:border-amber-400 text-slate-800';
              if (isSelected && !hasSubmitted) {
                style = 'border-amber-500 bg-amber-50 text-amber-900 font-bold ring-2 ring-amber-400/30';
              } else if (hasSubmitted) {
                if (isCorrectAnswer) {
                  style = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                } else if (isSelected && !isCorrectAnswer) {
                  style = 'border-rose-400 bg-rose-50 text-rose-900 opacity-80';
                } else {
                  style = 'border-slate-100 bg-slate-50 text-slate-400';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasSubmitted}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-sm sm:text-base ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs shrink-0">
                      {idx + 1}
                    </span>
                    <span>{option}</span>
                  </div>

                  {hasSubmitted && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {hasSubmitted && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box when submitted */}
          {isAnswerSubmitted[currentQ.id] && (
            <div
              className={`p-4 rounded-2xl border ${
                selectedOptions[currentQ.id] === currentQ.correctIndex
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-rose-50 border-rose-200 text-rose-950'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-sm mb-1">
                {selectedOptions[currentQ.id] === currentQ.correctIndex ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>정답입니다! 👏</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>아쉬워요! 해설을 확인해 보세요.</span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Footer controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-400">
              정답을 선택한 후 [정답 확인]을 눌러주세요.
            </span>

            {!isAnswerSubmitted[currentQ.id] ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOptions[currentQ.id] === undefined}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-white font-bold text-sm shadow-xs transition-transform hover:scale-102 cursor-pointer"
              >
                정답 확인하기
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-xs transition-transform hover:scale-102 flex items-center gap-1.5 cursor-pointer"
              >
                <span>{currentIndex < totalQuestions - 1 ? '다음 문제로' : '퀴즈 완료 & 이름 입력하기'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* 2. QUIZ FINISHED: NAME INPUT STEP (Shown BEFORE the certificate) */}
      {isQuizComplete && !showCertificate && (
        <div className="no-print bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-md text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 text-white mx-auto flex items-center justify-center text-4xl shadow-md animate-bounce">
            🏆
          </div>

          <div>
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold mb-2">
              퀴즈 완주 완료!
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 font-display">
              축하합니다! 갯벌 탐구 퀴즈를 모두 풀었습니다
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              우리나라 7대 갯벌에 대해 훌륭하게 배웠어요.
            </p>
          </div>

          {/* Score Box */}
          <div className="max-w-xs mx-auto p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <span className="text-xs font-bold text-amber-800 block">내 퀴즈 점수</span>
            <div className="text-4xl font-black text-amber-600 font-display my-1">
              {scorePercentage}점
            </div>
            <span className="text-xs text-slate-600">
              총 {totalQuestions}문제 중 <strong>{correctCount}문제</strong> 정답!
            </span>
          </div>

          {/* Dedicated Name Input Box (Before Showing Certificate) */}
          <form
            onSubmit={handleConfirmNameAndShowCert}
            className="max-w-md mx-auto text-left bg-gradient-to-br from-amber-50/80 to-teal-50/50 p-6 rounded-3xl border-2 border-amber-300 shadow-sm space-y-4"
          >
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                <Medal className="w-4 h-4 text-amber-600" />
                <span>인증서에 새겨질 학생 이름을 입력해 주세요</span>
              </label>
              <p className="text-xs text-slate-500 mb-3">
                입력하신 이름이 인증서 정중앙에 선명하게 새겨져 PDF 파일 저장 및 출력됩니다.
              </p>
              <input
                type="text"
                required
                autoFocus
                value={studentNameInput}
                onChange={e => setStudentNameInput(e.target.value)}
                placeholder="예: 김대한 (또는 한국초 5학년 2반 이순신)"
                className="w-full px-4 py-3 text-base font-bold rounded-2xl border-2 border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 outline-none bg-white text-slate-900 placeholder:text-slate-400 placeholder:font-normal"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-base shadow-md transition-all hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Award className="w-5 h-5 text-amber-200" />
              <span>이름 넣고 인증서 발급받기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleRestart}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>퀴즈 다시 풀기</span>
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                onGoToExplorer();
              }}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-teal-600" />
              <span>7대 갯벌 지도 보러가기</span>
            </button>
          </div>
        </div>
      )}

      {/* 3. CERTIFICATE DISPLAY WITH 100% RELIABLE DOWNLOAD & PRINT */}
      {isQuizComplete && showCertificate && (
        <div className="space-y-6">
          {/* Action Bar (no-print) */}
          <div className="no-print bg-white rounded-3xl p-5 sm:p-6 border-2 border-amber-300 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block mb-1">
                인증서 발급 완료 🎉
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                <strong className="text-amber-700">{confirmedName}</strong> 님의 갯벌 생태 박사 인증서
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                원하는 저장 방식을 선택하세요 (PDF 파일 저장, 이미지 저장, 클립보드 복사, 인쇄 지원).
              </p>
            </div>

            {/* Reliable Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {/* PDF Save Button */}
              <button
                onClick={handleDownloadPDF}
                disabled={isSavingPdf}
                className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102 flex items-center gap-1.5 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-red-200" />
                <span>{isSavingPdf ? '저장 중...' : 'PDF 파일 저장'}</span>
              </button>

              {/* PNG Image Download Button */}
              <button
                onClick={handleDownloadPNG}
                disabled={isSavingImage}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102 flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-200" />
                <span>{isSavingImage ? '저장 중...' : '이미지(PNG) 저장'}</span>
              </button>

              {/* Copy to Clipboard Button */}
              <button
                onClick={handleCopyToClipboard}
                className="px-3.5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102 flex items-center gap-1.5 cursor-pointer"
                title="한글(HWP)이나 PPT에 Ctrl+V로 붙여넣기"
              >
                <Copy className="w-4 h-4 text-teal-200" />
                <span>복사하기</span>
              </button>

              {/* Native Print */}
              <button
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102 flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>바로 인쇄</span>
              </button>

              {/* Edit Name Button */}
              <button
                onClick={() => {
                  soundManager.playClick();
                  setShowCertificate(false);
                }}
                className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 cursor-pointer"
                title="이름 수정"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>이름 수정</span>
              </button>
            </div>
          </div>

          {/* Feedback Toast */}
          {statusMessage && (
            <div
              className={`no-print px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 animate-bounce border-2 ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                  : 'bg-sky-50 border-sky-400 text-sky-950'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <Info className="w-5 h-5 text-sky-600 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* Hidden Canvas Used for 100% Reliable Rendering */}
          <canvas
            ref={canvasRef}
            className="hidden"
            width={1200}
            height={848}
          />

          {/* THE CERTIFICATE PREVIEW IMAGE (Directly interactive: Right-click -> Save Image As) */}
          <div className="bg-white rounded-3xl p-4 sm:p-6 border-2 border-amber-300 shadow-xl space-y-3">
            <div className="no-print flex items-center justify-between text-xs text-slate-500 px-1">
              <span className="flex items-center gap-1 font-semibold text-amber-800">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>발급된 고해상도 인증서 미리보기</span>
              </span>
              <span>
                💡 마우스 우클릭 후 <strong>[이미지를 다른 이름으로 저장]</strong>해도 언제든 저장됩니다!
              </span>
            </div>

            {/* High-res Image Preview */}
            <div className="print-page overflow-hidden rounded-2xl border-4 border-amber-500 shadow-md bg-amber-50">
              {imagePreviewUrl ? (
                <img
                  src={imagePreviewUrl}
                  alt="어린이 갯벌 생태 박사 인증서"
                  className="w-full h-auto block object-contain"
                />
              ) : (
                <div className="p-12 text-center text-slate-400 text-sm">
                  인증서를 준비하는 중입니다...
                </div>
              )}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="no-print flex items-center justify-center gap-3 pt-4">
            <button
              onClick={handleRestart}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>퀴즈 다시 풀기</span>
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                onGoToExplorer();
              }}
              className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Compass className="w-4 h-4 text-amber-300" />
              <span>7대 갯벌 지도 다시 탐험하기</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
