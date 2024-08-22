<template>
  <article>
    <h1>許願池⛲️</h1>
    <canvas ref="canvas" width="400" height="400"></canvas>
    寫下你祈禱的願望，阿雷就會開展胡說八道術，有機會讓你的願望成真：
    <input ref="wish" placeholder="我希望阿雷明年穿毛裝上COSCUP..." />
    <button @click="generatePic()">產生新祈禱圖</button>
  </article>
</template>

<script setup>
import { ref, onMounted } from "vue";

const canvas = ref(null);
const wish = ref(null);

function randomNumber() {
  const randomNumber = Math.floor(Math.random() * 29);
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
  const ctx = canvas.value.getContext("2d");
  const yourWish = wish.value.value;
  if (!ctx) return;

  const randomImg = randomImage();
  randomImg.addEventListener("load", () => {
    drawImageCover(ctx, randomImg);

    drawStroked({
      ctx: ctx,
      text: "每日膜拜",
      x: 20,
      y: 80,
      color: "Fuchsia",
    });
    drawStroked({
      ctx: ctx,
      text: "阿雷⚡️電神",
      color: "blue",
      x: 20,
      y: 300,
    });
    drawStroked({
      ctx: ctx,
      text: yourWish,
      x: 20,
      y: 350,
      color: "OrangeRed",
      size: "24px",
      strokeWidth: 8,
    });
  });
}

onMounted(() => {
  generatePic();
});
</script>

<style scoped>
input {
  border: 2px solid black;
  font-size: 16px;
  padding: 16px;
  border-radius: 8px;
  outline: none;
  width: 300px;
}

button {
  font-size: 16px;
  padding: 8px;
}

article,
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  box-sizing: border-box;
}
</style>
