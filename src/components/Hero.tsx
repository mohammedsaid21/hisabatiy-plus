import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PhoneMockup } from './PhoneMockup';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(14,116,144,0.12),_transparent_50%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-teal-900 shadow-sm backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            للمحلات والأعمال الصغيرة
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl"
          >
            تابع مبيعاتك ومصاريفك وديونك اليومية من{' '}
            <span className="text-teal-700">مكان واحد</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            نظّم دفتر يومك، ارفع كشف البنك، واضبط الصورة المالية عندما تكون البيانات مرتبطة
            وبإمكانك مقارنة الحركة البنكية بسهولة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/#cta"
              className="inline-flex rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/25 transition hover:-translate-y-0.5 hover:bg-teal-800"
            >
              ابدأ الآن
            </Link>
            <Link
              to="/#cta"
              className="inline-flex rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:text-teal-900"
            >
              تحميل التطبيق
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-8 text-sm text-slate-500"
          >
            بدون تعقيد تقني — تركيز على ما يهمك يومياً في المحل.
          </motion.p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-teal-400/10 blur-3xl" />
            <PhoneMockup src="/screenshots/shot-1.svg" alt="معاينة شاشة حساباتي بلس — استبدل الصورة لاحقاً" />
          </div>
        </div>
      </div>
    </section>
  );
}
