import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const concepts = [
  {
    id: 1,
    title: 'متتبع تسوية الديون',
    titleEn: 'Debt Settlement Tracker',
    desc: 'تطبيق مركّز لتتبع من يدين لك (والعكس). بطاقات مرئية لكل شخص، جدول زمني لسجل الدفعات، وتكامل مع تذكيرات واتساب.',
    color: 'emerald',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    preview: (
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold">أ</div>
            <div>
              <p className="font-semibold text-slate-800">أحمد محمد</p>
              <p className="text-xs text-slate-500">آخر دفعة: 15 يناير</p>
            </div>
          </div>
          <div className="text-left">
            <p className="font-bold text-emerald-600">+1,500 ر.س</p>
            <p className="text-xs text-slate-500">مستحق لك</p>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">س</div>
            <div>
              <p className="font-semibold text-slate-800">سارة علي</p>
              <p className="text-xs text-slate-500">آخر دفعة: 3 فبراير</p>
            </div>
          </div>
          <div className="text-left">
            <p className="font-bold text-red-500">-800 ر.س</p>
            <p className="text-xs text-slate-500">مستحق عليك</p>
          </div>
        </div>
        <button className="w-full rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white">
          إرسال تذكير واتساب
        </button>
      </div>
    ),
  },
  {
    id: 2,
    title: 'خزنة الإيصالات الذكية',
    titleEn: 'Smart Receipt Vault',
    desc: 'اسحب وأفلت الإيصالات والفواتير، استخراج المبالغ تلقائياً باستخدام OCR، تصنيف المصاريف بصرياً. مثالي لأصحاب الأعمال الصغيرة.',
    color: 'amber',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    preview: (
      <div className="space-y-3">
        <div className="rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 p-6 text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
            <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <p className="text-sm font-medium text-amber-700">اسحب الإيصال هنا</p>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg bg-white p-3 shadow-sm">
            <p className="text-xs text-slate-500">اليوم</p>
            <p className="text-lg font-bold text-slate-800">12 إيصال</p>
          </div>
          <div className="flex-1 rounded-lg bg-white p-3 shadow-sm">
            <p className="text-xs text-slate-500">المجموع</p>
            <p className="text-lg font-bold text-amber-600">4,230 ر.س</p>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">طعام</span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">نقل</span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">مستلزمات</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'مركز قيادة ميزانية العائلة',
    titleEn: 'Family Budget Command Center',
    desc: 'لوحة تحكم تعاونية حيث يمكن لأفراد العائلة تسجيل المصاريف، تحديد أهداف ادخار مشتركة، ورؤية استهلاك الميزانية الفوري مع حلقات تقدم مرئية.',
    color: 'violet',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    preview: (
      <div className="space-y-3">
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-semibold text-slate-800">ميزانية الشهر</p>
            <p className="text-sm text-violet-600">15,000 ر.س</p>
          </div>
          <div className="relative h-3 overflow-hidden rounded-full bg-slate-100">
            <div className="absolute inset-y-0 right-0 w-[65%] rounded-full bg-gradient-to-l from-violet-500 to-violet-400" />
          </div>
          <p className="mt-2 text-xs text-slate-500">تم إنفاق 65% - متبقي 5,250 ر.س</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-white p-2 text-center shadow-sm">
            <div className="mx-auto mb-1 h-8 w-8 rounded-full bg-blue-100" />
            <p className="text-xs text-slate-600">أحمد</p>
            <p className="text-xs font-bold text-blue-600">2,100</p>
          </div>
          <div className="rounded-lg bg-white p-2 text-center shadow-sm">
            <div className="mx-auto mb-1 h-8 w-8 rounded-full bg-pink-100" />
            <p className="text-xs text-slate-600">سارة</p>
            <p className="text-xs font-bold text-pink-600">3,400</p>
          </div>
          <div className="rounded-lg bg-white p-2 text-center shadow-sm">
            <div className="mx-auto mb-1 h-8 w-8 rounded-full bg-green-100" />
            <p className="text-xs text-slate-600">خالد</p>
            <p className="text-xs font-bold text-green-600">1,250</p>
          </div>
        </div>
        <div className="rounded-xl bg-violet-50 p-3">
          <p className="text-xs font-medium text-violet-700">هدف الادخار: رحلة عائلية</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-violet-200">
            <div className="h-full w-[40%] rounded-full bg-violet-500" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'مراقب الاشتراكات',
    titleEn: 'Subscription Expense Monitor',
    desc: 'تتبع جميع المدفوعات المتكررة (نتفليكس، الجيم، أدوات SaaS) في لوحة واحدة. يعرض معدل الحرق الشهري، التجديدات القادمة، وتنبيهات للاشتراكات المنسية.',
    color: 'rose',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    preview: (
      <div className="space-y-3">
        <div className="rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 p-4 text-white">
          <p className="text-sm opacity-90">الإنفاق الشهري</p>
          <p className="text-3xl font-bold">847 ر.س</p>
          <p className="mt-1 text-xs opacity-75">8 اشتراكات نشطة</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-xs font-bold text-white">N</div>
              <span className="font-medium text-slate-700">نتفليكس</span>
            </div>
            <span className="font-semibold text-slate-800">60 ر.س</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-xs font-bold text-white">S</div>
              <span className="font-medium text-slate-700">سبوتيفاي</span>
            </div>
            <span className="font-semibold text-slate-800">27 ر.س</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-amber-50 p-3">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-amber-700">تجديد الجيم غداً</span>
            </div>
            <span className="font-semibold text-amber-600">150 ر.س</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'الجدول الزمني للتدفق النقدي',
    titleEn: 'Cash Flow Timeline',
    desc: 'عرض جدول زمني أفقي يُظهر الدخل مقابل المصاريف عبر الزمن. رصيد تنبؤي يُظهر "سيكون لديك X بنهاية الشهر" بناءً على الأنماط المتكررة.',
    color: 'cyan',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    preview: (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">الرصيد المتوقع</p>
            <p className="text-2xl font-bold text-cyan-600">12,450 ر.س</p>
          </div>
          <div className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-700">
            نهاية الشهر
          </div>
        </div>
        <div className="relative h-24 rounded-xl bg-white p-3 shadow-sm">
          <svg className="h-full w-full" viewBox="0 0 200 60">
            <path d="M0,40 Q25,35 50,30 T100,25 T150,20 T200,15" fill="none" stroke="#22d3ee" strokeWidth="2" />
            <path d="M0,45 Q25,48 50,50 T100,45 T150,48 T200,42" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4" />
            <circle cx="100" cy="25" r="4" fill="#22d3ee" />
            <circle cx="100" cy="45" r="4" fill="#f43f5e" />
          </svg>
          <div className="absolute bottom-1 left-3 flex gap-4 text-xs">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-cyan-400" /> دخل
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-rose-400" /> مصاريف
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1 text-center text-xs">
          <div className="rounded-lg bg-slate-100 p-2">
            <p className="text-slate-500">أسبوع 1</p>
            <p className="font-bold text-cyan-600">+3,200</p>
          </div>
          <div className="rounded-lg bg-slate-100 p-2">
            <p className="text-slate-500">أسبوع 2</p>
            <p className="font-bold text-cyan-600">+2,800</p>
          </div>
          <div className="rounded-lg bg-slate-100 p-2">
            <p className="text-slate-500">أسبوع 3</p>
            <p className="font-bold text-rose-500">-1,500</p>
          </div>
          <div className="rounded-lg bg-cyan-100 p-2">
            <p className="text-cyan-700">أسبوع 4</p>
            <p className="font-bold text-cyan-700">+4,100</p>
          </div>
        </div>
      </div>
    ),
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', iconBg: 'bg-emerald-100' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', iconBg: 'bg-amber-100' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', iconBg: 'bg-violet-100' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', iconBg: 'bg-rose-100' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', iconBg: 'bg-cyan-100' },
};

export function ConceptsPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      {/* Header */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.15),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-teal-800 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            5 أفكار بديلة
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            أفكار تطبيقات مالية بديلة
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-slate-600"
          >
            بناءً على فكرة حساباتي بلس، إليك 5 مفاهيم قابلة للبناء تحافظ على نفس الهدف الأساسي مع تقديم طرق جديدة
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 transition hover:text-teal-900"
            >
              <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              العودة للصفحة الرئيسية
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {concepts.map((concept, index) => {
              const colors = colorClasses[concept.color];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={concept.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${isEven ? '' : 'lg:[direction:rtl]'}`}
                >
                  {/* Content */}
                  <div className={`space-y-4 ${isEven ? '' : 'lg:[direction:rtl]'}`}>
                    <div className={`inline-flex items-center gap-3 rounded-2xl ${colors.iconBg} p-3 ${colors.text}`}>
                      {concept.icon}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-full ${colors.bg} ${colors.text} text-sm font-bold`}>
                        {concept.id}
                      </span>
                      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{concept.title}</h2>
                    </div>
                    <p className="text-sm font-medium text-slate-500">{concept.titleEn}</p>
                    <p className="text-lg leading-relaxed text-slate-600">{concept.desc}</p>
                    <button className={`mt-2 inline-flex items-center gap-2 rounded-xl ${colors.bg} ${colors.text} border ${colors.border} px-5 py-2.5 text-sm font-semibold transition hover:opacity-80`}>
                      ابني هذا الآن
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Preview */}
                  <div className={`${isEven ? '' : 'lg:[direction:rtl]'}`}>
                    <div className={`rounded-3xl border ${colors.border} ${colors.bg} p-6 shadow-lg`}>
                      <div className="mx-auto max-w-xs">
                        {concept.preview}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            هل أعجبتك إحدى الأفكار؟
          </h2>
          <p className="mt-3 text-teal-100">
            أخبرني أي مفهوم تريد بناءه وسأقوم بتحويله إلى تطبيق ويب كامل
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-teal-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-50"
            >
              ارجع للتصميم الأصلي
            </Link>
            <button className="inline-flex rounded-xl border border-teal-400 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600">
              اختر مفهوماً للبناء
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
