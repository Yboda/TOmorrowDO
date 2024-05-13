import { vars } from '@/app/_styles/variable.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100px',
  padding: '10px',
  backgroundColor: 'transparent',
  fontSize: vars.font.size.small
});

export const profile = style({
  display: 'flex',
  gap: '10px',
  padding: '10px',
});

export const nicknameWrap = style({

});

export const figure = style({
  borderRadius: '50%',
});

export const badge = style({
  width: '20px',
  height: '20px',
});
