import { createThemeContract, createVar, style } from '@vanilla-extract/css';
import { vars } from './variable.css';

export const width = createVar();
export const height = createVar();
export const bgColor = createVar();
export const color = createVar();
export const bdWidth = createVar();
export const fontSize = createVar();

export const button = style({
  fontFamily: vars.fontFamilly.notoSansKr,
  outline: 'none',
  width: width,
  height: height,
  backgroundColor: bgColor,
  color: color,
  borderColor: vars.color.pColor,
  borderWidth: bdWidth,
  borderRadius: '5px',
  borderStyle: 'double',
  fontSize: fontSize,
  cursor: 'pointer',
  ':hover': {
    opacity: 0.8,
    transition: '0.5s',
  },
});
