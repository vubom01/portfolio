import clsx from 'clsx';

import { SkeletonSm } from '@/components/wireframes/Skeletons';
import Image from 'next/image';

function MemoGoWireframe() {
  return (
    <div
      className={clsx(
        'h-full w-full bg-white pr-4 pl-4 pb-4 text-sm text-slate-600',
        'dark:bg-slate-900 dark:text-slate-400',
        'p-2'
      )}
    >
      <div className="grid grid-cols-3 gap-4 gap-x-14">
        <div className="col-span-3 lg:col-span-2">
          <h2 className={clsx('heading heading-h3')}>
            MemoGo - Your Go-To for Group Expenses
          </h2>
          <p>
            MemoGo is your best free splitting app for effortlessly splitting
            expenses. Whether you are sharing a vacation with friends, splitting
            the bill with roommates, or managing shared expenses with a group,
            our intuitive expense splitter and split money calculator ensure
            everyone contributes fairly. From shared expenses to shared
            adventures, MemoGo is your ultimate companion for a stress-free
            experience.
          </p>
        </div>
        <div className={clsx('hidden lg:block')}>
          <Image
            alt="memogo bg"
            src="/assets/images/memogo-home-background.png"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className={clsx('mt-4 flex flex-col gap-2')}>
        <SkeletonSm w={320} />
        <SkeletonSm w={200} />
      </div>
    </div>
  );
}

export default MemoGoWireframe;
