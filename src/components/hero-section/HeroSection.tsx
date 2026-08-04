'use client';
import HeroCta from '@/components/hero-section/HeroCta';
import HeroTitle from '@/components/hero-section/HeroTitle';
import HeroSocials from '@/components/hero-section/HeroSocials';
import clsx from 'clsx';
import HeroImage from '@/components/hero-section/HeroImage';
import React from 'react';

const HeroSection = () => {
  return (
    <header
      id="page-header"
      className={clsx(
        'background-grid fade-out',
        'pt-28 pb-20',
        'lg:pb-28 lg:pt-52'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('relative')}>
          <div className={clsx('order-2 xl:order-none')}>
            <div className={clsx('relative z-10')}>
              <HeroTitle />
            </div>
            <div className={clsx('mt-6 md:mt-8')}>
              <HeroCta />
            </div>
            <div className={clsx('mt-6 md:mt-8')}>
              <HeroSocials />
            </div>
          </div>
          <div
            className={clsx(
              'pointer-events-none absolute -top-36 right-0 hidden z-0 select-none',
              'lg:block'
            )}
          >
            <HeroImage />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
