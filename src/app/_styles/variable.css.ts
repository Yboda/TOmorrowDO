import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

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
  baseColor: 'base-color',
  bgColor: 'bg-color',
  fgColor: 'fg-color',
  pColor: 'p-color',
  sColor: 's-color',
  fontColor: 'font-color',
});

export const lightThemeColors = {
  baseColor: ThemeColors.WHITE,
  bgColor: ThemeColors.BG,
  fgColor: ThemeColors.FG,
  pColor: ThemeColors.POINT,
  sColor: ThemeColors.SUB,
  fontColor: ThemeColors.BLACK,
};

export const darkThemeColors = {
  baseColor: ThemeColors.BLACK,
  bgColor: ThemeColors.BLACK,
  fgColor: ThemeColors.WHITE,
  pColor: ThemeColors.POINT,
  sColor: ThemeColors.SUB,
  fontColor: ThemeColors.WHITE,
};

const globalVars = createGlobalTheme(':root', {
  fontFamilly: {
    notoSansKr: `var(--font-noto-sans-kr)`,
    GasoekOne: `var(--font-gasoek-one)`,
  },
  device: {
    pc: '1200px',
    mo: '370px',
  },
  fontSize: {
    xLarge: '48px',
    large: '34px',
    medium: '24px',
    regular: '18px',
    small: '14px',
    xSmall: '12px',
  },
  button: {
    size: {
      small: { width: '60px', height: '30px', borderWidth: '1px', fontSize: '12px' },
      medium: { width: '100px', height: '40px', borderWidth: '1px', fontSize: '14px' },
      large: { width: '150px', height: '56px', borderWidth: '2px', fontSize: '16px' },
      full: { width: '100%', height: '56px', borderWidth: '2px', fontSize: '16px' },
    },
    color: {
      point: { bgColor: globalThemeColors.pColor, color: globalThemeColors.baseColor },
      outline: { bgColor: globalThemeColors.bgColor, color: globalThemeColors.pColor },
    },
  },
});

export const vars = { ...globalVars, color: {...globalThemeColors} };