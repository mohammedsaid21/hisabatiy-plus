import { motion } from 'framer-motion';
import { MessageCircle, Mail, FileText, ArrowLeft } from 'lucide-react';
import { Reveal } from './Reveal';

const channels = [
  {
    icon: MessageCircle,
    title: 'واتساب',
    description: 'تواصل معنا مباشرة عبر واتساب للحصول على دعم سريع',
    action: 'تواصل الآن',
    href: 'https://wa.me/966500000000',
    color: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50',
    border: 'border-green-200/80',
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    description: 'أرسل لنا استفسارك وسنرد عليك خلال 24 ساعة',
    action: 'أرسل إيميل',
    href: 'mailto:support@hisabatiy.com',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200/80',
  },
  {
    icon: FileText,
    title: 'ملاحظات واقتراحات',
    description: 'شاركنا أفكارك واقتراحاتك لتحسين التطبيق',
    action: 'أرسل ملاحظة',
    href: '#',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200/80',
  },
];

export function SupportSection() {
  return (
    <section id="support" className="relative border-t border-slate-200/80 bg-[#f4f7fb] py-20 sm:py-24" dir="rtl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold text-teal-700">الدعم الفني</p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            نحن هنا لمساعدتك
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            واجهت مشكلة أو عندك استفسار؟ تواصل معنا بأي طريقة تناسبك وفريقنا جاهز يساعدك
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, i) => (
            <Reveal key={channel.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`flex flex-col items-center rounded-2xl border ${channel.border} ${channel.bg} p-8 text-center transition-shadow hover:shadow-lg`}
              >
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${channel.color} shadow-lg`}>
                  <channel.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-slate-900">{channel.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{channel.description}</p>

                <a
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {channel.action}
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-12 rounded-2xl border border-teal-200/60 bg-gradient-to-l from-teal-50 to-cyan-50 p-8 text-center">
            <p className="text-base font-medium text-slate-700">
              ساعات العمل: <span className="font-bold text-teal-700">الأحد — الخميس</span> من 9 صباحاً حتى 9 مساءً
            </p>
            <p className="mt-1 text-sm text-slate-500">نرد على جميع الاستفسارات خلال ساعات العمل</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
