import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MusicControl } from "@/components/site/MusicControl";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import ProjectCaseStudy from "@/pages/ProjectCaseStudy";
import Services from "@/pages/Services";
import HowItWorks from "@/pages/HowItWorks";
import Pricing from "@/pages/Pricing";
import ClientGuide from "@/pages/ClientGuide";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Play from "@/pages/Play";
import ArtArchive from "@/pages/ArtArchive";
import ArtStyle from "@/pages/ArtStyle";
import { Terms, Privacy } from "@/pages/Policies";
import CanadianSupport from "@/pages/CanadianSupport";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Let the new page render, then jump to the in-page anchor (e.g. /pricing#care).
      const t = window.setTimeout(() => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el) el.scrollIntoView({ block: "start" });
        else window.scrollTo(0, 0);
      }, 80);
      return () => window.clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/brochure" element={<ClientGuide />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/canadian-support" element={<CanadianSupport />} />
          <Route path="/play" element={<Play />} />
          <Route path="/art" element={<ArtArchive />} />
          <Route path="/art/:slug" element={<ArtStyle />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MusicControl />
      <Toaster />
    </div>
  );
}
