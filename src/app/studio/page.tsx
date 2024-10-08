'use client';
import clsx from 'clsx';
import Page from '@/components/content-layout/Page';

export default function Studio() {
  return (
    <Page
      title="Studio"
      description="A home workspace and entertainment area that helps me connect with friends and complete work efficiently."
    >
      <div
        className={clsx(
          'content-wrapper flex-shrink-0 overflow-hidden lg:overflow-visible'
        )}
      >
        <div className={clsx('flex flex-row-reverse gap-8 xl:gap-24')}>
          <div className={clsx('-mt-48 hidden lg:block xl:w-[272px] w-64')} />
          <div className={clsx('page-contents')}>
            <h2 className={clsx('heading heading-h2')}>Computer</h2>
            <div className={clsx('table-content')}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>OS</td>
                    <td>Windows 10 Home 64-bit</td>
                  </tr>
                  <tr>
                    <td>CPU</td>
                    <td>Intel Core i5-10400F 10th Gen</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>16GB 3200Mhz DDR4</td>
                  </tr>
                  <tr>
                    <td>GPU</td>
                    <td>RTX 2060 6GB GDDR6</td>
                  </tr>
                  <tr>
                    <td>Storage</td>
                    <td>NVMe M.2 512GB Gen3x4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className={clsx('heading heading-h3')}>Second Device</h2>
            <p>Apple MacBook Air M2 2022 16GB 256GB</p>
            <hr className={clsx('divider')} />
            <h2 className={clsx('heading heading-h2')}>Display</h2>
            <p>Asus TUF GAMING VG249Q3A</p>
            <p>
              I often play games with my friends, so a 24-inch monitor is ideal
              for my needs.
            </p>
            <hr className={clsx('divider')} />
            <h2 className={clsx('heading heading-h2')}>Keyboard</h2>
            <div className={clsx('table-content')}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Case</td>
                    <td>Krush65 PC / SS Black PVD</td>
                  </tr>
                  <tr>
                    <td>PCB</td>
                    <td>Hotswap 8KHz 1 mode</td>
                  </tr>
                  <tr>
                    <td>Plate</td>
                    <td>Alu / Top mount</td>
                  </tr>
                  <tr>
                    <td>Switch</td>
                    <td>KTT Meow 5PIN Linear 43g</td>
                  </tr>
                  <tr>
                    <td>Keycap</td>
                    <td>GMK Mictlan</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className={clsx('heading heading-h3')}>Second keyboard</h2>
            <div className={clsx('table-content')}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Case</td>
                    <td>NJ68 MAX - AP</td>
                  </tr>
                  <tr>
                    <td>PCB</td>
                    <td>Hotswap 3 modes</td>
                  </tr>
                  <tr>
                    <td>Plate</td>
                    <td>Brass / Sandwich mount</td>
                  </tr>
                  <tr>
                    <td>Switch</td>
                    <td>MZ Z1 5PIN Linear 45g</td>
                  </tr>
                  <tr>
                    <td>Keycap</td>
                    <td>EPBT Miami</td>
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
