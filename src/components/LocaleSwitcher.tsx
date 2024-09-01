import { Locale } from '@/config';
import { setUserLocale } from '@/services/locale';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { useState, useTransition } from 'react';
import { FlagIcon } from 'react-flag-kit';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  const [_, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale).then();
    });
    setIsOpen(false);
  }

  const getFlagCode = (locale: string) => {
    switch (locale) {
      case 'en':
        return 'US';
      case 'vi':
        return 'VN';
      default:
        return 'US';
    }
  };

  const items = [
    {
      value: 'en',
      label: t('en'),
    },
    {
      value: 'vi',
      label: t('vi'),
    },
  ];

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className={clsx('py-3')}>
        <FlagIcon code={getFlagCode(locale || 'en')} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {items?.map((item, index) => (
            <button
              key={item.value}
              onClick={() => onChange(item.value)}
              className={clsx(
                'flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 w-full text-left',
                index === 0 ? 'hover:rounded-t-md' : 'hover:rounded-b-md'
              )}
            >
              <FlagIcon code={getFlagCode(item.value)} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
