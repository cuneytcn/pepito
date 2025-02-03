import {
  Bath,
  Dog,
  PawPrint,
  Scissors,
  Stethoscope,
  Syringe,
} from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './button';

const services = [
  {
    icon: Stethoscope,
    title: 'Veteriner Muayene',
    description:
      'Evcil hayvanınızın sağlığı için kapsamlı muayene ve kontrol hizmetleri.',
  },
  {
    icon: Syringe,
    title: 'Aşılama',
    description:
      'Düzenli aşılama programları ile evcil hayvanınızı hastalıklardan koruyun.',
  },
  {
    icon: Scissors,
    title: 'Tıraş & Bakım',
    description:
      'Profesyonel ekibimizle evcil hayvanınızın bakımını en iyi şekilde yapıyoruz.',
  },
  {
    icon: Bath,
    title: 'Yıkama',
    description:
      'Özel şampuan ve bakım ürünleriyle evcil hayvanınızın hijyenini sağlıyoruz.',
  },
  {
    icon: Dog,
    title: 'Eğitim',
    description:
      'Uzman eğitmenlerimizle evcil hayvanınızın davranışlarını düzenliyoruz.',
  },
  {
    icon: PawPrint,
    title: 'Otel',
    description:
      'Siz tatildeyken evcil hayvanınız güvende ve konforlu bir ortamda kalır.',
  },
];

export default function Services() {
  return (
    <section className="w-full h-auto py-20 lg:py-32">
      <div className="max-w-7xl mx-auto w-full px-5">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-secondary font-medium">Hizmetlerimiz</span>
          <h2 className="text-3xl lg:text-4xl font-semibold mt-3">
            Evcil Hayvanınız İçin En İyi Bakım
          </h2>
          <p className="text-gray-600 mt-5">
            Evcil hayvanınızın sağlığı ve mutluluğu için profesyonel veteriner
            hizmetleri sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="size-16 flex justify-center items-center rounded-lg bg-primary/10 group-hover:bg-secondary transition-colors duration-300">
                <service.icon className="size-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mt-6">{service.title}</h3>
              <p className="text-gray-600 mt-3">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/hizmetler"
            className={buttonVariants({ variant: 'primary', size: 'lg' })}
          >
            <span>Tüm Hizmetleri Gör</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
