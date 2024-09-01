import Navbar from '@/components/navigation/Navbar';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import React from 'react';
import '../styles/main.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'tethiendaivu',
  icons: '/assets/favicon.png',
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={clsx(inter.className)}>
        <ThemeProvider attribute="class">
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main>{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
