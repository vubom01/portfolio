import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import type { ReactElement } from 'react';

function Error404() {
  const t = useTranslations('NotFoundPage');

  return (
    <div
      className={clsx(
        'background-grid fade-out flex h-full items-center justify-center',
        'min-h-[100vh] pb-20'
      )}
    >
      <div
        className={clsx(
          'content-wrapper text-center text-slate-600',
          'dark:text-slate-400'
        )}
      >
        <h1 className={clsx('py-12 text-center')}>
          <div className={clsx('mb-3 text-8xl font-extrabold')}>404</div>
          <div className={clsx('text-2xl')}>{t('pageNotFound')}</div>
        </h1>
        <Link
          href="/"
          className={clsx(
            'rounded-xl py-2 px-4 text-xl text-accent-600',
            'dark:text-accent-400'
          )}
        >
          {t('backToHomepage')}
        </Link>
      </div>
    </div>
  );
}

Error404.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Error404;
