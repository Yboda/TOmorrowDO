import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

const globalVars = createGlobalTheme(':root', {
  device: {
    pc: '1200px',
    mo: '370px',
  },
  fontSize: {
    xLarge: '30px',
    large: '26px',
    medium: '22px',
    regular: '18px',
    small: '16px',
    xSmall: '14px',
  },
});

// 테마용 컬러
export enum ThemeColors {
  POINT = '#f98e2c',
  SUB = '#ffa823',
  FG = '#fcd8a6',
  BG = '#FFFAF3',
  BLACK = '#111',
  WHITE = '#fff',
}

export const globalThemeColors = createGlobalThemeContract({
  bgColor: 'bg-color',
  fgColor: 'fg-color',
  pColor: 'p-color',
  sColor: 's-color',
  fontColor: 'font-color',
});

export const lightThemeColors = {
  bgColor: ThemeColors.BG,
  fgColor: ThemeColors.FG,
  pColor: ThemeColors.POINT,
  sColor: ThemeColors.SUB,
  fontColor: ThemeColors.BLACK,
};

export const darkThemeColors = {
  bgColor: ThemeColors.BLACK,
  fgColor: ThemeColors.WHITE,
  pColor: ThemeColors.POINT,
  sColor: ThemeColors.SUB,
  fontColor: ThemeColors.WHITE,
};

export const vars = { ...globalVars, color: {...globalThemeColors} };