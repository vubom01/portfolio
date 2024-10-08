'use client';
import PageHeader from '@/components/content-layout/PageHeader';
import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

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
      <PageHeader title={title} description={description} />
      <div className={clsx('scroll-mt-[86px] lg:pr-10')} id="main-contents">
        {children}
      </div>
    </>
  );
}

export default Page;
