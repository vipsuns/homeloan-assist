import React, { useState, useEffect } from 'react';
import { LeadProvider } from './context/LeadContext';
import { Navbar } from './components/common/Navbar';
import { MobileBottomBar } from './components/common/MobileBottomBar';
import { Footer } from './components/common/Footer';
import { LeadModal } from './components/common/LeadModal';
import { ExitIntentModal } from './components/common/ExitIntentModal';
import { Toast } from './components/common/Toast';

import { HomePage } from './pages/HomePage';
import { HomeLoansPage } from './pages/HomeLoansPage';
import { EligibilityPage } from './pages/EligibilityPage';
import { EmiCalculatorPage } from './pages/EmiCalculatorPage';
import { LoanProcessPage } from './pages/LoanProcessPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { FaqsPage } from './pages/FaqsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage, TermsPage, DisclaimerPage } from './pages/LegalPages';
import { AdminPage } from './pages/AdminPage';

export function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isAdminRoute = currentPath.startsWith('/admin');

  const renderPublicPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigateTo} />;
      case '/home-loans':
        return <HomeLoansPage onNavigate={navigateTo} />;
      case '/eligibility':
        return <EligibilityPage onNavigate={navigateTo} />;
      case '/emi-calculator':
        return <EmiCalculatorPage onNavigate={navigateTo} />;
      case '/loan-process':
        return <LoanProcessPage onNavigate={navigateTo} />;
      case '/documents':
        return <DocumentsPage onNavigate={navigateTo} />;
      case '/faqs':
        return <FaqsPage onNavigate={navigateTo} />;
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/contact':
        return <ContactPage onNavigate={navigateTo} />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsPage />;
      case '/disclaimer':
        return <DisclaimerPage />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <LeadProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        {isAdminRoute ? (
          <AdminPage onNavigatePublic={() => navigateTo('/')} />
        ) : (
          <>
            <Navbar currentPath={currentPath} onNavigate={navigateTo} />
            <main className="flex-1">
              {renderPublicPage()}
            </main>
            <Footer onNavigate={navigateTo} />
            <MobileBottomBar />
            <ExitIntentModal />
          </>
        )}

        {/* Global Modals & Notifications */}
        <LeadModal />
        <Toast />
      </div>
    </LeadProvider>
  );
}

export default App;
