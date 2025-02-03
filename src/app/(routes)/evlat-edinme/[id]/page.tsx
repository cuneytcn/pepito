import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Heart,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

// Bu fonksiyon gerçek bir uygulamada API'den veya veritabanından veri çekecektir
function getPetDetails(id: string) {
  const pets = [
    {
      id: 1,
      name: 'Luna',
      type: 'Kedi',
      breed: 'British Shorthair',
      age: '2 yaş',
      gender: 'Dişi',
      images: [
        'https://duruthemes.com/demo/html/pepito/img/blog/1.jpg',
        'https://duruthemes.com/demo/html/pepito/img/blog/2.jpg',
        'https://duruthemes.com/demo/html/pepito/img/blog/3.jpg',
      ],
      location: 'Kadıköy, İstanbul',
      date: '15 Şubat 2024',
      description:
        'Luna çok sevimli ve oyuncu bir kedi. Kısırlaştırılmış ve tüm aşıları yapılmıştır. Diğer kedilerle ve çocuklarla arası çok iyi. Ev ortamına kolayca uyum sağlayabilir.',
      features: [
        'Kısırlaştırılmış',
        'Aşıları tam',
        'Tuvalet eğitimli',
        'Uyumlu',
        'Çocuklarla arası iyi',
      ],
      requirements: [
        'En az 18 yaşında olmak',
        "İstanbul'da ikamet etmek",
        'Ev sahibinden izin belgesi (kiracılar için)',
        'Eve uyum sürecinde destek olabilmek',
        'Düzenli veteriner kontrollerine götürebilmek',
      ],
      healthStatus: [
        { label: 'Kısırlaştırma', status: true },
        { label: 'Karma Aşı', status: true },
        { label: 'Kuduz Aşısı', status: true },
        { label: 'İç Parazit', status: true },
        { label: 'Dış Parazit', status: true },
        { label: 'Mikroçip', status: false },
      ],
      contact: {
        name: 'Dr. Ahmet Yılmaz',
        phone: '+90 532 123 45 67',
        email: 'info@pepito.com',
        address: 'Atatürk Cad. No:123 Kadıköy/İstanbul',
      },
    },
  ];

  return pets.find((pet) => pet.id === parseInt(id));
}

export default function AdoptionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const pet = getPetDetails(params.id);

  if (!pet) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">
            Üzgünüz, aradığınız hayvan bulunamadı.
          </h1>
          <Link
            href="/evlat-edinme"
            className="text-primary hover:text-secondary transition-colors duration-300"
          >
            Diğer hayvanlara göz atın
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img
          src={pet.images[0]}
          alt={pet.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-5">
            <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
              {pet.name}
            </h1>
            <div className="flex items-center gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>{pet.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" />
                <span>{pet.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Image Gallery */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {pet.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${pet.name} - ${index + 1}`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                ))}
              </div>

              {/* Pet Info */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Genel Bilgiler</h2>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-gray-600">
                      <span className="font-medium">Tür:</span> {pet.type}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Irk:</span> {pet.breed}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Yaş:</span> {pet.age}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">
                      <span className="font-medium">Cinsiyet:</span>{' '}
                      {pet.gender}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Konum:</span> {pet.location}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Eklenme Tarihi:</span>{' '}
                      {pet.date}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Açıklama</h3>
                <p className="text-gray-600 mb-8">{pet.description}</p>

                <h3 className="text-xl font-semibold mb-4">Özellikleri</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {pet.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4">Sağlık Durumu</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {pet.healthStatus.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      {item.status ? (
                        <CheckCircle2 className="size-5 text-green-500" />
                      ) : (
                        <AlertCircle className="size-5 text-yellow-500" />
                      )}
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  Sahiplenme Koşulları
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
                  {pet.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-white p-8 rounded-lg shadow-sm sticky top-4">
                <h3 className="text-xl font-semibold mb-6">
                  İletişim Bilgileri
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600 font-medium">
                    {pet.contact.name}
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href={`tel:${pet.contact.phone}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300"
                    >
                      <Phone className="size-5" />
                      <span>Ara</span>
                    </a>
                    <a
                      href={`mailto:${pet.contact.email}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300"
                    >
                      <Mail className="size-5" />
                      <span>E-posta</span>
                    </a>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-gray-600">
                      <span className="font-medium">Adres:</span>
                      <br />
                      {pet.contact.address}
                    </p>
                  </div>
                  <div className="pt-4 border-t">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                      <Heart className="size-5" />
                      <span>Favorilere Ekle</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
