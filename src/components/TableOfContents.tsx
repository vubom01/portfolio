import clsx from 'clsx';
import { motion } from 'framer-motion';

import useOnScroll from '@/hooks/useOnScroll';
import useScrollSpy from '@/hooks/useScrollSpy';
import { ITableOfContentsItem } from '@/interfaces/common';

interface TableOfContentsLinkProps extends ITableOfContentsItem {
  active?: boolean;
}

function TableOfContentsLink({
  title,
  depth,
  slug,
  active = false,
}: TableOfContentsLinkProps) {
  return (
    <a
      className={clsx('toc-link', {
        'toc-link--depth-2': depth === 2,
        'toc-link--active': active,
      })}
      href={`#${slug}`}
    >
      {title}
    </a>
  );
}

interface TableOfContentsProps {
  items: Array<ITableOfContentsItem>;
}

function TableOfContents({ items = [] }: TableOfContentsProps) {
  const isScrolled = useOnScroll(200);
  const { currentVisible } = useScrollSpy();

  const handleScrollToTopClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <nav
      aria-label="Page table of contents"
      className={clsx(
        'border-divider-light rounded-xl border bg-white',
        'dark:border-divider-dark dark:bg-[#161e31]'
      )}
    >
      <div
        className={clsx(
          'border-divider-light flex items-center justify-between border-b py-3 px-5 text-sm font-bold',
          'dark:border-divider-dark'
        )}
      >
        <h2
          className={clsx('text-slate-700', 'dark:text-slate-300')}
          id="table-of-contents"
        >
          <span className={clsx('lg:hidden', 'xl:inline')}>
            Table of Contents
          </span>
        </h2>
        <motion.div
          initial={{ x: 16, opacity: 0 }}
          animate={isScrolled ? { x: 0, opacity: 1 } : { x: 16, opacity: 0 }}
        >
          <a
            className={clsx(
              'border-divider-light text-accent-700 flex h-6 cursor-pointer items-center rounded-full border px-2 text-xs font-normal',
              'dark:border-divider-dark dark:text-accent-400'
            )}
            tabIndex={isScrolled ? 0 : -1}
            onClick={handleScrollToTopClick}
          >
            scroll to top
          </a>
        </motion.div>
      </div>
      <div className={clsx('relative p-3 py-4')}>
        <ol className={clsx('toc flex flex-col gap-2')}>
          {items.map(({ title, depth, slug }) => {
            const isActive = currentVisible && currentVisible[slug];

            return (
              <li key={slug}>
                <TableOfContentsLink
                  title={title}
                  depth={depth}
                  slug={slug}
                  active={isActive}
                />
                {isActive && <div className={clsx('toc-visible')} />}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default TableOfContents;
