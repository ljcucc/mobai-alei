function randomNumber() {
  const randomNumber = Math.floor(Math.random() * 26);
  const paddedNumber = randomNumber.toString().padStart(2, "0");
  return paddedNumber;
}

function randomImage() {
  const img = new Image(); // Create new img element
  img.src = `assets/${randomNumber()}.jpg`;
  return img;
}

function drawImageCover(ctx, image) {
  // Calculate the scale factor to maintain aspect ratio and fit the image within the canvas
  const scaleX = ctx.canvas.width / image.width;
  const scaleY = ctx.canvas.height / image.height;
  const scale = Math.max(scaleX, scaleY);

  // Calculate the new width and height of the image
  const newWidth = image.width * scale;
  const newHeight = image.height * scale;

  // Calculate the x and y coordinates to center the image
  const x = (ctx.canvas.width - newWidth) / 2;
  const y = (ctx.canvas.height - newHeight) / 2;

  // Draw the image on the canvas with the calculated dimensions and position
  ctx.drawImage(image, x, y, newWidth, newHeight);
}

function drawStroked(content) {
  const { ctx, text, x, y, color, size, strokeWidth } = content;
  ctx.font = `${size ?? "80px"} cwTeXKai`;
  ctx.strokeStyle = color;
  ctx.lineWidth = strokeWidth ?? 12;
  ctx.strokeText(text, x, y);
  ctx.fillStyle = "white";
  ctx.fillText(text, x, y);
}

function generatePic() {
  const canvas = document.querySelector("canvas").getContext("2d");
  const yourWish = document.querySelector("#wish").value;
  if (!canvas) return;

  const randomImg = randomImage();
  randomImg.addEventListener("load", () => {
    drawImageCover(canvas, randomImg);

    drawStroked({
      ctx: canvas,
      text: "每日膜拜",
      x: 20,
      y: 80,
      color: "Fuchsia",
    });
    drawStroked({
      ctx: canvas,
      text: "阿雷⚡️電神",
      color: "blue",
      x: 20,
      y: 300,
    });
    drawStroked({
      ctx: canvas,
      text: yourWish,
      x: 20,
      y: 350,
      color: "OrangeRed",
      size: "24px",
      strokeWidth: 8,
    });
  });
}

window.addEventListener("load", (e) => {
  generatePic();

  const regenerateButton = document.querySelector("#regenerate");
  regenerateButton.addEventListener("click", (e) => {
    generatePic();
  });
});
