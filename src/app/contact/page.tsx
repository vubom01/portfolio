'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

export default function Projects() {
  return (
    <header
      id="contact"
      className={clsx(
        'background-grid background-grid--fade-out pt-36 pb-20',
        'lg:pb-28 lg:pt-52 lg:pr-10',
        'min-h-[100vh]'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <motion.div
          className={clsx(
            'flex items-center',
            'text-4xl md:text-7xl font-extrabold',
            'mb-1 md:mb-0 gap-1 md:gap-2',
            'text-slate-700 dark:text-slate-300'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
        >
          Contact
        </motion.div>
      </div>
    </header>
  );
}
