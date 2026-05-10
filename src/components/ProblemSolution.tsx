import { Reveal } from './Reveal';

export function ProblemSolution() {
  return (
    <section id="problem" className="border-y border-slate-200/80 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold text-teal-700">الواقع اليومي</p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            من الفوضى إلى صورة أوضح
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            كثير من أصحاب المحلات يعتمدون على دفاتر متفرقة وجداول لا تلتقي. النتيجة؟ صعوبة في معرفة
            كيف يتحرك المال فعلياً مقابل ما تسجّله يدوياً.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <Reveal delay={0.06}>
            <article className="rounded-2xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg font-bold text-slate-900">بدون تنظيم موحّد</h3>
              <ul className="mt-5 space-y-4 text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                  تشتيت بين ورق، رسائل، وملفات لا تراجع نفسها.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                  صعوبة مقارنة ما يحدث في البنك مع ما سجّلته في اليوم.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                  وقت أطول لتجميع الصورة قبل اتخاذ أي قرار بسيط.
                </li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-8 shadow-sm shadow-teal-900/5 transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg font-bold text-teal-900">مع حساباتي بلس</h3>
              <ul className="mt-5 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                  تسجيل يومي للمبيعات والمصاريف والديون في مسار واحد.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                  رفع كشف البنك وربط الحركة لتلمس الفروقات بوضوح أكبر.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                  ملخصات عامة تساعدك تراجع الوضع دون تعقيد إضافي.
                </li>
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
