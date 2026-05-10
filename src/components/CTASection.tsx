import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

export function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-slate-900 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.22),_transparent_55%)]" />
      <div className="pointer-events-none absolute -start-24 bottom-0 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            جاهز لتنظيم يومك المحاسبي؟
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            حمّل التطبيق من المتجر الذي يناسبك، وابدأ بتسجيل بسيط اليوم — ثم أضف الكشف عندما تحب.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-slate-100"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="currentColor"
                  d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 010-1.43V2.814a1 1 0 011.001-1zM14.502 12.77l2.198 2.198 4.346-2.522c.684-.397 1.002-1.275.614-2.116-.388-.842-1.27-1.21-2.054-.818l-5.104 2.258zm-.096-1.537L17.86 9.22l4.917-2.166c.784-.344 1.502-.034 1.844.676.342.71.152 1.518-.448 1.97l-9.771 5.492zM6.27 22.054l8.072-8.072 2.917 2.917-9.309 5.27c-.695.392-1.52.294-2.095-.28-.575-.575-.673-1.4-.281-2.095z"
                />
              </svg>
              Google Play
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="currentColor"
                  d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.8.03 3.01 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                />
              </svg>
              App Store
            </motion.a>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            الروابط أعلاه للتوضيح فقط — استبدلها بروابط متجرك عند النشر.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
