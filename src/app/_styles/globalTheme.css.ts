import { darkThemeColors, globalThemeColors, lightThemeColors, vars } from './variable.css';
import {
  createTheme,
  globalStyle,
} from '@vanilla-extract/css';

export const lightGlobalTheme = createTheme(globalThemeColors, lightThemeColors);
export const darkGlobalTheme = createTheme(globalThemeColors, darkThemeColors);
globalStyle('*', {
  boxSizing: 'border-box',
});
globalStyle('html', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      colorScheme: 'dark',
    },
  },
});
globalStyle('html, body', {
  maxWidth: '100dvw',
  minWidth: vars.device.mo,
  overflowX: 'hidden',
});
globalStyle('body', {
  backgroundColor: vars.color.bgColor_point,
  color: vars.color.fontColor,
  fontFamily: vars.font.familly.notoSansKr,
});
globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});
globalStyle('form', {
  width: 'inherit',
});