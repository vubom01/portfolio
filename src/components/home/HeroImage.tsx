import clsx from 'clsx';
import Image from 'next/image';

function HeroImage() {
  return (
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
  );
}

export default HeroImage;
