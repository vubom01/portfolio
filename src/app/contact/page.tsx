'use client';
import Page from '@/components/content-layout/Page';
import clsx from 'clsx';
import {
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  TWITTER_LINK,
} from '@/constants/socials';
import TableOfContents from '@/components/TableOfContents';

export default function Contact() {
  const tableOfContents: { title: string; depth: number; slug: string }[] = [
    {
      title: 'Contact',
      depth: 1,
      slug: 'contact',
    },
    {
      title: 'Social Media',
      depth: 1,
      slug: 'social-media',
    },
  ];

  return (
    <Page
      title="Contact"
      description="Get in touch with me anytime, through social media, e-mail, or phone number."
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
              id="contact"
              data-ss="contact"
              className={clsx('heading heading-h2')}
            >
              <span>Contact</span>
            </h2>
            <div className={clsx('data-table-contents')}>
              <table>
                <thead>
                  <tr>
                    <th>Contact</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Address</td>
                    <td>Hanoi, Vietnam</td>
                  </tr>
                  <tr>
                    <td>Timezone</td>
                    <td>GMT+7</td>
                  </tr>
                  <tr>
                    <td>E-mail</td>
                    <td>
                      <a className={clsx('link')}>lehuyvu1852001@gmail.com</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              If you need any further information, such as my phone number,
              please do not hesitate to send me an email first.
            </p>
            <hr className={clsx('divider')} />
            <h2
              id="social-media"
              data-ss="social-media"
              className={clsx('heading heading-h2')}
            >
              <span>Social Media</span>
            </h2>
            <div className={clsx('data-table-contents')}>
              <table>
                <thead>
                  <tr>
                    <th>Social Media</th>
                    <th>Profile URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Linkedin</td>
                    <td>
                      <a
                        className={clsx('link')}
                        href={LINKEDIN_LINK}
                        target="_blank"
                      >
                        {LINKEDIN_LINK}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Twitter</td>
                    <td>
                      <a
                        className={clsx('link')}
                        href={TWITTER_LINK}
                        target="_blank"
                      >
                        {TWITTER_LINK}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Instagram</td>
                    <td>
                      <a
                        className={clsx('link')}
                        href={INSTAGRAM_LINK}
                        target="_blank"
                      >
                        {INSTAGRAM_LINK}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
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
