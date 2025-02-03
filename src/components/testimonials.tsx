'use client';

import { Quote } from 'lucide-react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/team/1.jpg',
    name: 'Ali Yılmaz',
    role: 'Kedi Sahibi',
    quote:
      'Kedim Pamuk için aldığım veterinerlik hizmetinden çok memnun kaldım. Profesyonel ve ilgili bir ekip.',
  },
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/team/2.jpg',
    name: 'Ayşe Kaya',
    role: 'Köpek Sahibi',
    quote:
      "Köpeğim Max'in tedavisi için gösterdikleri özen ve ilgi için teşekkür ederim. Kesinlikle tavsiye ediyorum.",
  },
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/team/3.jpg',
    name: 'Mehmet Demir',
    role: 'Kedi Sahibi',
    quote:
      'Veteriner kliniğinin temizliği ve hijyeni çok iyi. Personel çok ilgili ve yardımsever.',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full h-auto py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full px-5">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-secondary font-medium">Referanslar</span>
          <h2 className="text-3xl lg:text-4xl font-semibold mt-3">
            Mutlu Müşterilerimiz
          </h2>
          <p className="text-gray-600 mt-5">
            Evcil hayvan sahiplerinin bizimle ilgili düşünceleri
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-lg">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="size-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Quote className="size-8 text-secondary/20" />
                  <p className="text-gray-600 mt-4">{testimonial.quote}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
