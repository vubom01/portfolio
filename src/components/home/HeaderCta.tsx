import { DocumentIcon } from '@/components/icons/Icons';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('HomePage');

  return (
    <motion.div className={clsx('flex gap-2')} initial="hide" animate="show">
      <motion.div
        className={clsx('relative z-20')}
        variants={animation}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/contact"
          className={clsx(
            'button button--solid min-w-[128px]',
            'md:button--big'
          )}
        >
          {t('getInTouch')}
        </Link>
      </motion.div>
      <motion.div variants={animation} transition={{ delay: 0.5 }}>
        <a
          target="_blank"
          rel="noreferrer nofollow"
          href="https://www.linkedin.com/in/vu-lh/"
          className={clsx(
            'button button--ghost px-2',
            'md:button--big md:px-2'
          )}
        >
          <DocumentIcon className={clsx('h-5 w-5')} />
          {t('resume')}
        </a>
      </motion.div>
    </motion.div>
  );
}

export default HeaderCta;
