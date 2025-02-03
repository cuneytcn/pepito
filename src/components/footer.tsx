import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  company: [
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Hizmetler', href: '/hizmetler' },
    { label: 'Blog', href: '/blog' },
    { label: 'İletişim', href: '/iletisim' },
  ],
  services: [
    { label: 'Veteriner Muayene', href: '/hizmetler#muayene' },
    { label: 'Aşılama', href: '/hizmetler#asilama' },
    { label: 'Tıraş & Bakım', href: '/hizmetler#bakim' },
    { label: 'Pet Hotel', href: '/hizmetler#hotel' },
  ],
  contact: {
    address: 'Atatürk Cad. No:123 Kadıköy/İstanbul',
    phone: '+90 532 123 45 67',
    email: 'info@pepito.com',
  },
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
  },
};

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto w-full px-5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo ve Açıklama */}
          <div>
            <Link href="/">
              <img
                src="https://duruthemes.com/demo/html/pepito/img/logo-light.png"
                alt="Pepito"
                className="w-[140px] h-auto object-cover"
              />
            </Link>
            <p className="text-gray-400 mt-6">
              Evcil hayvanınızın sağlığı ve mutluluğu için profesyonel veteriner
              hizmetleri sunuyoruz.
            </p>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kurumsal</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hizmetler</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://maps.google.com/?q=${footerLinks.contact.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <MapPin className="size-5" />
                  <span>{footerLinks.contact.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerLinks.contact.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Phone className="size-5" />
                  <span>{footerLinks.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail className="size-5" />
                  <span>{footerLinks.contact.email}</span>
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-6">
              <a
                href={footerLinks.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href={footerLinks.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href={footerLinks.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Pepito. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
