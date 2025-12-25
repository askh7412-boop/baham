import React, { useState } from 'react';
import { Menu, X, Heart, Users, ShieldCheck, Gift, ArrowLeft, Sun, HandHeart } from 'lucide-react';
import { SectionId, Feature, PricingPlan } from '../types';

// --- Header ---
export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'پروژه‌ها', href: `#${SectionId.FEATURES}` },
    { label: 'حمایت مالی', href: `#${SectionId.PRICING}` },
    { label: 'شفافیت', href: `#${SectionId.AI_DEMO}` },
    { label: 'درباره ما', href: `#${SectionId.TESTIMONIALS}` },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-primary-600 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-gray-800 leading-none">
                باهم
              </span>
              <span className="text-xs text-primary-600 font-bold">
                زیر نظر رامالایف
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a href="#donate" className="hidden md:inline-flex bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 items-center gap-2">
              <Gift className="w-4 h-4" />
              پرداخت صدقه
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-4 flex flex-col gap-4 animate-fade-in-down">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
            >
              {item.label}
            </a>
          ))}
          <a href="#donate" className="block w-full text-center bg-primary-600 text-white p-3 rounded-lg font-bold">
            کمک نقدی
          </a>
        </div>
      )}
    </header>
  );
};

// --- Hero ---
export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-right space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100 text-sm font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              کمپین بازگشت به مدرسه آغاز شد
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
              بیایید <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">باهم</span> لبخند را<br/>
              به چهره‌ها بازگردانیم
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              «خیریه باهم» پلتفرم رسمی نیکوکاری مجموعه <span className="font-bold text-gray-800">رامالایف</span> (baham.ramalife.ir) است که دستان پرمهر شما را به نیازمندان واقعی متصل می‌کند.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary-600 hover:bg-primary-700 text-white text-lg px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                همین حالا کمک کنید
                <Heart className="w-5 h-5 fill-white/20" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-lg px-8 py-4 rounded-2xl font-bold transition-colors flex items-center justify-center">
                مشاهده گزارش‌ها
              </button>
            </div>
            
            <div className="pt-6 border-t border-gray-100 mt-8">
               <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex -space-x-3 space-x-reverse">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400"></div>
                  </div>
                  <p className="text-sm text-gray-500">
                    <span className="font-bold text-gray-900">+۲,۵۰۰ نیکوکار</span> در ماه گذشته به ما پیوستند
                  </p>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 group">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" 
                alt="Children smiling" 
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-lg">پروژه ساخت مدرسه - سیستان</p>
                  <div className="w-full bg-white/30 h-1.5 rounded-full mt-2 mb-1">
                    <div className="bg-primary-400 h-1.5 rounded-full w-[75%]"></div>
                  </div>
                  <p className="text-sm opacity-90">۷۵٪ تکمیل شده</p>
                </div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Features (Our Values) ---
export const Features: React.FC = () => {
  const features: Feature[] = [
    {
      id: '1',
      title: 'شفافیت کامل',
      description: 'ما معتقدیم شما حق دارید بدانید تک‌تک ریال‌های اهدایی شما دقیقا کجا و چگونه هزینه شده است.',
      icon: ShieldCheck,
    },
    {
      id: '2',
      title: 'بدون واسطه',
      description: 'کمک‌های شما مستقیماً توسط تیم اجرایی رامالایف به دست نیازمندان شناسایی شده می‌رسد.',
      icon: HandHeart,
    },
    {
      id: '3',
      title: 'گزارش‌دهی منظم',
      description: 'تصاویر و مستندات تمام پروژه‌های انجام شده به صورت ماهانه در سایت منتشر می‌شود.',
      icon: Sun,
    },
  ];

  return (
    <section id={SectionId.FEATURES} className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold tracking-wide uppercase mb-3">چرا باهم؟</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">پلی مطمئن بین شما و نیازمندان</h3>
          <p className="text-xl text-gray-600">در خیریه باهم، هدف ما ایجاد بستری امن و شفاف برای تقسیم مهربانی است.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
              <div className="w-16 h-16 bg-white text-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <feature.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Pricing (Donation Tiers) ---
export const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      id: 'food',
      name: 'سبد غذایی',
      price: '۵۰۰,۰۰۰',
      period: 'تومان',
      features: ['تامین برنج و روغن', 'حبوبات و پروتئین', 'توزیع در مناطق محروم', 'ارسال عکس به خیر'],
    },
    {
      id: 'education',
      name: 'حامی تحصیلی',
      price: '۲۰۰,۰۰۰',
      period: 'تومان / ماهانه',
      recommended: true,
      features: ['خرید لوازم‌التحریر', 'کمک هزینه ثبت‌نام', 'پوشاک مدرسه', 'ارتباط مستقیم با دانش‌آموز'],
    },
    {
      id: 'medical',
      name: 'کمک درمانی',
      price: 'دلخواه',
      period: 'تومان',
      features: ['تامین داروهای خاص', 'هزینه‌های جراحی', 'خدمات دندانپزشکی', 'فیزیوتراپی و توانبخشی'],
    },
  ];

  return (
    <section id={SectionId.PRICING} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">راه‌های مشارکت در نیکی</h2>
          <p className="text-xl text-gray-600">هر کمک کوچک شما، گره بزرگی از زندگی یک هم‌وطن باز می‌کند.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.recommended 
                  ? 'bg-white shadow-2xl scale-105 z-10 border-2 border-primary-500' 
                  : 'bg-white border border-gray-200 hover:shadow-lg transition-shadow'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 left-0 -mt-4 text-center">
                  <span className="bg-primary-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">محبوب‌ترین طرح</span>
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-black ${plan.recommended ? 'text-primary-600' : 'text-gray-900'}`}>{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Gift className="w-3.5 h-3.5 text-primary-600" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-colors shadow-lg ${
                plan.recommended 
                  ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary-200' 
                  : 'bg-gray-800 hover:bg-gray-900 text-white shadow-gray-200'
              }`}>
                پرداخت آنلاین
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <Heart className="w-8 h-8 text-primary-500 fill-current" />
              <div className="flex flex-col">
                 <span className="text-2xl font-bold">خیریه باهم</span>
                 <span className="text-xs text-primary-400">قدرت گرفته از رامالایف</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              خیریه باهم تلاش می‌کند با ایجاد شفافیت و استفاده از تکنولوژی، فرآیند کمک‌رسانی را تسهیل کرده و مهربانی را در جامعه گسترش دهد.
            </p>
            <div className="text-sm text-gray-500">
                <p>آدرس وب‌سایت: baham.ramalife.ir</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">دسترسی سریع</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowLeft className="w-3 h-3"/> معرفی پروژه‌ها</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowLeft className="w-3 h-3"/> گزارش‌های مالی</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowLeft className="w-3 h-3"/> همکاری با ما</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowLeft className="w-3 h-3"/> تماس با پشتیبانی</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">نماد اعتماد</h4>
            <div className="flex gap-4">
               <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center text-xs text-center p-2 hover:bg-white/20 transition cursor-pointer">
                  مجوز فعالیت خیریه
               </div>
               <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center text-xs text-center p-2 hover:bg-white/20 transition cursor-pointer">
                  نماد اعتماد الکترونیک
               </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© ۱۴۰۳ خیریه باهم - تمامی حقوق محفوظ است.</p>
          <p className="mt-2 md:mt-0">طراحی و توسعه توسط تیم فنی <span className="text-gray-300 font-bold">رامالایف</span></p>
        </div>
      </div>
    </footer>
  );
};