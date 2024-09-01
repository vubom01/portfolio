'use client';
import { GitHubIcon, TwitterIcon } from '@/components/icons/Icons';
import LocaleSwitcher from '@/components/locale/LocaleSwitcher';
import NavIcon from '@/components/navigation/NavIcon';
import NavLink from '@/components/navigation/NavLink';
import ThemeToggle from '@/components/theme/ThemeToggle';
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
            'relative z-50 flex h-16 items-center justify-between px-2 text-sm',
            'md:px-4'
          )}
        >
          <nav className={clsx('flex', 'gap-2', 'px-2')}>
            <ul className={clsx('flex items-center', 'gap-5')}>
              <li>
                <NavLink title={t('about')} href="/public" />
              </li>
              <li>
                <NavLink title={t('projects')} href="/public" />
              </li>
              <li>
                <NavLink title={t('contact')} href="/public" />
              </li>
            </ul>
          </nav>
          <ul className={clsx('flex items-center md:space-x-4')}>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://twitter.com/vu_le_huy"
                icon={<TwitterIcon className={clsx('h-5 w-5')} />}
                title="Twitter"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://github.com/vubom01"
                icon={<GitHubIcon className={clsx('h-5 w-5')} />}
                title="GitHub"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <div
                className={clsx(
                  'ml-2 mr-4 h-3 w-[1px] bg-slate-200',
                  'dark:bg-slate-700'
                )}
              />
            </li>
            <li className={clsx('mr-2')}>
              <LocaleSwitcher />
            </li>
            <li className={clsx('mr-2')}>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );

  // return (
  //   <nav className="fixed mx-auto top-0 left-0 right-0 z-10 border-2">
  //     <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-2 py-2.5">
  //       <div className="menu hidden md:block md:w-auto" id="navbar">
  //         <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
  //           {navLinks.map((link, index) => (
  //             <li key={index}>
  //               <NavLink href={link.path} title={link.title} />
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //       <div className="mobile-menu block md:hidden">
  //         {!navbarOpen ? (
  //           <button
  //             onClick={() => setNavbarOpen(true)}
  //             className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
  //           >
  //             <Bars3Icon className="h-5 w-5" />
  //           </button>
  //         ) : (
  //           <button
  //             onClick={() => setNavbarOpen(false)}
  //             className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
  //           >
  //             <XMarkIcon className="h-5 w-5" />
  //           </button>
  //         )}
  //       </div>
  //       <div>
  //         <ul className="flex p-4 md:p-0 md:flex-row md:space-x-4 mt-0">
  //           <li></li>
  //           <li></li>
  //         </ul>
  //       </div>
  //     </div>
  //     {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
  //   </nav>
  // );
};

export default Navbar;
