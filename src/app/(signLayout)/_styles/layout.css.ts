import { Container } from '@/app/_styles/container.css';
import { vars } from '@/app/_styles/variable.css';
import { style } from '@vanilla-extract/css';

export const container = style(new Container({ padding: '0' }).options);

const sectionStyle = {
  flex: '1',
  display: 'flex',
  flexDrection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
export const leftSection = style({
  ...sectionStyle,
  marginRight: '30px',
  '@media': {
    'screen and (max-width: 950px)': {
      display: 'none'
    },
  },
});

export const rightSection = style({
  ...sectionStyle,
  backgroundColor: vars.color.bgColor,
  borderRadius: '30px',
  '@media': {
    'screen and (max-width: 950px)': {
      flex: 'unset',
      width: '436px',
      margin: '0 auto',
    },
  },
});

export const logo = style({
  fontFamily: vars.fontFamilly.GasoekOne,
  display: 'inline-block',
  backgroundColor: vars.color.pColor,
  fontSize: vars.fontSize.xLarge,
  padding: '20px',
});
