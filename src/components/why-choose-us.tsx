import { Award, Clock, HeartPulse, Users } from 'lucide-react';

const features = [
  {
    icon: HeartPulse,
    title: 'Kaliteli Bakım',
    description:
      'Evcil hayvanınızın sağlığı için en kaliteli bakım hizmetlerini sunuyoruz.',
  },
  {
    icon: Users,
    title: 'Uzman Ekip',
    description: 'Deneyimli ve uzman veteriner hekimlerimizle hizmetinizdeyiz.',
  },
  {
    icon: Clock,
    title: '7/24 Hizmet',
    description: 'Acil durumlar için 7/24 hizmet veriyoruz.',
  },
  {
    icon: Award,
    title: 'Modern Ekipman',
    description:
      'En son teknoloji ekipmanlarla evcil hayvanınızın tedavisini yapıyoruz.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full h-auto py-20 lg:py-32 bg-[url('https://duruthemes.com/demo/html/pepito/img/banner.jpg')] bg-cover bg-center bg-fixed relative">
      <div className="absolute inset-0 bg-primary/90" />
      <div className="max-w-7xl mx-auto w-full px-5 relative">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-secondary font-medium">Neden Biz?</span>
          <h2 className="text-3xl lg:text-4xl font-semibold mt-3 text-white">
            Neden Bizi Seçmelisiniz?
          </h2>
          <p className="text-white/80 mt-5">
            Evcil hayvanınızın sağlığı ve mutluluğu için en iyi hizmeti
            sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="size-20 mx-auto flex justify-center items-center rounded-full bg-white/10">
                <feature.icon className="size-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mt-6 text-white">
                {feature.title}
              </h3>
              <p className="text-white/80 mt-3">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
