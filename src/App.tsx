import type { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ProfilesPage } from './pages/ProfilesPage';
import { UsersPage } from './pages/UsersPage';

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
          path="/login-ayla"
          element={
            <Shell>
              <main>
                <LoginPage />
              </main>
            </Shell>
          }
        />
        <Route
          path="/users"
          element={
            <Shell>
              <main>
                <UsersPage />
              </main>
            </Shell>
          }
        />
        <Route
          path="/profiles"
          element={
            <Shell>
              <main>
                <ProfilesPage />
              </main>
            </Shell>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
