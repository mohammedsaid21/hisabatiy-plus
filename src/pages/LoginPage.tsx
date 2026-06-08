import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

type View = 'login' | 'forgot';

export function LoginPage() {
  const navigate = useNavigate();
  const [view, setView] = useState<View>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (view === 'forgot') {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/login-ayla`,
      });
      setLoading(false);
      if (error) {
        setMessage({ type: 'error', text: error.message });
      } else {
        setMessage({ type: 'success', text: 'تم إرسال رابط إعادة التعيين إلى بريدك الإلكتروني' });
      }
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      setMessage({ type: 'error', text: error.message });
      return;
    }

    navigate('/users');
  }

  return (
    <section dir="rtl" className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-slate-200/40">
          <div className="mb-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-base font-bold text-white shadow-sm shadow-teal-700/25">
                ح+
              </span>
            </Link>
            <h1 className="mt-4 text-2xl font-bold text-slate-900">
              {view === 'login' ? 'تسجيل الدخول' : 'إعادة تعيين كلمة المرور'}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {view === 'login'
                ? 'أدخل بياناتك للوصول إلى حسابك'
                : 'أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين'}
            </p>
          </div>

          {message && (
            <div
              className={`mb-5 rounded-xl px-4 py-3 text-sm font-medium ${
                message.type === 'error'
                  ? 'bg-red-50 text-red-700 border border-red-100'
                  : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                dir="ltr"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
            </div>

            {view === 'login' && (
              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
                  كلمة المرور
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  dir="ltr"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/25 transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'جارٍ التحميل...' : view === 'login' ? 'دخول' : 'إرسال رابط إعادة التعيين'}
            </button>
          </form>

          <div className="mt-6 space-y-2 text-center text-sm text-slate-500">
            {view === 'login' ? (
              <button
                type="button"
                onClick={() => { setView('forgot'); setMessage(null); }}
                className="text-teal-700 hover:underline"
              >
                نسيت كلمة المرور؟
              </button>
            ) : (
              <button
                type="button"
                onClick={() => { setView('login'); setMessage(null); }}
                className="font-semibold text-teal-700 hover:underline"
              >
                العودة لتسجيل الدخول
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          بالاستمرار، أنت توافق على{' '}
          <Link to="/privacy" className="text-teal-600 hover:underline">
            سياسة الخصوصية
          </Link>
        </p>
      </div>
    </section>
  );
}
