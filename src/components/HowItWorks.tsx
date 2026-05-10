import { Reveal } from './Reveal';

const steps = [
  {
    step: '١',
    title: 'سجّل بياناتك اليومية',
    desc: 'دوّن المبيعات والمصاريف والديون ضمن مسار واحد يسهّل المراجعة.',
  },
  {
    step: '٢',
    title: 'ارفع كشف البنك',
    desc: 'حمّل ملف Excel أو CSV لاستيراد المعاملات وتقليل الإدخال اليدوي.',
  },
  {
    step: '٣',
    title: 'راقب التطابق والفروقات',
    desc: 'تابع كيف تلتقي بياناتك مع الحركة البنكية لتكوّن صورة أوضح عن اليوم.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold text-teal-700">ثلاث خطوات بسيطة</p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            كيف يعمل؟
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            بدون تعقيد — ابدأ من اليوم، ثم أضف الكشف عندما يكون جاهزاً، وراجع النتيجة بهدوء.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-16 grid gap-10 lg:grid-cols-3">
          <div className="pointer-events-none absolute inset-x-8 top-10 hidden h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent lg:block" />

          {steps.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i}>
              <div className="relative rounded-2xl border border-slate-200 bg-[#f4f7fb] p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-700 text-lg font-bold text-white shadow-md shadow-teal-700/25">
                  {s.step}
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
