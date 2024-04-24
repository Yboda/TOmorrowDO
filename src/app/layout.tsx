import type { Metadata } from 'next';
import { Noto_Sans_KR, Gasoek_One } from 'next/font/google';
import './_styles/reset.css';
import './_styles/globalTheme.css';
import GlobalThemeProvider from './_contexts/GlobalThemeProvider';
import AuthSessionProvider from './_contexts/AuthSessionProvider';

export const noto = Noto_Sans_KR({
  display: 'swap',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
});
export const gasoek = Gasoek_One({
  display: 'swap',
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-gasoek-one',
});

export const metadata: Metadata = {
  title: 'TOmorrowDO',
  description: "Prepare for tomorrow's work today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={`${noto.variable} ${gasoek.variable}`} suppressHydrationWarning>
      <body>
        <GlobalThemeProvider>
          <AuthSessionProvider>{children}</AuthSessionProvider>
        </GlobalThemeProvider>
      </body>
    </html>
  );
}
