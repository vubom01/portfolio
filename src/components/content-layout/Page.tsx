'use client';
import PageHeader from '@/components/content-layout/PageHeader';
import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import SkipNavigation from '@/components/navigation/SkipNavigation';

interface PageProps {
  title: string;
  description: string;
}

function Page({
  title,
  description,
  children = null,
}: PropsWithChildren<PageProps>) {
  return (
    <>
      <SkipNavigation />
      <PageHeader title={title} description={description} />
      <div className={clsx('scroll-mt-[86px]')} id="main-contents">
        {children}
      </div>
    </>
  );
}

export default Page;
