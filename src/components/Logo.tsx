import { MixIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

function Logo() {
  return (
    <div className={clsx('flex items-center gap-1.5 font-[1000] leading-none')}>
      <MixIcon width={22} height={22} />
      <div className={clsx('-mt-1  text-xl')}>
        <span
          className={clsx('text-slate-900', 'dark:text-slate-200', 'text-s')}
        >
          vu
        </span>
        <span className={clsx('text-accent-600', 'dark:text-accent-500')}>
          .
        </span>
      </div>
    </div>
  );
}

export default Logo;
