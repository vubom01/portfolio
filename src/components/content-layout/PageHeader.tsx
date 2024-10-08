import clsx from 'clsx';
import { motion } from 'framer-motion';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header
      id={title}
      className={clsx(
        'pt-36 pb-20',
        'lg:pb-28 lg:pt-48 lg:pr-10',
        'background-grid fade-out'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0 }}
        >
          <h1
            className={clsx(
              'text-[2.5rem] font-extrabold leading-tight text-slate-700',
              'md:text-7xl md:leading-snug',
              'dark:text-slate-300'
            )}
          >
            {title}
          </h1>
        </motion.div>
        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
        >
          <p
            className={clsx(
              'mt-4 text-lg text-slate-600',
              'md:mt-6 md:text-2xl lg:max-w-[500px] xl:max-w-[700px]',
              'dark:text-slate-400'
            )}
          >
            {description}
          </p>
        </motion.div>
      </div>
    </header>
  );
}
