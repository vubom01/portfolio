'use client';
import Page from '@/components/content-layout/Page';
import React from 'react';
import clsx from 'clsx';
import { ITableOfContentsItem } from '@/interfaces/common';
import TableOfContents from '@/components/TableOfContents';

export default function ExperiencePage() {
  const tableOfContents: ITableOfContentsItem[] = [
    {
      title: 'Full-time Work',
      depth: 1,
      slug: 'full-time-work',
    },
    {
      title: 'Freelance',
      depth: 1,
      slug: 'freelance',
    },
  ];

  return (
    <Page
      title="Experience"
      description="All about my freelance and professional work experience."
    >
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
              id="full-time-work"
              data-ss="full-time-work"
              className={clsx('heading heading-h2')}
            >
              Full-time Work
            </h2>
            <p>
              <strong>Teko Vietnam</strong> (May 2021 - Present)
            </p>
            <hr className={clsx('divider')} />
            <h2
              id="freelance"
              data-ss="freelance"
              className={clsx('heading heading-h2')}
            >
              Freelance
            </h2>
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
