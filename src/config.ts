export type Locale = (typeof locales)[number];

export const locales = ['en', 'vi'] as const;
export const defaultLocale: Locale = 'en';
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
