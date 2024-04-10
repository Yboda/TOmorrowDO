import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './_styles/reset.css';
import './_styles/globalTheme.css';
import GlobalThemeProvider from './_context/GlobalThemeProvider';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <GlobalThemeProvider>
          <div>{children}</div>
        </GlobalThemeProvider>
      </body>
    </html>
  );
}
