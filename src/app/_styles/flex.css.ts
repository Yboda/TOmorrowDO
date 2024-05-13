import { createVar, style } from "@vanilla-extract/css";

export const fd = createVar();
export const jc = createVar();
export const ai = createVar();
export const gap = createVar();
export const position = createVar();
export const width = createVar();
export const height = createVar();

export const flex = style({
  display: 'flex',
  flexDirection: fd,
  justifyContent: jc,
  alignItems: ai,
  gap: gap,
  position: position,
  width: width,
  height: height,
});