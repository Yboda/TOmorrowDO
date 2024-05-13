import { vars } from '@/app/_styles/variable.css';
import { createVar, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '20px',
  height: '100%',
  padding: '10px 0 10px 10px',
});

export const navList = style({
  display: 'flex',
  flexDirection: 'column',
});

export const navItem = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px',
  borderRadius: '30px 0 0 30px',
  backgroundColor: 'transparent',
  fontSize:  vars.font.size.regular,
  fontWeight: vars.font.weight.medium,
});

export const navItemActive = style({
  backgroundColor: vars.color.bgColor_yellow,
  fontWeight: vars.font.weight.bold,
});

export const navBottom = style({
  display: 'flex',
  justifyContent: 'space-between',
});
