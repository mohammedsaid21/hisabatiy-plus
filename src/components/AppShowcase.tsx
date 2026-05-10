import { motion } from 'framer-motion';
import { PhoneMockup } from './PhoneMockup';
import { Reveal } from './Reveal';

const shots = [
  { src: '/screenshots/shot-2.svg', alt: 'معاينة شاشة — الدفتر اليومي (استبدل الصورة)' },
  { src: '/screenshots/shot-3.svg', alt: 'معاينة شاشة — كشف البنك (استبدل الصورة)' },
  { src: '/screenshots/shot-4.svg', alt: 'معاينة شاشة — المقارنة والحركة (استبدل الصورة)' },
];

export function AppShowcase() {
  return (
    <section id="gallery" className="border-y border-slate-200/80 bg-[#f4f7fb] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold text-teal-700">معاينة من التطبيق</p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            شاهد الشكل العام للواجهة
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            صور تجريبية جاهزة للاستبدال لاحقاً بلقطات حقيقية من تطبيقك.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-10 lg:gap-14">
          {shots.map((shot, i) => (
            <motion.div
              key={shot.src}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-48px' }}
              transition={{ duration: 0.55, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[3rem] bg-teal-400/10 blur-2xl" />
              <PhoneMockup src={shot.src} alt={shot.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
