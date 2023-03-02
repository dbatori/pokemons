import { style } from "@vanilla-extract/css";
import { borderWidth, color, gap } from "./style";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: gap.lg,
  padding: gap.lg,
  borderBottom: `${borderWidth} solid ${color.bgBorder}`,
  backgroundColor: color.bg,
});

export const fieldset = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: gap.md,
});
