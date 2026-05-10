import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const items = [
  {
    title: 'تسجيل المبيعات اليومية',
    desc: 'دوّن ما يحدث في المحل يوماً بيوم ليكون عندك مرجع واضح.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    ),
  },
  {
    title: 'إدارة المصاريف',
    desc: 'تابع الخروج النقدي والمصاريف المتكررة بجانب إيراداتك.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'متابعة الديون',
    desc: 'لا تفقد التفاصيل: سجّل المستحقات والمتبقي بطريقة مرتبة.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
  {
    title: 'رفع كشف البنك Excel / CSV',
    desc: 'استورد الحركة البنكية من ملف بدلاً من إعادة كتابة كل سطر.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    ),
  },
  {
    title: 'ربط البيانات ومقارنة الحركة البنكية',
    desc: 'اربط بين مسارك اليومي والحركة في الكشف لتتابع التطابق والفروقات.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
  },
  {
    title: 'ملخصات وتقارير عامة',
    desc: 'اطّلع على ملخصات تساعدك تراجع الوضع دون الدخول في تفاصيل ثقيلة.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="bg-[#f4f7fb] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold text-teal-700">كل ما تحتاجه لليومية</p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            ميزات عملية بلا مبالغة
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            أدوات تلامس واقع المحل: تسجيل، تنظيم، ثم ربط مع كشف البنك عندما تحتاج توضيحاً أكبر.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition hover:border-teal-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100 transition group-hover:bg-teal-100">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
