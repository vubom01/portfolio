import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/icons/Icons';
import clsx from 'clsx';
import { motion } from 'framer-motion';

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

export default function Socials() {
  return (
    <motion.div
      variants={animation}
      transition={{ delay: 0.6 }}
      initial="hide"
      animate="show"
    >
      <div className={clsx('flex items-center gap-4')}>
        <a
          href="https://www.linkedin.com/in/vu-lh/"
          title="LinkedIn Icon"
          target="_blank"
        >
          <LinkedInIcon height={24} width={24} />
        </a>
        <a
          href="https://github.com/vubom01"
          title="Github Icon"
          target="_blank"
        >
          <GitHubIcon height={24} width={24} />
        </a>
        <a
          href="https://www.instagram.com/tethiendaivu/"
          title="Instagram Icon"
          target="_blank"
        >
          <InstagramIcon height={24} width={24} />
        </a>
        <a href="https://x.com/vu_le_huy" title="Twitter Icon" target="_blank">
          <TwitterIcon height={24} width={24} />
        </a>
      </div>
    </motion.div>
  );
}
