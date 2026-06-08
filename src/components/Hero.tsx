import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';

const floatingFeatures = [
  { icon: TrendingUp, label: 'رفع Excel / CSV', color: 'from-emerald-500 to-teal-500' },
  { icon: Shield, label: 'بحث في الحركات', color: 'from-blue-500 to-cyan-500' },
  { icon: Zap, label: 'رفع كشف البنك', color: 'from-amber-500 to-orange-500' },
];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-20" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/60 via-white to-white" />

      <motion.div
        className="absolute left-[10%] top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-[5%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-cyan-400/15 to-teal-400/10 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,128,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,128,128,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-2 text-center lg:text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800"
            >
              <Sparkles className="h-4 w-4" />
              <span>للمحلات والأعمال الصغيرة</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="block">تابع مبيعاتك</span>
              <span className="block bg-gradient-to-l from-teal-600 to-teal-800 bg-clip-text text-transparent">ومصاريفك وديونك</span>
              <span className="block">اليومية من مكان واحد</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0"
            >
              نظّم مبيعاتك ومصاريفك اليومية وارفع كشف البنك للبحث داخل
              العمليات، متابعة المدفوعات، ومعرفة الفروقات بسهولة من مكان واحد.
            </motion.p>

            {/* App Store + Google Play Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-4 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 rounded-xl bg-slate-900 px-6 py-3.5 text-white transition-colors hover:bg-slate-800"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-right">
                  <p className="text-[10px] opacity-70">متوفر على</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 rounded-xl bg-slate-900 px-6 py-3.5 text-white transition-colors hover:bg-slate-800"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-right">
                  <p className="text-[10px] opacity-70">متوفر على</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </motion.a>
            </motion.div>

            {/* Discover more link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/#features"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition hover:text-teal-900 hover:underline"
              >
                تعرّف على باقي المميزات
                <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Phone Mockup with real screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="relative order-1 flex justify-center lg:order-2"
          >
            <div className="relative">
              {/* Floating feature badges */}
              {floatingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.15 }}
                  className={`absolute z-20 ${
                    index === 0
                      ? '-top-4 -left-4 lg:-left-16'
                      : index === 1
                        ? 'top-1/3 -right-4 lg:-right-20'
                        : 'bottom-1/4 -left-4 lg:-left-20'
                  }`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 p-3 shadow-xl backdrop-blur"
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="pl-2 text-sm font-medium text-slate-800">{feature.label}</span>
                  </motion.div>
                </motion.div>
              ))}

              {/* Main phone with real screenshot */}
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <div className="absolute inset-0 scale-90 rounded-[3rem] bg-gradient-to-b from-teal-400/30 to-cyan-400/30 opacity-50 blur-2xl" />

                  <div className="relative w-[280px] rounded-[2.35rem] bg-gradient-to-b from-slate-800 to-slate-950 p-[10px] shadow-2xl ring-1 ring-white/15" style={{ aspectRatio: '9 / 19.5' }}>
                    <div className="relative h-full w-full overflow-hidden rounded-[1.85rem] bg-slate-950">
                      <div className="absolute inset-x-1/4 top-2 z-10 h-6 rounded-full bg-black/35 backdrop-blur-sm" />
                      <img
                        src="/screenshots/screen-home.jpg"
                        alt="شاشة حساباتي بلس الرئيسية"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Secondary phone - rotated */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 0 }}
                animate={{ opacity: 0.6, x: 0, rotate: -12 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="absolute -right-16 top-16 z-0 hidden lg:block"
              >
                <div className="w-[200px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-slate-800/80 to-slate-900/60 p-[2px] shadow-xl" style={{ aspectRatio: '9 / 19.5' }}>
                  <div className="h-full w-full overflow-hidden rounded-[1.8rem] bg-slate-950 opacity-80">
                    <img
                      src="/screenshots/screen-expenses.jpg"
                      alt="شاشة المصاريف"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-slate-400/30 p-2"
        >
          <motion.div
            animate={{ height: [4, 12, 4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 rounded-full bg-slate-400/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
