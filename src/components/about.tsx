import { Check } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './button';

const features = [
  'Modern ekipmanlar ve teknoloji',
  'Deneyimli veteriner ekibi',
  '7/24 acil servis hizmeti',
  'Konforlu bekleme alanları',
];

export default function About() {
  return (
    <section className="w-full h-auto py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="relative">
          <img
            src="https://duruthemes.com/demo/html/pepito/img/about.jpg"
            alt="About Us"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute -bottom-10 -right-10 hidden lg:block">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-4xl font-bold text-primary">15+</h3>
              <p className="text-gray-600 mt-2">Yıllık Deneyim</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-secondary font-medium">Hakkımızda</span>
          <h2 className="text-3xl lg:text-4xl font-semibold">
            Evcil Hayvanınızın Sağlığı İçin Buradayız
          </h2>
          <p className="text-gray-600">
            2009 yılından bu yana, evcil hayvanlarınıza en iyi bakımı sunmak
            için çalışıyoruz. Modern ekipmanlarımız ve uzman kadromuzla, her
            zaman yanınızdayız.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="size-5 flex justify-center items-center rounded-full bg-secondary/20">
                  <Check className="size-3 text-secondary" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/hakkimizda"
            className={`${buttonVariants({
              variant: 'primary',
              size: 'lg',
            })} w-fit mt-5`}
          >
            <span>Daha Fazla Bilgi</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
