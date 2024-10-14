'use client';
import Page from '@/components/content-layout/Page';
import clsx from 'clsx';
import AppWindow from '@/components/wireframes/AppWindow';
import Image from 'next/image';
import MemoGoWireframe from '@/components/wireframes/MemoGoWireframe';
import GitHubWireframe from '@/components/wireframes/GitHubWireframe';
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
            <div>
              <AppWindow
                type="browser"
                browserTabs={[
                  {
                    icon: (
                      <Image
                        alt="memogo logo"
                        src="/assets/images/memogoLogo.png"
                        width={16}
                        height={16}
                      />
                    ),
                    title:
                      'MemoGo - Plan Your Trip Itinerary & Split Expense Together',
                    isActive: true,
                    url: 'https://memogo.com',
                  },
                ]}
              >
                <MemoGoWireframe />
              </AppWindow>
            </div>
            <hr className={clsx('divider')} />
            <h2 className={clsx('heading heading-h2')}>Portfolio</h2>
            <div className={clsx('mb-8')}>
              <AppWindow
                type="browser"
                browserTabs={[
                  {
                    icon: <GitHubIcon className="h-4 w-4" />,
                    title: 'vubom01/portfolio',
                    isActive: true,
                    url: 'https://github.com/vubom01/portfolio',
                  },
                ]}
              >
                <GitHubWireframe
                  author="vubom01"
                  repository="portfolio"
                  description="This portfolio design is inspired by various online sources. The source code is free to use and is not intended for commercial purposes."
                />
              </AppWindow>
            </div>
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
