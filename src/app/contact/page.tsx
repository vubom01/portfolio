'use client';
import Page from '@/components/content-layout/Page';
import clsx from 'clsx';

export default function Contact() {
  return (
    <Page
      title="Contact"
      description="Get in touch with me anytime, through social media, e-mail, or phone number."
    >
      <div
        className={clsx(
          'content-wrapper flex-shrink-0 overflow-hidden lg:overflow-visible'
        )}
      >
        <div className={clsx('flex flex-row-reverse gap-8 xl:gap-24')}>
          <div className={clsx('-mt-48 hidden lg:block xl:w-[272px] w-64')} />
          <div className={clsx('page-contents')}>
            <h2 className={clsx('heading heading-h2')}>Contact</h2>
            <div className={clsx('table-content')}>
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
            <h2 className={clsx('heading heading-h2')}>Social Media</h2>
            <div className={clsx('table-content')}>
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
                        href="https://www.linkedin.com/in/vu-lh"
                        target="_blank"
                      >
                        https://www.linkedin.com/in/vu-lh
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Twitter</td>
                    <td>
                      <a
                        className={clsx('link')}
                        href="https://x.com/vu_le_huy"
                        target="_blank"
                      >
                        https://x.com/vu_le_huy
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Instagram</td>
                    <td>
                      <a
                        className={clsx('link')}
                        href="https://www.instagram.com/tethiendaivu/"
                        target="_blank"
                      >
                        https://www.instagram.com/tethiendaivu/
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
