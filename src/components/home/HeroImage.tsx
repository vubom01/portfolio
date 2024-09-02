import clsx from 'clsx';
import Image from 'next/image';
import { motion } from 'framer-motion';

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div
        className={clsx(
          'from-accent-400/20 via-accent-400/0 h-[590px] w-[375px] rounded-full bg-gradient-to-t',
          'dark:from-accent-600/10 dark:via-accent-600/0'
        )}
      >
        <div className={clsx('relative right-10 top-[100px]')}>
          <Image
            alt=""
            src="/assets/images/hero-image.png"
            width={457}
            height={526}
            className={clsx(' max-w-none', 'dark:brightness-[.82]')}
            quality={100}
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}

export default HeroImage;
