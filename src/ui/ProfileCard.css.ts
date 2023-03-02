import { keyframes, style } from "@vanilla-extract/css";
import {
  borderRadius,
  color,
  duration,
  elemSize,
  fontSize,
  fontWeight,
  gap,
} from "./style";

const show = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const overlay = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  inset: "0 0 0 0",
  backgroundColor: "rgba(0, 0, 0, 0)",
  backdropFilter: `blur(${gap.xs})`,
  WebkitBackdropFilter: `blur(${gap.xs})`,
  animation: `${show} ${duration.hover}`,
});

export const card = style({
  display: "flex",
  flexDirection: "column",
  gap: gap.md,
  alignItems: "center",
  width: "90vw",
  maxWidth: 500,
});

export const closeButton = style({
  marginLeft: "auto",
  padding: 0,
  width: elemSize.lg,
  height: elemSize.lg,
  minHeight: elemSize.lg,
  border: "none",
  outline: "none",
  borderRadius: borderRadius.sm,
  fontSize: fontSize.lg,
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontWeight: fontWeight.bold,
  cursor: "pointer",
});

export const figure = style({
  margin: 0,
});

export const img = style({
  width: "25vw",
  maxWidth: 300,
});

export const figcaption = style({
  textAlign: "center",
  fontSize: fontSize.lg,
  fontWeight: fontWeight.bold,
  color: color.primary,
});

export const catchButton = style({
  marginTop: gap.md,
  padding: `0 ${gap.md}`,
  width: 100,
  height: elemSize.md,
  border: "none",
  outline: "none",
  color: color.mainBg,
  backgroundColor: color.primary,
  fontFamily: "inherit",
  fontWeight: fontWeight.bold,
  fontSize: fontSize.md,
  borderRadius: 1000,
  cursor: "pointer",
  transition: `background-color ${duration.hover}`,
  ":hover": {
    backgroundColor: color.primaryHover,
  },
});
