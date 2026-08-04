import clsx from 'clsx';
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';

import HeroImageOutline from './HeroImageOutline';

function HeroImage() {
  const controlsImage = useAnimationControls();
  const controlsOutline = useAnimationControls();

  return (
    <div
      className={clsx('relative h-[590px] w-[603px]')}
      style={{
        maskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
      }}
    >
      <div
        className={clsx(
          'from-accent-400/20 via-accent-400/0 absolute top-0 right-0 h-[590px] w-[375px] rounded-full bg-gradient-to-t',
          'dark:from-accent-600/10 dark:via-accent-600/0'
        )}
      >
        <div
          className={clsx(
            'relative right-10 top-[105px] overflow-hidden'
          )}
        >
          <motion.div
            className={clsx('absolute inset-0 z-10')}
            initial={{ opacity: 1 }}
            animate={controlsOutline}
          >
            <HeroImageOutline
              onAnimationComplete={() => {
                controlsOutline.start({
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0.15 },
                });

                controlsImage.start({
                  opacity: 1,
                  transition: { duration: 0.15 },
                });
              }}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={controlsImage}>
            <Image
              alt="tethiendaivu"
              src="/assets/images/avatar.png"
              width={457}
              height={485}
              className={clsx(' max-w-none', 'dark:brightness-[.82]')}
              quality={100}
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
