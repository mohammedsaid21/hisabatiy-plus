import type { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ConceptsPage } from './pages/ConceptsPage';
import { LandingPage } from './pages/LandingPage';
import { PrivacyPage } from './pages/PrivacyPage';

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Shell>
              <main>
                <LandingPage />
              </main>
            </Shell>
          }
        />
        <Route
          path="/privacy"
          element={
            <Shell>
              <PrivacyPage />
            </Shell>
          }
        />
        <Route
          path="/concepts"
          element={
            <Shell>
              <ConceptsPage />
            </Shell>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
