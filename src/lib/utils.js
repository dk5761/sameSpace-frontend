import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const secondsToMinutes = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

export const getImageColor = async (url) => {
  try {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = () => reject("Failed to load image");
    });

    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let r = 0,
      g = 0,
      b = 0;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
    }

    r = Math.floor(r / (data.length / 4));
    g = Math.floor(g / (data.length / 4));
    b = Math.floor(b / (data.length / 4));

    return { r, g, b };
  } catch (error) {
    console.error("Error:", error);
    return { r: 0, g: 0, b: 0 }; // Return black RGB values on error
  }
};

export function getGradientColors({ r, g, b }) {
  const maxColorValue = 200;

  // Calculate a darker color
  const darkerR = Math.max(0, r - 50); // You can adjust the value to make it darker or lighter
  const darkerG = Math.max(0, g - 50);
  const darkerB = Math.max(0, b - 50);

  // Calculate a lighter color, ensuring it doesn't exceed the threshold
  const lighterR = Math.min(maxColorValue, r + 50);
  const lighterG = Math.min(maxColorValue, g + 50);
  const lighterB = Math.min(maxColorValue, b + 50);

  // Format the colors as RGB strings
  const darkerColor = `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
  const lighterColor = `rgb(${lighterR}, ${lighterG}, ${lighterB})`;

  return { darkerColor, lighterColor };
}
