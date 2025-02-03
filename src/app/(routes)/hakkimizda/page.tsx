import { Award, Check, Clock, HeartPulse, Users } from 'lucide-react';

const features = [
  'Modern ekipmanlar ve teknoloji',
  'Deneyimli veteriner ekibi',
  '7/24 acil servis hizmeti',
  'Konforlu bekleme alanları',
  'Ücretsiz park alanı',
  'Pet shop hizmeti',
];

const stats = [
  {
    icon: Users,
    value: '1000+',
    label: 'Mutlu Müşteri',
  },
  {
    icon: HeartPulse,
    value: '15+',
    label: 'Yıllık Deneyim',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Ödül & Sertifika',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Acil Servis',
  },
];

export default function HakkimizdaPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-[url('https://duruthemes.com/demo/html/pepito/img/slider/3.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
              Hakkımızda
            </h1>
            <p className="text-white/90">
              Evcil hayvanınızın sağlığı için buradayız
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-medium">Hikayemiz</span>
              <h2 className="text-3xl lg:text-4xl font-semibold mt-3">
                2009&apos;dan Beri Hizmetinizdeyiz
              </h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  2009 yılında küçük bir veteriner kliniği olarak başladığımız
                  yolculuğumuzda, bugün modern ekipmanlarımız ve uzman
                  kadromuzla İstanbul&apos;un en güvenilir veteriner
                  kliniklerinden biri haline geldik.
                </p>
                <p>
                  Misyonumuz, evcil hayvanlarınıza en iyi sağlık hizmetini
                  sunmak ve onların yaşam kalitesini artırmaktır. Her bir hasta,
                  bizim için özeldir ve özel ilgi gösterilmeyi hak eder.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="size-5 flex justify-center items-center rounded-full bg-secondary/20">
                      <Check className="size-3 text-secondary" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://duruthemes.com/demo/html/pepito/img/about.jpg"
                alt="About Pepito"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -bottom-10 -right-10 hidden lg:block">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-4xl font-bold text-primary">15+</h3>
                  <p className="text-gray-600 mt-2">Yıllık Deneyim</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="size-16 mx-auto flex justify-center items-center rounded-full bg-primary/10">
                  <stat.icon className="size-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mt-4">
                  {stat.value}
                </h3>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <span className="text-secondary font-medium">Misyonumuz</span>
              <h2 className="text-3xl font-semibold mt-3">
                En İyi Veteriner Hizmeti
              </h2>
              <p className="text-gray-600 mt-6">
                Evcil hayvanlarınıza en iyi sağlık hizmetini sunmak ve onların
                yaşam kalitesini artırmak için çalışıyoruz. Modern teknoloji ve
                uzman kadromuzla, her zaman yanınızdayız.
              </p>
            </div>

            <div>
              <span className="text-secondary font-medium">Vizyonumuz</span>
              <h2 className="text-3xl font-semibold mt-3">
                Güvenilir ve Profesyonel
              </h2>
              <p className="text-gray-600 mt-6">
                Türkiye&apos;nin en güvenilir ve profesyonel veteriner
                kliniklerinden biri olmak için sürekli kendimizi geliştiriyor,
                en son teknoloji ve tedavi yöntemlerini takip ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
