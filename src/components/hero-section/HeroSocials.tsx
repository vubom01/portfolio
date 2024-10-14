import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/icons/Icons';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import {
  GITHUB_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  TWITTER_LINK,
} from '@/constants/socials';

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

export default function HeroSocials() {
  return (
    <motion.div
      variants={animation}
      transition={{ delay: 0.6 }}
      initial="hide"
      animate="show"
    >
      <div className={clsx('flex items-center gap-4')}>
        <a href={LINKEDIN_LINK} title="LinkedIn Icon" target="_blank">
          <LinkedInIcon height={24} width={24} />
        </a>
        <a href={GITHUB_LINK} title="Github Icon" target="_blank">
          <GitHubIcon height={24} width={24} />
        </a>
        <a href={INSTAGRAM_LINK} title="Instagram Icon" target="_blank">
          <InstagramIcon height={24} width={24} />
        </a>
        <a href={TWITTER_LINK} title="Twitter Icon" target="_blank">
          <TwitterIcon height={24} width={24} />
        </a>
      </div>
    </motion.div>
  );
}
