'use client';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import NavLink from '@/components/navigation/NavLink';
import ThemeToggle from '@/components/ThemeToggle';
import useOnScroll from '@/hooks/useOnScroll';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import React from 'react';

const Navbar = () => {
  const t = useTranslations('Header');

  const isScrolled = useOnScroll(0);

  return (
    <header className={clsx('fixed top-0 right-0 left-0 z-[1000]')}>
      <div
        className={clsx('fixed inset-0 h-16', [
          isScrolled === true && [
            'border-divider-light border-b bg-white/70 backdrop-blur',
            'dark:border-divider-dark dark:bg-slate-900/80',
          ],
        ])}
      />
      <div className={clsx('content-wrapper-max')}>
        <div
          className={clsx(
            'relative flex h-16 items-center justify-between px-2 text-sm',
            'md:px-4'
          )}
        >
          <nav className={clsx('flex', 'gap-2', 'px-2')}>
            <ul className={clsx('flex items-center')}>
              <li>
                <NavLink title={t('projects')} href="/projects" />
              </li>
              <li>
                <NavLink title={t('contact')} href="/contact" />
              </li>
              <li>
                <NavLink title={t('studio')} href="/studio" />
              </li>
            </ul>
          </nav>
          <div className={clsx('flex items-center gap-x-4')}>
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
