import { darkThemeColors, globalThemeColors, lightThemeColors, vars } from './variable.css';
import {
  createTheme,
  globalStyle,
} from '@vanilla-extract/css';

export const lightGlobalTheme = createTheme(globalThemeColors, lightThemeColors);
export const darkGlobalTheme = createTheme(globalThemeColors, darkThemeColors);

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
  backgroundColor: globalThemeColors.fgColor,
  color: globalThemeColors.fontColor,
});
globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});