import { useEffect } from 'react';
import { Reveal } from '../components/Reveal';

export function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#f4f7fb] pb-24 pt-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <article className="rounded-2xl border border-slate-200/90 bg-white p-8 text-slate-600 shadow-sm md:p-10 lg:p-12 [&>p]:leading-relaxed">
            <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
              وثيقة رسمية
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              سياسة الخصوصية — حساباتي بلس
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              تاريخ الإنشاء: 2024/03/11
              <br />
              آخر تحديث: 2026/04/26
            </p>

            <SectionTitle className="mt-8">1. المقدمة</SectionTitle>
            <p>مرحبًا بك في تطبيق حساباتي بلس.</p>
            <p>باستخدامك لهذا التطبيق، فإنك تقر وتوافق على سياسة الخصوصية هذه.</p>

            <SectionTitle>2. من نحن</SectionTitle>
            <p>تطبيق حساباتي بلس هو تطبيق لإدارة الحسابات والمعاملات المالية.</p>
            <p>
              <strong>الجهة المطوّرة:</strong> Mohammed Said
            </p>
            <p>
              للتواصل معنا:{' '}
              <a href="mailto:accounts@sticky.onl" className="font-semibold text-teal-700 underline-offset-2 hover:underline">
                accounts@sticky.onl
              </a>
            </p>

            <SectionTitle>3. البيانات التي نجمعها</SectionTitle>
            <p>نقوم بجمع البيانات التالية فقط لتقديم وتحسين الخدمة:</p>
            <SubHeading>أ) بيانات الحساب</SubHeading>
            <Bullets items={['البريد الإلكتروني عند التسجيل', 'معرف المستخدم داخل النظام']} />
            <SubHeading>ب) البيانات التي تدخلها بنفسك</SubHeading>
            <Bullets
              items={[
                'الأسماء',
                'أرقام الهواتف',
                'المبالغ المالية',
                'المعاملات والتواريخ',
                'الملاحظات',
                'الملفات التي تقوم برفعها (مثل ملفات Excel)',
              ]}
            />
            <SubHeading>ج) بيانات الجهاز (بشكل محدود)</SubHeading>
            <Bullets items={['نوع الجهاز', 'نظام التشغيل']} />
            <SubHeading>د) سجلات تقنية</SubHeading>
            <Bullets items={['معلومات عن الأخطاء أو الأعطال (إن وجدت) بهدف تحسين الأداء']} />

            <SectionTitle>4. كيف نستخدم البيانات</SectionTitle>
            <p>نستخدم البيانات من أجل:</p>
            <Bullets
              items={[
                'تشغيل التطبيق وإدارة الحسابات والمعاملات',
                'مزامنة البيانات بين أجهزتك',
                'تحسين أداء التطبيق',
                'قد تتضمن البيانات معلومات مالية تقوم بإدخالها، ويتم استخدامها فقط لعرضها وإدارتها داخل التطبيق',
                'تقديم الدعم الفني عند التواصل معنا',
                'الامتثال للمتطلبات القانونية عند الحاجة',
              ]}
            />

            <SectionTitle>5. تخزين البيانات</SectionTitle>
            <Bullets
              items={[
                'يتم تخزين بعض البيانات محليًا على جهازك',
                'كما يتم تخزين البيانات على خوادم آمنة عبر مزود خدمة خارجي (مثل Supabase) لتوفير المزامنة والنسخ الاحتياطي',
              ]}
            />

            <SectionTitle>6. مشاركة البيانات مع أطراف ثالثة</SectionTitle>
            <p>نحن لا نبيع بيانات المستخدمين لأي طرف ثالث لأغراض إعلانية.</p>
            <p>
              قد تتم معالجة البيانات عبر مزودي خدمات خارجيين (مثل Supabase) والذين يعملون وفق سياساتهم الخاصة.
            </p>

            <SectionTitle>7. مدة الاحتفاظ بالبيانات</SectionTitle>
            <Bullets
              items={[
                'نحتفظ بالبيانات طالما حسابك نشط',
                'عند حذف الحساب، يتم حذف البيانات المرتبطة به نهائيًا من أنظمتنا خلال فترة زمنية معقولة، ما لم يكن هناك التزام قانوني بالاحتفاظ بها',
              ]}
            />

            <SectionTitle>8. الأمان</SectionTitle>
            <p>نستخدم إجراءات أمان معقولة لحماية بياناتك، مثل:</p>
            <Bullets items={['يتم نقل البيانات عبر اتصال آمن (HTTPS) عند توفره', 'تقييد الوصول إلى البيانات']} />
            <p>ومع ذلك، لا يمكن ضمان أمان 100% لأي نظام.</p>

            <SectionTitle>9. حقوق المستخدم</SectionTitle>
            <p>يمكنك:</p>
            <Bullets
              items={[
                'طلب الوصول إلى بياناتك',
                'طلب تعديل أو حذف بياناتك',
                'سحب الموافقة على معالجة بيانات معينة (عند الإمكان)',
              ]}
            />
            <p>
              لأي طلب، يرجى التواصل عبر:{' '}
              <a href="mailto:accounts@sticky.onl" className="font-semibold text-teal-700 underline-offset-2 hover:underline">
                accounts@sticky.onl
              </a>
            </p>

            <SectionTitle>10. حذف الحساب من داخل التطبيق</SectionTitle>
            <p>يمكنك حذف حسابك مباشرة من داخل التطبيق عبر:</p>
            <Bullets items={['الإعدادات', 'حذف الحساب', 'تأكيد عملية الحذف']} />
            <p>
              عند تنفيذ الحذف، يتم حذف بيانات الحساب المرتبطة بتطبيق حساباتي بلس من أنظمتنا وتسجيل خروجك من التطبيق.
            </p>

            <SectionTitle>11. الأطفال</SectionTitle>
            <p>هذا التطبيق غير موجه للأشخاص دون 18 عامًا، ولا نقوم بجمع بيانات منهم بشكل متعمد.</p>

            <SectionTitle>12. التغييرات على السياسة</SectionTitle>
            <p>قد نقوم بتحديث هذه السياسة من وقت لآخر.</p>
            <p>سيتم إشعار المستخدمين عبر التطبيق أو من خلال تحديث تاريخ «آخر تحديث».</p>

            <SectionTitle>13. التواصل</SectionTitle>
            <p>
              إذا كان لديك أي استفسار بخصوص هذه السياسة، يمكنك التواصل معنا عبر:{' '}
              <a href="mailto:accounts@sticky.onl" className="font-semibold text-teal-700 underline-offset-2 hover:underline">
                accounts@sticky.onl
              </a>
            </p>

            <p className="mt-10 border-t border-dashed border-slate-200 pt-6 text-sm text-slate-500">
              هذه الصفحة مخصصة للنشر كرابط رسمي لسياسة الخصوصية في المتاجر.
            </p>
          </article>
        </Reveal>
      </div>
    </main>
  );
}

function SectionTitle({ children, className }: { children: string; className?: string }) {
  return (
    <h2
      className={`border-b border-slate-200 pb-2 text-lg font-bold text-teal-800 md:text-xl ${className ?? 'mt-10'}`}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: string }) {
  return <p className="mt-6 font-bold text-slate-900">{children}</p>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pr-5 text-slate-600 marker:text-teal-600">
      {items.map((item) => (
        <li key={item} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}
