import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

const faqs = [
  {
    question: 'كيف أبدأ باستخدام حساباتي بلس؟',
    answer: 'حمّل التطبيق من App Store أو Google Play، أنشئ حسابك بخطوة واحدة، وابدأ بتسجيل مبيعاتك ومصاريفك اليومية مباشرة — بدون إعدادات معقدة.',
  },
  {
    question: 'هل التطبيق مجاني؟',
    answer: 'نعم، التطبيق مجاني بالكامل مع جميع الميزات الأساسية. يمكنك تسجيل المبيعات، المصاريف، والديون بدون أي رسوم.',
  },
  {
    question: 'كيف أرفع كشف البنك؟',
    answer: 'من داخل التطبيق اضغط على "كشف البنك" ثم اختر رفع ملف PDF أو CSV. التطبيق يقرأ البيانات تلقائياً ويعرضها لك بشكل منظم مع إمكانية البحث والمقارنة.',
  },
  {
    question: 'هل بياناتي آمنة؟',
    answer: 'بالطبع. جميع البيانات مشفرة ومخزنة على سيرفرات آمنة. نستخدم نفس معايير الأمان المستخدمة في الأنظمة البنكية.',
  },
  {
    question: 'هل يمكنني استخدام التطبيق بدون إنترنت؟',
    answer: 'نعم، يمكنك تسجيل العمليات offline وسيتم مزامنتها تلقائياً عند عودة الاتصال بالإنترنت.',
  },
  {
    question: 'كيف أتواصل مع الدعم الفني؟',
    answer: 'يمكنك التواصل معنا عبر واتساب أو البريد الإلكتروني من قسم الدعم الفني في الأسفل. فريقنا متواجد من الأحد للخميس 9 صباحاً - 9 مساءً.',
  },
];

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.05}>
      <div className="border-b border-slate-200/80 last:border-b-0">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between gap-4 py-5 text-right transition hover:text-teal-700"
        >
          <span className="text-base font-semibold text-slate-800">{question}</span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="shrink-0"
          >
            <ChevronDown className="h-5 w-5 text-slate-400" />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-sm leading-relaxed text-slate-600">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="border-t border-slate-200/80 bg-white py-20 sm:py-24" dir="rtl">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold text-teal-700">أسئلة شائعة</p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            الأسئلة السريعة
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            إجابات على أكثر الأسئلة اللي ممكن تخطر على بالك
          </p>
        </Reveal>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
