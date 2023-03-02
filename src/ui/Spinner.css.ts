import { style, keyframes } from "@vanilla-extract/css";
import { color } from "./style";

// spinner design is borrowed from https://cssloaders.github.io

const eyeShade = keyframes({
  "0%": { transform: "translateY(0)" },
  "20%": { transform: "translateY(5px)" },
  "40%": { transform: "translateY(-5px)" },
  "50%": { transform: "translateY(-5px)" },
  "60%": { transform: "translateY(-8px)" },
  "75%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(10px)" },
});

const eyeMove = keyframes({
  "0%": { transform: "translate(0, 0)" },
  "20%": { transform: "translate(0px, 5px)" },
  "40%": { transform: "translate(0px, -5px)" },
  "50%": { transform: "translate(0px, -5px)" },
  "60%": { transform: "translate(-10px, -5px)" },
  "75%": { transform: "translate(-20px, 5px)" },
  "100%": { transform: "translate(0, 10px)" },
});

export const spinner = style({
  display: "inline-block",
  zIndex: 0,
  position: "relative",
  margin: "auto",
  width: 78,
  height: 78,
  borderRadius: "50%",
  boxSizing: "border-box",
  background: color.font,
  border: `8px solid ${color.mainBg}`,
  overflow: "hidden",
  "::after": {
    content: "",
    position: "absolute",
    left: 0,
    top: "-50%",
    width: "100%",
    height: "100%",
    background: color.bgBorder,
    zIndex: 5,
    borderBottom: `8px solid ${color.mainBg}`,
    boxSizing: "border-box",
    animation: `${eyeShade} 3s infinite`,
  },
  "::before": {
    content: "",
    position: "absolute",
    left: 20,
    bottom: 15,
    width: 32,
    zIndex: 2,
    height: 32,
    background: color.primaryDark,
    borderRadius: "50%",
    animation: `${eyeMove} 3s infinite`,
  },
});

export const spinnerCentered = style([
  spinner,
  {
    position: "fixed",
    inset: "50% auto auto 50%",
    transform: "translate(-50%, -50%)",
  },
]);
