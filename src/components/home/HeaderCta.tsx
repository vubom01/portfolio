import { DocumentIcon } from '@/components/icons/Icons';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

const animation = {
  hide: {
    x: -16,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderCta() {
  return (
    <motion.div className={clsx('flex gap-2')} initial="hide" animate="show">
      <motion.div
        className={clsx('relative z-20')}
        variants={animation}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/work/contact"
          className={clsx(
            'button button--solid min-w-[128px]',
            'md:button--big'
          )}
        >
          Get in Touch
        </Link>
      </motion.div>
      <motion.div variants={animation} transition={{ delay: 0.5 }}>
        <a
          target="_blank"
          rel="noreferrer nofollow"
          href="https://www.figma.com/community/file/1176377524040948926"
          className={clsx(
            'button button--ghost px-2',
            'md:button--big md:px-2'
          )}
        >
          <DocumentIcon className={clsx('h-5 w-5')} />
          RESUME
        </a>
      </motion.div>
    </motion.div>
  );
}

export default HeaderCta;
