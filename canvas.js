window.onload = () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  // 四角形
  context.fillRect(0, 0, 180, 180); // 塗りつぶしの四角形
  context.clearRect(30, 30, 120, 120); // 四角形の中を削除
  context.strokeRect(40, 40, 100, 100); // 四角形の線を描画

  // 三角形
  context.beginPath() // パスの作成
  context.moveTo(400, 0); // 開始地点を指定
  context.lineTo(500, 90); // 線の座標を入力
  context.lineTo(300, 90);
  context.closePath(); // パスを閉じる
  context.stroke(); // 線の描画

  context.beginPath();
  context.moveTo(300, 90);
  context.lineTo(400, 180);
  context.lineTo(500, 90)
  context.closePath();
  context.stroke();
  context.fill();

  // 円
  context.beginPath();
  context.arc(250, 300, 90, 0, Math.PI * 2, true);
  context.stroke();

  context.beginPath();
  context.arc(250, 300, 70, 0, Math.PI * 2, true);
  context.stroke();
  context.fill();
}
