import { vars } from '@/app/_styles/variable.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const hidden = style({
  display: 'none',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '650px',
  height: '100%',
  margin: '0 auto',
});

export const logo = style({
  fontFamily: vars.font.familly.GasoekOne,
  display: 'inline-block',
  width: '450px',
  padding: '20px',
  backgroundColor: vars.color.pColor,
  color: vars.color.fgColor,
  textAlign: 'center',
  fontSize: vars.font.size.xLarge,
});

export const loginMsg = style({
  display: 'inline-block',
  marginTop: '20px',
});

export const formWrap = style({
  marginTop: '50px',
  width: '100%',
});

export const linkList = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  fontSize: vars.font.size.small,
  color: vars.color.sFontColor,
});

export const linkItem = style({
  position: 'relative',
  display: 'inline-flex',
  selectors: {
    '&:not(:first-child)': {
      marginLeft: '10px',
      paddingLeft: '10px',
    },
    '&:not(:first-child):before': {
      content: '',
      position: 'absolute',
      top: '50%',
      left: '-1px',
      transform: 'translate(0, -50%)',
      display: 'inline-block',
      width: '1px',
      height: '10px',
      borderRight: '1px solid #ccc',
    },
  },
});
