import {
  createGlobalTheme,
  createGlobalThemeContract,
  createTheme,
  globalStyle,
} from '@vanilla-extract/css';
import { Colors, FontSize } from './variable.css';

export const globalThemeColor = createGlobalThemeContract({
  bgColor: 'bg-color',
  fgColor: 'fg-color',
  pColor: 'p-color',
  sColor: 's-color',
  fontColor: 'font-color',
});

export const lightGlobalTheme = createTheme(globalThemeColor, {
  bgColor: Colors.BG,
  fgColor: Colors.FG,
  pColor: Colors.POINT,
  sColor: Colors.SUB,
  fontColor: Colors.BLACK,
});

export const darkGlobalTheme = createTheme(globalThemeColor, {
  bgColor: Colors.BLACK,
  fgColor: Colors.WHITE,
  pColor: Colors.POINT,
  sColor: Colors.SUB,
  fontColor: Colors.WHITE,
});

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
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
  overflowX: 'hidden',
});
globalStyle('body', {
  backgroundColor: globalThemeColor.bgColor,
  color: globalThemeColor.fontColor,
  fontSize: FontSize.REGULAR
});
globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});
