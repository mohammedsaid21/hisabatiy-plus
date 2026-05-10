import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 rounded-lg transition hover:opacity-90">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-sm font-bold text-white">
                ح+
              </span>
              <span className="text-lg font-bold text-slate-900">حساباتي بلس</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              أداة يومية لأصحاب المحلات والأعمال الصغيرة — تنظيم المبيعات والمصاريف والديون مع
              ربط كشف البنك عند الحاجة.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
            <div id="footer-legal">
              <h3 className="text-sm font-bold text-slate-900">الدعم والقانونية</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>
                  <a
                    href="mailto:accounts@sticky.onl"
                    className="transition hover:text-teal-800"
                  >
                    الدعم: accounts@sticky.onl
                  </a>
                </li>
                <li>
                  <Link to="/privacy" className="transition hover:text-teal-800">
                    سياسة الخصوصية
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900">تواصل</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>
                  <Link to="/#cta" className="transition hover:text-teal-800">
                    تحميل التطبيق
                  </Link>
                </li>
                <li>
                  <Link to="/#features" className="transition hover:text-teal-800">
                    الميزات
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-100 pt-8 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-start">
          <p>© {new Date().getFullYear()} حساباتي بلس. جميع الحقوق محفوظة.</p>
          <p className="text-slate-400">الصفحة للعرض التسويقي — عدّل النصوص والروابط حسب إطلاقك.</p>
        </div>
      </div>
    </footer>
  );
}
