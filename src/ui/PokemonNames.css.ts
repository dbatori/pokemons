import { style } from "@vanilla-extract/css";
import {
  borderRadius,
  color,
  duration,
  elemSize,
  fontSize,
  gap,
} from "./style";

export const root = style({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  gap: gap.lg,
  padding: gap.lg,
  backgroundColor: color.mainBg,
});

export const fieldset = style({
  display: "flex",
  gap: gap.lg,
  flexWrap: "wrap",
});

export const catchedFilter = style({
  display: "flex",
  gap: gap.xs,
  alignItems: "center",
  marginLeft: "auto",
});

export const info = style({
  margin: "auto",
  fontStyle: "italic",
});

export const list = style({
  display: "flex",
  flexWrap: "wrap",
  gap: gap.sm,
  justifyContent: "center",
});

export const nameButton = style({
  padding: `0 ${gap.xs}`,
  height: elemSize.xs,
  border: "none",
  outline: "none",
  borderRadius: borderRadius.md,
  backgroundColor: color.bg,
  fontFamily: "inherit",
  fontSize: fontSize.sm,
  cursor: "pointer",
  transition: `color ${duration.hover}, background-color ${duration.hover}`,
  ":hover": {
    backgroundColor: color.bgBorder,
  },
});

export const catchedButton = style([
  nameButton,
  {
    color: color.mainBg,
    backgroundColor: color.primary,
    ":hover": {
      backgroundColor: color.primaryHover,
    },
  },
]);
