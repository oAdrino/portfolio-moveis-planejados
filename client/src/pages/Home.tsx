import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectGallery from '@/components/ProjectGallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Design: Minimalist Modern with Green-Moss Accent
 * 
 * Component Structure:
 * - Header: Fixed navigation with logo and CTA
 * - Hero: Full-screen hero section with image and call-to-action
 * - ProjectGallery: Masonry grid with category filters
 * - About: Asymmetric layout with process overview
 * - Contact: Contact form and business information
 * - Footer: Footer with links and contact info
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectGallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
