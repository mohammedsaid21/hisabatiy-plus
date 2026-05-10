# حساباتي بلس — Landing Page

صفحة هبوط تسويقية بالعربية (RTL) لمنتج **حساباتي بلس**، مبنية بـ **React + Vite + Tailwind CSS v4** مع حركات خفيفة عبر **Framer Motion**.

المشروع مستقل عن مستودع تطبيق الهاتف؛ ضعه حيث تشاء على جهازك أو الخادم.

## التشغيل محلياً

```bash
cd hasabati-plus-landing
npm install
npm run dev
```

يفتح Vite عادة على `http://localhost:5173`.

## البناء للإنتاج

```bash
npm run build
npm run preview
```

المخرجات في المجلد `dist/`.

## التخصيص السريع

- استبدل الصور التجريبية في `public/screenshots/` (`shot-1.svg` … `shot-4.svg`) بلقطات PNG أو WebP حقيقية، وحدّث المسارات في `src/components/Hero.tsx` و `AppShowcase.tsx` إذا غيّرت الأسماء.
- حدّث روابط المتاجر في `src/components/CTASection.tsx`.
- سياسة الخصوصية داخل التطبيق على المسار **`/privacy`** (`src/pages/PrivacyPage.tsx`) بنفس أسلوب التصميم. ملف `public/privacy.html` يعيد التوجيه إلى `/privacy` للروابط القديمة أو للاستضافة الثابتة البسيطة.

عند النشر على استضافة ثابتة، تأكد أن الطلبات إلى مسارات مثل `/privacy` تُعاد كتابتها إلى `index.html` (SPA fallback) حتى يعمل التوجيه من جانب React Router.

## البنية

- `src/components/` — أقسام الصفحة (Navbar، Hero، الميزات، …).
- `src/index.css` — Tailwind وخط Tajawal من `index.html`.
