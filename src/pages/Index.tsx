import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AnalyticsSection from '@/components/AnalyticsSection';
import BlogsSection from '@/components/BlogsSection';
import GetInTouchSection from '@/components/GetInTouchSection';
import MobileHeader from '@/components/MobileHeader';
import MobileContactBar from '@/components/MobileContactBar';
import AvatarModal from '@/components/AvatarModal';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <MobileHeader />

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="lg:ml-72">
        <Navbar />
        
        <main className="px-6 md:px-12 lg:px-16 pt-8 lg:pt-20 max-w-6xl mx-auto">
          <HeroSection />
          {/* Mobile Contact Bar */}
          <MobileContactBar />
          <SkillsSection />
          <ProjectsSection />
          <AnalyticsSection />
          <BlogsSection />
          <GetInTouchSection />
          <Footer />
        </main>
      </div>
      {/* Avatar Modal */}
      <AvatarModal />
    </div>
  );
};

export default Index;
