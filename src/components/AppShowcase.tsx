import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Wallet, ShoppingCart, Users, Settings, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

const screens = [
  { id: 'home', label: 'الرئيسية', icon: Home, src: '/screenshots/screen-home.jpg' },
  { id: 'expenses', label: 'المصاريف', icon: Wallet, src: '/screenshots/screen-expenses.jpg' },
  { id: 'quick', label: 'إضافة سريعة', icon: ShoppingCart, src: '/screenshots/screen-add-payment.jpg' },
  { id: 'debts', label: 'الديون', icon: Users, src: '/screenshots/screen-debts.jpg' },
  { id: 'settings', label: 'الإعدادات', icon: Settings, src: '/screenshots/screen-settings.jpg' },
];

const floatingFeatures = [
  { icon: TrendingUp, label: 'تقارير ذكية', position: 'top-[15%] right-[8%]', delay: 0 },
  { icon: Shield, label: 'حماية متقدمة', position: 'top-[35%] left-[5%]', delay: 0.2 },
  { icon: Zap, label: 'سرعة فائقة', position: 'bottom-[30%] right-[5%]', delay: 0.4 },
  { icon: Sparkles, label: 'واجهة سلسة', position: 'bottom-[15%] left-[8%]', delay: 0.6 },
];

function PhoneFrame({
  src,
  w,
  h,
  rounded,
  innerRounded,
  opacity = 1,
  className = '',
}: {
  src: string;
  w: string;
  h: string;
  rounded: string;
  innerRounded: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <div className={`relative ${w} ${h} ${rounded} bg-gradient-to-b from-slate-700 to-slate-900 p-[3px] shadow-2xl shadow-black/50 ${className}`} style={{ opacity }}>
      <div className={`relative h-full w-full overflow-hidden ${innerRounded} bg-[#0a1628]`}>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-20 h-6 rounded-b-xl bg-slate-800" />
        <img
          src={src}
          alt="لقطة شاشة"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export function AppShowcase() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [autoRotate, setAutoRotate] = useState(true);
  const currentScreen = screens.find((s) => s.id === activeScreen) || screens[0];

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveScreen((prev) => {
        const idx = screens.findIndex((s) => s.id === prev);
        return screens[(idx + 1) % screens.length].id;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-28 sm:py-32"
      style={{
        background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 25%, #115e59 50%, #134e4a 75%, #0d9488 100%)',
      }}
      onMouseEnter={() => setAutoRotate(false)}
      onMouseLeave={() => setAutoRotate(true)}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-white/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-400/20 blur-[80px]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/20"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-5 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            معاينة من التطبيق
          </span>
          <h2 className="mt-4 mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            شاهد الشكل العام للواجهة
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            لقطات حقيقية من التطبيق، مع تبديل الشاشات لإلقاء نظرة سريعة على التجربة.
          </p>
        </Reveal>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {screens.map((screen, index) => (
            <motion.button
              key={screen.id}
              onClick={() => { setActiveScreen(screen.id); setAutoRotate(false); }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeScreen === screen.id
                  ? 'bg-white text-teal-700 shadow-xl shadow-white/25'
                  : 'border border-white/10 bg-white/10 text-white backdrop-blur-md hover:bg-white/20'
              }`}
            >
              <screen.icon className="h-4 w-4" />
              {screen.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Phone showcase */}
        <div className="relative mt-16 flex min-h-[600px] items-center justify-center">
          {/* Floating feature badges */}
          {floatingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + feature.delay, type: 'spring' }}
              className={`absolute ${feature.position} hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 shadow-xl backdrop-blur-xl xl:flex z-20`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <feature.icon className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-white">{feature.label}</span>
            </motion.div>
          ))}

          {/* Side phone - left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 0.5, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-[10%] top-1/2 hidden -translate-y-1/2 lg:block"
          >
            <motion.div
              animate={{ y: [0, 15, 0], rotateZ: [-8, -6, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-b from-teal-400/30 to-cyan-400/20 opacity-60 blur-xl" />
              <PhoneFrame
                src="/screenshots/screen-debts.jpg"
                w="w-[200px]"
                h="h-[420px]"
                rounded="rounded-[2.5rem]"
                innerRounded="rounded-[2.3rem]"
              />
            </motion.div>
          </motion.div>

          {/* Main phone - center */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative z-10"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Glow */}
              <div className="absolute -inset-8 rounded-[4rem] bg-gradient-to-b from-white/40 via-teal-400/30 to-cyan-400/20 opacity-70 blur-2xl" />
              <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-b from-white/20 to-transparent blur-xl" />

              <div className="relative h-[660px] w-[320px] rounded-[3.5rem] bg-gradient-to-b from-slate-600 via-slate-800 to-slate-900 p-[4px] shadow-2xl shadow-black/60">
                <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-br from-white/30 via-transparent to-transparent" />

                <div className="relative h-full w-full overflow-hidden rounded-[3.3rem] bg-[#0a1628]">
                  {/* Dynamic Island */}
                  <div className="absolute left-1/2 top-3 z-20 flex h-8 w-28 -translate-x-1/2 items-center justify-center rounded-full bg-black">
                    <div className="mr-8 h-2 w-2 rounded-full bg-slate-700" />
                  </div>

                  {/* Status bar */}
                  <div className="absolute left-0 right-0 top-3 z-20 flex items-center justify-between px-8 text-[11px] font-medium text-white/70">
                    <span>9:41</span>
                    <span>100%</span>
                  </div>

                  {/* Screen content with transition */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScreen}
                      initial={{ opacity: 0, x: 30, scale: 0.98 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -30, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="h-full w-full"
                    >
                      <img
                        src={currentScreen.src}
                        alt={currentScreen.label}
                        className="h-full w-full object-cover object-top"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Bottom navigation */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex h-16 items-center justify-around rounded-2xl border border-white/10 bg-white/10 px-3 backdrop-blur-xl">
                    {screens.map((screen) => (
                      <motion.button
                        key={screen.id}
                        onClick={() => { setActiveScreen(screen.id); setAutoRotate(false); }}
                        whileTap={{ scale: 0.9 }}
                        className={`relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                          activeScreen === screen.id
                            ? 'bg-white text-teal-700 shadow-lg'
                            : 'text-white/50 hover:bg-white/10 hover:text-white/80'
                        }`}
                      >
                        {activeScreen === screen.id && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 rounded-xl bg-white"
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        <screen.icon className="relative z-10 h-5 w-5" />
                      </motion.button>
                    ))}
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-1 left-1/2 z-20 h-1 w-32 -translate-x-1/2 rounded-full bg-white/30" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Side phone - right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 0.5, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-[10%] top-1/2 hidden -translate-y-1/2 lg:block"
          >
            <motion.div
              animate={{ y: [0, -15, 0], rotateZ: [8, 6, 8] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-b from-cyan-400/30 to-teal-400/20 opacity-60 blur-xl" />
              <PhoneFrame
                src="/screenshots/screen-add-payment.jpg"
                w="w-[200px]"
                h="h-[420px]"
                rounded="rounded-[2.5rem]"
                innerRounded="rounded-[2.3rem]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Dots indicator */}
        <div className="mt-12 flex justify-center gap-2">
          {screens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => { setActiveScreen(screen.id); setAutoRotate(false); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeScreen === screen.id ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
