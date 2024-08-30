import { useTranslations } from 'next-intl';
import React from 'react';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className="flex min-h-screen" style={{ height: 2000 }}>
      <div className="container mt-24 mx-auto px-12 py-4">
        <div>{t('title')}</div>
        {/*<HeroSection />*/}
        {/*<AchievementsSection />*/}
        {/*<AboutSection />*/}
        {/*<ProjectsSection />*/}
        {/*<EmailSection />*/}
      </div>
      {/*<Footer />*/}
    </main>
  );
}
