import {
  Bath,
  Bone,
  Dna,
  Dog,
  Heart,
  Microscope,
  PawPrint,
  Pill,
  Scissors,
  Stethoscope,
  Syringe,
  Thermometer,
} from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Veteriner Muayene',
    description:
      'Evcil hayvanınızın sağlığı için kapsamlı muayene ve kontrol hizmetleri.',
    details: [
      'Genel sağlık kontrolü',
      'Fiziksel muayene',
      'Sağlık raporu',
      'Beslenme danışmanlığı',
    ],
  },
  {
    icon: Syringe,
    title: 'Aşılama',
    description:
      'Düzenli aşılama programları ile evcil hayvanınızı hastalıklardan koruyun.',
    details: [
      'Kuduz aşısı',
      'Karma aşı',
      'İç-dış parazit uygulaması',
      'Aşı kartı',
    ],
  },
  {
    icon: Scissors,
    title: 'Tıraş & Bakım',
    description:
      'Profesyonel ekibimizle evcil hayvanınızın bakımını en iyi şekilde yapıyoruz.',
    details: [
      'Kedi & köpek tıraşı',
      'Tırnak kesimi',
      'Kulak temizliği',
      'Diş bakımı',
    ],
  },
  {
    icon: Bath,
    title: 'Yıkama',
    description:
      'Özel şampuan ve bakım ürünleriyle evcil hayvanınızın hijyenini sağlıyoruz.',
    details: [
      'Anti-parazit yıkama',
      'Medikal yıkama',
      'Fırçalama',
      'Özel bakım',
    ],
  },
  {
    icon: Dog,
    title: 'Eğitim',
    description:
      'Uzman eğitmenlerimizle evcil hayvanınızın davranışlarını düzenliyoruz.',
    details: [
      'Temel itaat eğitimi',
      'Davranış düzeltme',
      'Sosyalleşme',
      'Özel eğitim',
    ],
  },
  {
    icon: PawPrint,
    title: 'Otel',
    description:
      'Siz tatildeyken evcil hayvanınız güvende ve konforlu bir ortamda kalır.',
    details: [
      '24 saat gözetim',
      'Günlük aktiviteler',
      'Özel bakım',
      'Veteriner kontrolü',
    ],
  },
  {
    icon: Microscope,
    title: 'Laboratuvar',
    description:
      'Modern laboratuvar ekipmanlarımızla detaylı tetkik ve tahlil hizmetleri.',
    details: ['Kan tahlili', 'İdrar tahlili', 'Ultrason', 'Röntgen'],
  },
  {
    icon: Pill,
    title: 'Eczane',
    description:
      'Evcil hayvanınız için gerekli tüm ilaç ve vitamin takviyeleri.',
    details: [
      'Reçeteli ilaçlar',
      'Vitaminler',
      'Besin takviyeleri',
      'Özel mamalar',
    ],
  },
  {
    icon: Bone,
    title: 'Pet Shop',
    description: 'Evcil hayvanınız için kaliteli mama ve aksesuarlar.',
    details: [
      'Kedi & köpek mamaları',
      'Oyuncaklar',
      'Taşıma çantaları',
      'Aksesuarlar',
    ],
  },
  {
    icon: Heart,
    title: 'Cerrahi Operasyonlar',
    description:
      'Deneyimli veteriner hekimlerimizle güvenli cerrahi operasyonlar.',
    details: [
      'Kısırlaştırma',
      'Diş operasyonları',
      'Ortopedik cerrahi',
      'Yumuşak doku cerrahisi',
    ],
  },
  {
    icon: Thermometer,
    title: 'Acil Servis',
    description: '7/24 acil veteriner hizmeti ile her zaman yanınızdayız.',
    details: ['Acil müdahale', 'Yoğun bakım', 'Ambulans hizmeti', 'Evde bakım'],
  },
  {
    icon: Dna,
    title: 'Genetik Testler',
    description:
      'Evcil hayvanınızın ırkına özgü hastalıklar için genetik testler.',
    details: ['DNA testi', 'Irk belirleme', 'Hastalık taraması', 'Soy ağacı'],
  },
];

export default function HizmetlerPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-[url('https://duruthemes.com/demo/html/pepito/img/slider/2.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
              Hizmetlerimiz
            </h1>
            <p className="text-white/90">
              Evcil hayvanınız için profesyonel veteriner hizmetleri
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="size-16 flex justify-center items-center rounded-lg bg-primary/10 group-hover:bg-secondary transition-colors duration-300">
                  <service.icon className="size-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mt-6">{service.title}</h3>
                <p className="text-gray-600 mt-3">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Randevu Alın
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Evcil hayvanınızın sağlığı için hemen randevu alın. Uzman ekibimiz
            sizlere yardımcı olmak için hazır.
          </p>
          <a
            href="tel:+905321234567"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
          >
            Hemen Arayın
          </a>
        </div>
      </section>
    </main>
  );
}
