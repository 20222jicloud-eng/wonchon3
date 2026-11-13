// High-resolution Canvas 2D Certificate Renderer
// Zero dependencies on html2canvas, completely immune to CSS/CORS/iframe font errors!

export function drawCertificateToCanvas(
  canvas: HTMLCanvasElement,
  studentName: string,
  score: number
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // A4 Landscape Ratio: 1200 x 848
  const width = 1200;
  const height = 848;
  canvas.width = width;
  canvas.height = height;

  // 1. Background fill (soft warm ivory parchment)
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, '#fffdf5');
  bgGrad.addColorStop(1, '#fef9e7');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. Ornate Outer Border (Golden Brown)
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#b45309'; // amber-700
  ctx.strokeRect(28, 28, width - 56, height - 56);

  // Inner Thin Gold Line
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#f59e0b'; // amber-500
  ctx.strokeRect(44, 44, width - 88, height - 88);

  // Dotted Decorative Inner Border
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = '#d97706';
  ctx.strokeRect(52, 52, width - 104, height - 104);

  // Corner Ornaments
  const drawCornerOrnament = (x: number, y: number, angle: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillStyle = '#b45309';
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(26, 0);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 26);
    ctx.stroke();
    ctx.restore();
  };

  drawCornerOrnament(48, 48, 0);
  drawCornerOrnament(width - 48, 48, 90);
  drawCornerOrnament(width - 48, height - 48, 180);
  drawCornerOrnament(48, height - 48, 270);

  // 3. Header Subtitle
  ctx.textAlign = 'center';
  ctx.fillStyle = '#92400e'; // amber-800
  ctx.font = 'bold 18px "Noto Sans KR", sans-serif';
  ctx.fillText('CERTIFICATE OF GETBOL EXPLORER', width / 2, 105);

  // 4. Main Certificate Title
  ctx.fillStyle = '#0f172a'; // slate-900
  ctx.font = 'bold 44px "Jua", "Noto Sans KR", sans-serif';
  ctx.fillText('어린이 갯벌 생태 박사 인증서', width / 2, 165);

  // Decorative Horizontal Ribbon Bar below Title
  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 240, 185);
  ctx.lineTo(width / 2 + 240, 185);
  ctx.stroke();

  // Mini Diamond on Bar
  ctx.fillStyle = '#b45309';
  ctx.beginPath();
  ctx.arc(width / 2, 185, 4.5, 0, Math.PI * 2);
  ctx.fill();

  // 5. Registry Number
  ctx.fillStyle = '#64748b'; // slate-500
  ctx.font = '15px "Noto Sans KR", sans-serif';
  ctx.fillText('인증 등록 번호: 제 2026-GETBOL-07호', width / 2, 230);

  // 6. Student Name Box
  const nameBoxW = 480;
  const nameBoxH = 75;
  const nameBoxX = (width - nameBoxW) / 2;
  const nameBoxY = 260;

  // Name Box Fill
  ctx.fillStyle = '#fef3c7'; // amber-100
  ctx.fillRect(nameBoxX, nameBoxY, nameBoxW, nameBoxH);

  // Name Box Border
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#d97706';
  ctx.strokeRect(nameBoxX, nameBoxY, nameBoxW, nameBoxH);

  // Name Text
  ctx.fillStyle = '#78350f'; // amber-900
  ctx.font = 'bold 38px "Jua", "Noto Sans KR", sans-serif';
  ctx.fillText(studentName || '어린이 탐험가', width / 2, nameBoxY + 52);

  // 7. Certificate Body Paragraph
  ctx.fillStyle = '#334155'; // slate-700
  ctx.font = '20px "Noto Sans KR", sans-serif';

  const bodyLine1 = '위 어린이는 우리나라의 7대 대표 갯벌인 강화도, 서천, 고창, 신안,';
  const bodyLine2 = '진도, 보성·순천, 봉암 갯벌의 자연환경과 생물 생태계를 성실하게 탐구하고,';
  const bodyLine3 = `갯벌 탐구 퀴즈에서 우수한 성적(${score}점)을 거두었으므로`;
  const bodyLine4 = '자랑스러운 대한민국 갯벌 생태 박사로 임명합니다.';

  ctx.fillText(bodyLine1, width / 2, 395);
  ctx.fillText(bodyLine2, width / 2, 435);
  ctx.fillText(bodyLine3, width / 2, 475);

  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 22px "Noto Sans KR", sans-serif';
  ctx.fillText(bodyLine4, width / 2, 515);

  // 8. Issue Date
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  ctx.fillStyle = '#475569';
  ctx.font = '18px "Noto Sans KR", sans-serif';
  ctx.fillText(`${year}년 ${month}월 ${day}일`, width / 2, 600);

  // 9. Committee Name & Official Red Seal Stamp
  const committeeY = 680;
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 26px "Jua", "Noto Sans KR", sans-serif';
  ctx.fillText('한국의 갯벌 탐구 위원회', width / 2 - 45, committeeY + 12);

  // Official Red Seal Stamp (Do-jang)
  const sealX = width / 2 + 155;
  const sealY = committeeY;
  const sealR = 40;

  // Red Seal Background
  ctx.save();
  ctx.beginPath();
  ctx.arc(sealX, sealY, sealR, 0, Math.PI * 2);
  ctx.fillStyle = '#dc2626'; // red-600
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#991b1b'; // red-800
  ctx.stroke();

  // Seal inner circle
  ctx.beginPath();
  ctx.arc(sealX, sealY, sealR - 6, 0, Math.PI * 2);
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = '#fecaca';
  ctx.stroke();

  // Seal text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 15px "Jua", "Noto Sans KR", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('갯벌탐구', sealX, sealY - 4);
  ctx.fillText('인증인', sealX, sealY + 16);
  ctx.restore();

  // 10. Cute Bottom Mascots (Crab & Mudskipper)
  ctx.font = '32px serif';
  ctx.fillText('🦀', 95, height - 70);
  ctx.fillText('🐟', width - 95, height - 70);
}
