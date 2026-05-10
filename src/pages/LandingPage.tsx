import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppShowcase } from '../components/AppShowcase';
import { CTASection } from '../components/CTASection';
import { Features } from '../components/Features';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { ProblemSolution } from '../components/ProblemSolution';

export function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const raw = location.hash?.replace(/^#/, '');
    if (!raw) return;
    window.requestAnimationFrame(() => {
      document.getElementById(raw)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.hash, location.pathname]);

  return (
    <>
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <AppShowcase />
      <CTASection />
    </>
  );
}
