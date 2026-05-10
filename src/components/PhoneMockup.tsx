import { motion } from 'framer-motion';

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
};

export function PhoneMockup({ src, alt, className }: PhoneMockupProps) {
  return (
    <motion.div
      className={`relative mx-auto ${className ?? ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="relative w-[min(272px,78vw)] sm:w-[300px] md:w-[min(312px,32vw)]"
        style={{ aspectRatio: '9 / 19.5' }}
      >
        <div className="absolute inset-0 rounded-[2.35rem] bg-gradient-to-b from-slate-800 to-slate-950 p-[10px] shadow-[0_32px_64px_-12px_rgba(15,118,110,0.35)] ring-1 ring-white/15">
          <div className="relative h-full w-full overflow-hidden rounded-[1.85rem] bg-slate-950">
            <div className="absolute inset-x-1/4 top-2 z-10 h-6 rounded-full bg-black/35 backdrop-blur-sm" />
            <img src={src} alt={alt} className="h-full w-full object-cover object-top" loading="lazy" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
