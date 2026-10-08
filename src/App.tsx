/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProjectModal } from './components/ProjectModal';
import { LightboxModal } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { GALLERY_PHOTOS } from './data/content';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedColorForQuote, setSelectedColorForQuote] = useState<string>('');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectColorForQuote = (colorName: string) => {
    setSelectedColorForQuote(colorName);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-red-500 selection:text-white">
      {/* Sticky Premium Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Routing Container */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProjectModal={setActiveProjectModal}
            onSelectColorForQuote={handleSelectColorForQuote}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenProjectModal={setActiveProjectModal}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onOpenLightbox={(index) => setLightboxIndex(index)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage initialColorInterest={selectedColorForQuote} />
        )}
      </main>

      {/* Global Interactive Modals */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onNavigate={handleNavigate}
      />

      <LightboxModal
        photos={GALLERY_PHOTOS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigateIndex={(index) => setLightboxIndex(index)}
      />

      {/* Floating WhatsApp Action Button on Every Page */}
      <WhatsAppButton />

      {/* Premium Colorful Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
