import { Calendar, Heart, Info, MapPin } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '../../../components/button';

const pets = [
  {
    id: 1,
    name: 'Luna',
    type: 'Kedi',
    breed: 'British Shorthair',
    age: '2 yaş',
    gender: 'Dişi',
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/1.jpg',
    location: 'Kadıköy, İstanbul',
    date: '15 Şubat 2024',
    description:
      'Luna çok sevimli ve oyuncu bir kedi. Kısırlaştırılmış ve tüm aşıları yapılmıştır.',
    features: [
      'Kısırlaştırılmış',
      'Aşıları tam',
      'Tuvalet eğitimli',
      'Uyumlu',
      'Çocuklarla arası iyi',
    ],
  },
  {
    id: 2,
    name: 'Max',
    type: 'Köpek',
    breed: 'Golden Retriever',
    age: '1 yaş',
    gender: 'Erkek',
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/2.jpg',
    location: 'Beşiktaş, İstanbul',
    date: '14 Şubat 2024',
    description:
      'Max çok enerjik ve sevgi dolu bir köpek. Kısırlaştırılmış ve tüm aşıları yapılmıştır.',
    features: [
      'Kısırlaştırılmış',
      'Aşıları tam',
      'Tasma eğitimli',
      'Temel itaat eğitimli',
      'Diğer hayvanlarla uyumlu',
    ],
  },
  {
    id: 3,
    name: 'Minnoş',
    type: 'Kedi',
    breed: 'Tekir',
    age: '6 aylık',
    gender: 'Dişi',
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/3.jpg',
    location: 'Üsküdar, İstanbul',
    date: '13 Şubat 2024',
    description:
      'Minnoş sevimli ve oyuncu bir yavru kedi. Tuvalet eğitimi var ve sağlık kontrolleri yapılmıştır.',
    features: [
      'Aşıları tam',
      'Tuvalet eğitimli',
      'Oyuncu',
      'Sevimli',
      'Ev ortamına uyumlu',
    ],
  },
  {
    id: 4,
    name: 'Rocky',
    type: 'Köpek',
    breed: 'Labrador',
    age: '3 yaş',
    gender: 'Erkek',
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/4.jpg',
    location: 'Maltepe, İstanbul',
    date: '12 Şubat 2024',
    description:
      'Rocky sakin ve sevgi dolu bir köpek. Kısırlaştırılmış ve tüm aşıları yapılmıştır.',
    features: [
      'Kısırlaştırılmış',
      'Aşıları tam',
      'Eğitimli',
      'Sakin',
      'Apartman yaşamına uygun',
    ],
  },
  {
    id: 5,
    name: 'Pamuk',
    type: 'Kedi',
    breed: 'Van Kedisi',
    age: '1 yaş',
    gender: 'Erkek',
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/5.jpg',
    location: 'Şişli, İstanbul',
    date: '11 Şubat 2024',
    description:
      'Pamuk sevgi dolu ve temiz bir kedi. Kısırlaştırılmış ve tüm aşıları yapılmıştır.',
    features: [
      'Kısırlaştırılmış',
      'Aşıları tam',
      'Tuvalet eğitimli',
      'Temiz',
      'Ev kedisi',
    ],
  },
  {
    id: 6,
    name: 'Buddy',
    type: 'Köpek',
    breed: 'Beagle',
    age: '2 yaş',
    gender: 'Erkek',
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/6.jpg',
    location: 'Bakırköy, İstanbul',
    date: '10 Şubat 2024',
    description:
      'Buddy enerjik ve oyuncu bir köpek. Kısırlaştırılmış ve tüm aşıları yapılmıştır.',
    features: [
      'Kısırlaştırılmış',
      'Aşıları tam',
      'Eğitimli',
      'Enerjik',
      'Çocuklarla arası iyi',
    ],
  },
];

export default function AdoptionPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-[url('https://duruthemes.com/demo/html/pepito/img/slider/4.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
              Evlat Edinme
            </h1>
            <p className="text-white/90">
              Yeni bir aile üyesi edinmek için hazır mısınız?
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <Info className="size-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Evlat Edinme Süreci
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Evlat edinme sürecinde dikkat edilmesi gereken önemli
                    noktalar:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>18 yaşından büyük olmanız gerekmektedir.</li>
                    <li>
                      Evlat edinmek istediğiniz hayvanın ihtiyaçlarını
                      karşılayabilecek maddi duruma sahip olmanız gerekmektedir.
                    </li>
                    <li>
                      Yaşadığınız yerin evcil hayvan bakmaya uygun olması
                      gerekmektedir.
                    </li>
                    <li>
                      Evlat edinme işlemi için gerekli evrakları tamamlamanız
                      gerekmektedir.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pets Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pets.map((pet) => (
              <article
                key={pet.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="size-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-primary hover:text-white transition-colors duration-300">
                      <Heart className="size-5" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{pet.name}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {pet.type}
                    </span>
                  </div>

                  <div className="space-y-2 text-gray-600 text-sm mb-4">
                    <p>
                      <span className="font-medium">Irk:</span> {pet.breed}
                    </p>
                    <p>
                      <span className="font-medium">Yaş:</span> {pet.age}
                    </p>
                    <p>
                      <span className="font-medium">Cinsiyet:</span>{' '}
                      {pet.gender}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                    <MapPin className="size-4" />
                    <span>{pet.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-6">
                    <Calendar className="size-4" />
                    <span>{pet.date}</span>
                  </div>

                  <p className="text-gray-600 mb-6">{pet.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {pet.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/evlat-edinme/${pet.id}`}
                    className={buttonVariants({
                      variant: 'primary',
                      size: 'lg',
                    })}
                  >
                    <span>Detaylı Bilgi</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Siz de Sahiplendirin
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Sahiplendirmek istediğiniz evcil hayvanınız mı var? Hemen bizimle
            iletişime geçin.
          </p>
          <Link
            href="/contact"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
            })}
          >
            <span>İletişime Geçin</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
