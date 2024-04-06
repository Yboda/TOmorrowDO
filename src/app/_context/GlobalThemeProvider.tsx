'use client';

import { ThemeProvider } from "next-themes";
import { darkGlobalTheme, lightGlobalTheme } from "../_styles/globals.css";

const GlobalThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightGlobalTheme,
        dark: darkGlobalTheme,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;