import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

// 테마용 컬러
export enum ThemeColors {
  BLACK = '#111',
  WHITE = '#fff',
  POINT = '#f98e2c',
  BG_POINT = '#fcd8a6',
  BG_YELLOW = '#fffaf3',
  FONT = '#666',
}

export const globalThemeColors = createGlobalThemeContract({
  bgColor: 'bg-color',
  bgColor_point: 'bg-color_point',
  bgColor_yellow: 'bg-color_yellow',
  fgColor: 'fg-color',
  pColor: 'p-color',
  fontColor: 'font-color',
  sFontColor: 's-font-color',
});

export const lightThemeColors = {
  bgColor: ThemeColors.WHITE,
  bgColor_point: ThemeColors.BG_POINT,
  bgColor_yellow: ThemeColors.BG_YELLOW,
  fgColor: ThemeColors.BLACK,
  pColor: ThemeColors.POINT,
  fontColor: ThemeColors.BLACK,
  sFontColor: ThemeColors.FONT
};

export const darkThemeColors = {
  bgColor: ThemeColors.BLACK,
  bgColor_point: ThemeColors.BLACK,
  bgColor_yellow: ThemeColors.BLACK,
  fgColor: ThemeColors.WHITE,
  pColor: ThemeColors.POINT,
  fontColor: ThemeColors.WHITE,
  sFontColor: ThemeColors.FONT,
};

const globalVars = createGlobalTheme(':root', {
  font: {
    familly: {
      notoSansKr: `var(--font-noto-sans-kr)`,
      GasoekOne: `var(--font-gasoek-one)`,
    },
    size: {
      xLarge: '48px',
      large: '34px',
      medium: '24px',
      regular: '18px',
      small: '14px',
      xSmall: '12px',
    },
    weight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },
  device: {
    pc: '1200px',
    mo: '370px',
  },
  button: {
    size: {
      small: { width: '60px', height: '30px', borderWidth: '1px', fontSize: '12px' },
      medium: { width: '100px', height: '40px', borderWidth: '1px', fontSize: '14px' },
      large: { width: '150px', height: '56px', borderWidth: '2px', fontSize: '16px' },
      full: { width: '100%', height: '56px', borderWidth: '2px', fontSize: '16px' },
    },
    color: {
      point: { bgColor: globalThemeColors.pColor, color: globalThemeColors.fgColor },
      outline: { bgColor: globalThemeColors.bgColor, color: globalThemeColors.pColor },
    },
  },
});

export const vars = { ...globalVars, color: {...globalThemeColors} };