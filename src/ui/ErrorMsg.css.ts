import { style } from "@vanilla-extract/css";

export const error = style({
  margin: "auto",
  fontStyle: "italic",
});

export const errorCentered = style([
  error,
  {
    position: "fixed",
    inset: "50% auto auto 50%",
    transform: "translate(-50%, -50%)",
  },
]);
