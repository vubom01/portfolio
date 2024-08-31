'use client';
import HeaderImage from '@/components/home/HeaderImage';
import HeaderTitle from '@/components/home/HeaderTitle';
import clsx from 'clsx';

const HeroSection = () => {
  return (
    <header
      id="page-header"
      className={clsx(
        'background-grid background-grid--fade-out pt-36 pb-20',
        'lg:pb-28 lg:pt-52',
        'min-h-[100vh]'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('relative')}>
          <div className={clsx('relative z-10')}>
            <HeaderTitle />
          </div>
          <div
            className={clsx(
              'pointer-events-none absolute -top-36 right-0 z-0 hidden select-none',
              'lg:block'
            )}
          >
            <HeaderImage />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
