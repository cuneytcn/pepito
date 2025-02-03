import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = {
  address: 'Atatürk Cad. No:123 Kadıköy/İstanbul',
  phone: '+90 532 123 45 67',
  email: 'info@pepito.com',
  workingHours: {
    weekdays: 'Pazartesi - Cumartesi: 09:00 - 19:00',
    sunday: 'Pazar: Kapalı',
  },
};

export default function IletisimPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-[url('https://duruthemes.com/demo/html/pepito/img/slider/5.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
              İletişim
            </h1>
            <p className="text-white/90">Bizimle iletişime geçin</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Mesaj Gönderin</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        E-posta Adresiniz
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex justify-center px-8 py-4 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-300"
                  >
                    Gönder
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-6">
                  İletişim Bilgileri
                </h3>
                <ul className="space-y-6">
                  <li>
                    <a
                      href={`https://maps.google.com/?q=${contactInfo.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      <MapPin className="size-6 mt-1" />
                      <span>{contactInfo.address}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      <Phone className="size-6" />
                      <span>{contactInfo.phone}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      <Mail className="size-6" />
                      <span>{contactInfo.email}</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-4 text-gray-600">
                    <Clock className="size-6 mt-1" />
                    <div>
                      <p>{contactInfo.workingHours.weekdays}</p>
                      <p>{contactInfo.workingHours.sunday}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Konum</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504900120997!2d29.02885867677899!3d40.99050927141894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8679bfb3d31%3A0x7d75715e081dfa5c!2sKad%C4%B1k%C3%B6y%2C%20Atat%C3%BCrk%20Cd.%2C%2034722%20Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1708101234567!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
