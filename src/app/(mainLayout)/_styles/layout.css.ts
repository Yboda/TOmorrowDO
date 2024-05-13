import { vars } from "@/app/_styles/variable.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: 'grid',
  gridTemplateColumns: '200px auto',
  width: vars.device.pc,
  height: '100dvh',
  margin: '0 auto',
  padding: '20px 20px 20px 0',
});

export const main = style({
  display: 'flex',
  width: '100%',
  height: '100%',
  padding: '50px',
  borderRadius: '30px',
  backgroundColor: vars.color.bgColor_yellow,
});