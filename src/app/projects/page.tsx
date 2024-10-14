'use client';
import Page from '@/components/content-layout/Page';
import clsx from 'clsx';
import AppWindow from '@/components/wireframes/AppWindow';
import Image from 'next/image';
import MemoGoWireframe from '@/components/wireframes/MemoGoWireframe';
import GitHubWireframe from '@/components/wireframes/GitHubWireframe';
import { GitHubIcon } from '@/components/icons/Icons';
import { GITHUB_REPO_LINK, MEMOGO_LINK } from '@/constants/socials';
import { ITableOfContentsItem } from '@/interfaces/common';
import TableOfContents from '@/components/TableOfContents';

export default function Projects() {
  const tableOfContents: ITableOfContentsItem[] = [
    {
      title: 'MemoGo',
      depth: 1,
      slug: 'memogo',
    },
    {
      title: 'Portfolio',
      depth: 1,
      slug: 'portfolio',
    },
  ];

  return (
    <Page title="Projects" description="Showcase of my related work.">
      <div
        className={clsx(
          'content-wrapper flex-shrink-0 overflow-hidden lg:overflow-visible'
        )}
        data-accent="blue"
      >
        <div className={clsx('flex flex-row-reverse gap-8 xl:gap-24')}>
          <div className={clsx('-mt-48 hidden', 'lg:block')}>
            <div
              className={clsx(
                'sticky top-24 z-[901] w-64',
                'xl:w-[272px]',
                'fm:relative fm:top-0'
              )}
            >
              <TableOfContents items={tableOfContents} />
            </div>
          </div>
          <div className={clsx('page-contents')}>
            <h2
              id="memogo"
              data-ss="memogo"
              className={clsx('heading heading-h2')}
            >
              MemoGo
            </h2>
            <div>
              <AppWindow
                type="browser"
                browserTabs={[
                  {
                    icon: (
                      <Image
                        alt="memogo logo"
                        src="/assets/images/memogo-favicon.png"
                        width={16}
                        height={16}
                      />
                    ),
                    title:
                      'MemoGo - Plan Your Trip Itinerary & Split Expense Together',
                    isActive: true,
                    url: MEMOGO_LINK,
                  },
                ]}
              >
                <MemoGoWireframe />
              </AppWindow>
            </div>
            <hr className={clsx('divider')} />
            <h2
              id="portfolio"
              data-ss="portfolio"
              className={clsx('heading heading-h2')}
            >
              Portfolio
            </h2>
            <div className={clsx('mb-8')}>
              <AppWindow
                type="browser"
                browserTabs={[
                  {
                    icon: <GitHubIcon className="h-4 w-4" />,
                    title: 'vubom01/portfolio',
                    isActive: true,
                    url: GITHUB_REPO_LINK,
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
