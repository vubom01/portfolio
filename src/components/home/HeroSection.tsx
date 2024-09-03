'use client';
import HeaderCta from '@/components/home/HeroCta';
import HeroTitle from '@/components/home/HeroTitle';
import Socials from '@/components/home/Socials';
import clsx from 'clsx';
import HeroImage from '@/components/home/HeroImage';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ParticlesContainer from '@/components/ParticlesContainer';
import React from 'react';

const HeroSection = () => {
  return (
    <header
      id="page-header"
      className={clsx(
        'background-grid background-grid--fade-out',
        'pt-36 pb-20',
        'lg:pb-28 lg:pt-52 lg:pr-10',
        'min-h-[100vh]'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('relative')}>
          <ParticlesContainer />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, ease: 'easeIn' },
            }}
          >
            <div className={clsx('block lg:hidden w-fit mb-10')}>
              <Image
                alt=""
                src="/assets/images/hero-image.png"
                width={325}
                height={526}
                className={clsx(' max-w-none', 'dark:brightness-[.82]')}
                quality={100}
                priority
              />
            </div>
          </motion.div>
          <div className={clsx('order-2 xl:order-none')}>
            <div className={clsx('relative z-10')}>
              <HeroTitle />
            </div>
            <div className={clsx('mt-6 md:mt-8')}>
              <HeaderCta />
            </div>
            <div className={clsx('mt-6 md:mt-8')}>
              <Socials />
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
