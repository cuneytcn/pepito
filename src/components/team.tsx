import { Facebook, Instagram, Twitter } from 'lucide-react';

const team = [
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/team/1.jpg',
    name: 'Dr. Ahmet Yılmaz',
    role: 'Baş Veteriner Hekim',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
    },
  },
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/team/2.jpg',
    name: 'Dr. Ayşe Demir',
    role: 'Veteriner Hekim',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
    },
  },
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/team/3.jpg',
    name: 'Dr. Mehmet Kaya',
    role: 'Veteriner Hekim',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
    },
  },
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/team/4.jpg',
    name: 'Dr. Zeynep Şahin',
    role: 'Veteriner Hekim',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
    },
  },
];

export default function Team() {
  return (
    <section className="w-full h-auto py-20 lg:py-32">
      <div className="max-w-7xl mx-auto w-full px-5">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-secondary font-medium">Ekibimiz</span>
          <h2 className="text-3xl lg:text-4xl font-semibold mt-3">
            Uzman Veteriner Ekibimiz
          </h2>
          <p className="text-gray-600 mt-5">
            Deneyimli ve uzman veteriner hekimlerimizle evcil hayvanınızın
            sağlığı için buradayız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-white/80 mt-1">{member.role}</p>

                <div className="flex items-center gap-4 mt-4">
                  <a
                    href={member.social.twitter}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <Twitter className="size-5" />
                  </a>
                  <a
                    href={member.social.facebook}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <Facebook className="size-5" />
                  </a>
                  <a
                    href={member.social.instagram}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <Instagram className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
