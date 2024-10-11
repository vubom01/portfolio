'use client';
import Page from '@/components/content-layout/Page';
import clsx from 'clsx';
import AppWindow from '@/components/wireframes/AppWindow';
import { GitHubIcon } from '@/components/icons/Icons';

export default function Projects() {
  return (
    <Page title="Projects" description="Showcase of my related work.">
      <div
        className={clsx(
          'content-wrapper flex-shrink-0 overflow-hidden lg:overflow-visible'
        )}
      >
        <div className={clsx('flex flex-row-reverse gap-8 xl:gap-24')}>
          <div className={clsx('-mt-48 hidden lg:block xl:w-[272px] w-64')} />
          <div className={clsx('page-contents')}>
            <h2 className={clsx('heading heading-h2')}>MemoGo</h2>
            <AppWindow
              type="browser"
              browserTabs={[
                {
                  icon: <GitHubIcon className="h-4 w-4" />,
                  title:
                    'MemoGo - Plan Your Trip Itinerary & Split Expense Together',
                  isActive: true,
                },
              ]}
            ></AppWindow>
            <hr className={clsx('divider')} />
            <h2 className={clsx('heading heading-h2')}>Personal blog</h2>
            <AppWindow
              type="browser"
              browserTabs={[
                {
                  icon: <GitHubIcon className="h-4 w-4" />,
                  title: 'tethiendaivu',
                  isActive: true,
                },
              ]}
            ></AppWindow>
          </div>
          <div
            className={clsx(
              'border-divider-light hidden border-l dark:border-divider-dark lg:block'
            )}
          />
        </div>
      </div>
    </Page>
  );
}
