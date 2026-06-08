import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const sectionLinks = [
  { to: '/#hero', label: 'الرئيسية' },
  { to: '/#problem', label: 'لماذا حساباتي بلس؟' },
  { to: '/#features', label: 'الميزات' },
  { to: '/#how', label: 'كيف يعمل؟' },
  { to: '/#gallery', label: 'معاينة التطبيق' },
  { to: '/#support', label: 'الدعم الفني' },
];

const linkBase =
  'text-sm font-medium text-slate-600 transition-colors hover:text-teal-800';
const navActive =
  'text-teal-800 font-semibold underline underline-offset-4 decoration-teal-600/40';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-1 py-3  ">
        <Link to="/" className="flex shrink-0 items-center gap-2 rounded-lg px-1 py-1 transition hover:opacity-90">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-sm font-bold text-white shadow-sm shadow-teal-700/25">
            ح+
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">حساباتي بلس</span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-7" aria-label="التنقل الرئيسي">
          {sectionLinks.map((l) => (
            <Link key={l.to} to={l.to} className={linkBase}>
              {l.label}
            </Link>
          ))}
          <NavLink
            to="/privacy"
            className={({ isActive }) => (isActive ? `${linkBase} ${navActive}` : linkBase)}
          >
            سياسة الخصوصية
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/#cta"
            className="hidden rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-teal-700/25 transition hover:bg-teal-800 md:inline-flex"
          >
            حمّل التطبيق
          </Link>
          <button
            type="button"
            className="inline-flex rounded-xl border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-teal-300 hover:text-teal-900 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-3" aria-label="التنقل للجوال">
              {sectionLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-900"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <NavLink
                to="/privacy"
                className={({ isActive }) =>
                  [
                    'rounded-lg px-3 py-2.5 text-sm font-medium transition hover:bg-teal-50 hover:text-teal-900',
                    isActive ? 'bg-teal-50 text-teal-900 font-semibold' : 'text-slate-700',
                  ].join(' ')
                }
                onClick={() => setOpen(false)}
              >
                سياسة الخصوصية
              </NavLink>
              <Link
                to="/#cta"
                className="mt-1 rounded-xl bg-teal-700 px-3 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                حمّل التطبيق
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
