'use client';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { defaultLocale } from '@/config';
import messages from '@messages/en.json';

export default function Provider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="light"
    >
      <NextIntlClientProvider locale={defaultLocale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}