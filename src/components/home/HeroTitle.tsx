import clsx from 'clsx';
import { motion, useAnimationControls } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeroTitle() {
  const controls = useAnimationControls();
  const t = useTranslations('HomePage');

  return (
    <div>
      <motion.div
        className={clsx(
          'mb-1 flex items-center gap-1 text-2xl text-slate-600',
          'md:mb-0 md:gap-2 md:text-4xl',
          'dark:text-slate-400'
        )}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        {t('hi')}!
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
            rotate: 30,
            transformOrigin: 'right center',
          }}
          animate={controls}
          transition={{
            type: 'spring',
            delay: 0.35,
            bounce: 0.7,
            duration: 0.7,
          }}
        >
          <Image
            className={clsx('w-7 md:w-10')}
            alt="Love-you Gesture"
            src="/assets/emojis/love-you-gesture.png"
            width={48}
            height={48}
            onLoadingComplete={() => {
              controls.start({
                opacity: 1,
                y: 0,
                rotate: 0,
              });
            }}
            priority
          />
        </motion.div>
      </motion.div>
      <span className={clsx('text-slate-700', 'dark:text-slate-300')}>
        <motion.span
          className={clsx(
            'mb-4 block text-[2.5rem] font-[1000] leading-none',
            'md:mb-6 md:text-7xl'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          {t('iAm')}{' '}
          <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>
            Tien
          </strong>{' '}
          Nghe,{' '}
        </motion.span>
        <motion.h1
          className={clsx(
            'block text-base text-slate-600',
            'md:text-xl',
            'dark:text-slate-400'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          <span className={clsx('lowercase')}>{t('a')}</span>{' '}
          <strong
            className={clsx(
              'font-bold lowercase text-slate-700',
              'dark:text-slate-300'
            )}
          >
            {t('softwareEngineer')}
          </strong>
          {/*<span className={clsx('block')}>{t('description')}</span>*/}
        </motion.h1>
      </span>
    </div>
  );
}

export default HeroTitle;
