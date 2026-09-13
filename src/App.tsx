import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext.tsx';
import { Navbar } from './components/navigation/Navbar.tsx';
import { Footer } from './components/navigation/Footer.tsx';
import { MobileMenu } from './components/navigation/MobileMenu.tsx';
import { SearchModal } from './components/navigation/SearchModal.tsx';
import { LoginModal } from './components/navigation/LoginModal.tsx';
import { LightboxModal } from './components/navigation/LightboxModal.tsx';
import { Toast } from './components/common/Toast.tsx';

// Pages
import { HomePage } from './pages/HomePage.tsx';
import { AppsPage } from './pages/AppsPage.tsx';
import { PromptsPage } from './pages/PromptsPage.tsx';
import { CreationsPage } from './pages/CreationsPage.tsx';
import { VideoPromptsPage } from './pages/VideoPromptsPage.tsx';
import { DocumentsPage } from './pages/DocumentsPage.tsx';
import { ProjectsPage } from './pages/ProjectsPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderActiveRoute = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/apps':
        return <AppsPage />;
      case '/prompts':
        return <PromptsPage />;
      case '/creations':
        return <CreationsPage />;
      case '/video-prompts':
        return <VideoPromptsPage />;
      case '/documents':
        return <DocumentsPage />;
      case '/projects':
        return <ProjectsPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div
      id="rdl-app"
      className="min-h-screen flex flex-col bg-[#05070d] text-slate-100 font-sans relative selection:bg-blue-600 selection:text-white"
    >
      {/* Global Top Navigation */}
      <Navbar />

      {/* Main Dynamic Viewport */}
      <main className="flex-1 w-full relative z-10">
        {renderActiveRoute()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Overlays & Modals */}
      <MobileMenu />
      <SearchModal />
      <LoginModal />
      <LightboxModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
