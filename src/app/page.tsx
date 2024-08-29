import AboutSection from '@/components/AboutSection';
import AchievementsSection from '@/components/AchievementsSection';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        {/*<ProjectsSection />*/}
        {/*<EmailSection />*/}
      </div>
      {/*<Footer />*/}
    </main>
  );
}
