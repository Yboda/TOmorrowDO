import { vars } from '@/app/_styles/variable.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '750px',
  height: '100%',
  margin: '0 auto',
});

export const title = style({
  fontFamily: vars.font.familly.GasoekOne,
  fontSize: vars.font.size.large,
  fontWeight: vars.font.weight.regular,
  // color: vars.color.pColor
});
export const header = style({
  display: 'block',
  width: '100%',
  padding: '30px',
  borderBottom: `1px solid ${vars.color.pColor}`,
  // textAlign: 'center',
});

export const formContainer = style({
  width: '100%',
  padding: '60px 30px',
});

export const label = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '30px',
  ':last-of-type': {
    marginBottom: '60px',
  },
});

globalStyle(`${label} > span`, {
  display: 'inline-block',
  width: '150px',
  fontWeight: vars.font.weight.medium,
});

export const required = style({
  ':after': {
    content: '*',
    display: 'inline-block',
    marginLeft: '3px',
    color: 'red',
  },
});