import { globalStyle } from "@vanilla-extract/css";
import * as s from "./style";

globalStyle("html", {
  colorScheme: "dark",
  color: s.color.font,
  backgroundColor: s.color.bg,
  fontFamily: `"Comfortaa", cursive`,
  fontSize: s.fontSize.md,
  fontWeight: s.fontWeight.normal,
});

globalStyle("body", {
  margin: 0,
});

globalStyle("h1", {
  margin: 0,
  fontSize: s.fontSize.lg,
  fontWeight: s.fontWeight.bold,
});

globalStyle("fieldset", {
  margin: 0,
  padding: 0,
  border: "none",
});

globalStyle(`input[type="radio"]`, {
  display: "none",
});

globalStyle(`input[type="radio"] + label`, {
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  padding: `0 ${s.gap.lg}`,
  height: s.elemSize.md,
  border: `${s.borderWidth} solid ${s.color.bgBorder}`,
  borderRadius: 1000,
  cursor: "pointer",
  userSelect: "none",
  transition: `color ${s.duration.hover}, background-color ${s.duration.hover}, border-color ${s.duration.hover}, opacity ${s.duration.hover}`,
});

globalStyle(`input[type="radio"]:enabled:not(:checked) + label:hover`, {
  color: s.color.primary,
  borderColor: s.color.primary,
});

globalStyle(`input[type="radio"]:checked + label`, {
  color: s.color.bg,
  borderColor: s.color.primary,
  backgroundColor: s.color.primary,
});

globalStyle(`input[type="radio"]:disabled + label`, {
  opacity: s.disabledOpacity,
  cursor: "not-allowed",
});

globalStyle(`input[type="search"]`, {
  boxSizing: "border-box",
  padding: `0 ${s.gap.md}`,
  width: 200,
  height: s.elemSize.sm,
  border: `${s.borderWidth} solid ${s.color.bgFont}`,
  outline: "none",
  fontFamily: "inherit",
  fontSize: s.fontSize.xs,
  borderRadius: s.borderRadius.sm,
  color: s.color.font,
  backgroundColor: "transparent",
  transition: `color ${s.duration.hover}, border-color ${s.duration.hover}, opacity ${s.duration.hover}`,
});

globalStyle(`input[type="search"]::placeholder`, {
  color: s.color.bgFont,
  transition: `color ${s.duration.hover}`,
});

globalStyle(`input[type="search"]:enabled:hover`, {
  borderColor: s.color.bgFontHover,
});

globalStyle(`input[type="search"]:enabled:hover::placeholder`, {
  color: s.color.bgFontHover,
});

globalStyle(`input[type="search"]:enabled:focus`, {
  color: s.color.font,
  borderColor: s.color.font,
});

globalStyle(`input[type="search"]:disabled`, {
  opacity: s.disabledOpacity,
  cursor: "not-allowed",
});

globalStyle(`input[type="checkbox"]`, {
  display: "none",
});

globalStyle(`input[type="checkbox"] + label`, {
  display: "inline-block",
  position: "relative",
  width: s.elemSize.sm,
  height: s.elemSize.xxs,
  backgroundColor: s.color.bgBorder,
  borderRadius: 1000,
  cursor: "pointer",
  transition: `background-color ${s.duration.hover}, opacity ${s.duration.hover}`,
});

globalStyle(`input[type="checkbox"] + label::after`, {
  content: "",
  position: "absolute",
  inset: "2px auto auto 2px",
  width: 20,
  height: 20,
  borderRadius: "50%",
  backgroundColor: s.color.primary,
  transition: `transform ${s.duration.hover}, background-color ${s.duration.hover}`,
});

globalStyle(`input[type="checkbox"]:checked + label`, {
  backgroundColor: s.color.font,
});

globalStyle(`input[type="checkbox"]:checked + label::after`, {
  transform: "translateX(16px)",
});

globalStyle(`input[type="checkbox"]:disabled + label`, {
  opacity: s.disabledOpacity,
  cursor: "not-allowed",
});
