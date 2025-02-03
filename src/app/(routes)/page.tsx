import About from '@/components/about';
import Blog from '@/components/blog';
import Services from '@/components/services';
import Team from '@/components/team';
import Testimonials from '@/components/testimonials';
import WhyChooseUs from '@/components/why-choose-us';
import { clsx } from 'clsx';
import { AwardIcon, MessageCircle, PawPrintIcon } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '../../components/button';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-auto bg-[url('https://duruthemes.com/demo/html/pepito/img/slider/4.jpg')] bg-cover bg-center bg-no-repeat py-44 lg:py-56">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        <div className="max-w-7xl mx-auto w-full px-5 grid grid-cols-12 items-center isolate">
          <div className="flex flex-col gap-2.5 col-span-full md:col-span-7 lg:col-span-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="size-11 flex justify-center items-center rounded-full bg-secondary">
                <AwardIcon className="size-6 text-white" />
              </span>
              <p className="text-white">Tutkumuz hayvanlar</p>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold">
              Evcil hayvanlarınızın bakımı.
            </h1>
            <p className="font-light md:text-lg text-white">
              Evcil hayvanlarınızı her şeyden önce tutan güvenilir veterinerler.
            </p>
            <Link
              href="/hizmetler"
              className={clsx(
                buttonVariants({ variant: 'primary', size: 'lg' }),
                'w-fit mt-5'
              )}
            >
              <PawPrintIcon className="size-4 -mt-0.5" />
              <span>Kesfet</span>
            </Link>
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-5 hidden lg:inline-flex">
          <div className="relative">
            <a
              href="https://wa.me/905321234567"
              className="text-white rotate-90 flex items-center gap-5 absolute top-1/2 -translate-y-1/2 right-5 translate-x-1/2 whitespace-nowrap"
            >
              <div className="flex flex-col rotate-180">
                <span className="text-sm font-light">WhatsApp Line</span>
                <span className="text-2xl">123 456 7890</span>
              </div>
              <div className="size-12 flex justify-center items-center rounded-full bg-secondary">
                <MessageCircle className="size-6 text-white" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Services />
      <About />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Blog />
    </main>
  );
}
