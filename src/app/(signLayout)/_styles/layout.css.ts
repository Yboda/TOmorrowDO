import { vars } from '@/app/_styles/variable.css';
import { style } from '@vanilla-extract/css';

export const background = style({
  width: '100dvw',
  height: '100dvh',
  backgroundColor: vars.color.bgColor_yellow,
});

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

