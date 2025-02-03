import { Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './button';

const posts = [
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/1.jpg',
    title: 'Kedilerde Aşılama Takvimi',
    excerpt:
      'Kedilerin sağlıklı bir yaşam sürmesi için düzenli aşılama çok önemlidir. Peki hangi aşılar ne zaman yapılmalı?',
    date: '15 Şubat 2024',
    author: 'Dr. Ahmet Yılmaz',
    slug: 'kedilerde-asilama-takvimi',
  },
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/2.jpg',
    title: 'Köpeklerde Beslenme',
    excerpt:
      'Köpeklerin sağlıklı ve mutlu bir yaşam sürmesi için doğru beslenme çok önemlidir. İşte size önerilerimiz.',
    date: '10 Şubat 2024',
    author: 'Dr. Ayşe Demir',
    slug: 'kopeklerde-beslenme',
  },
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/3.jpg',
    title: 'Evcil Hayvanlarda Diş Bakımı',
    excerpt:
      'Evcil hayvanların diş sağlığı genel sağlıkları için çok önemlidir. Düzenli diş bakımı nasıl yapılmalı?',
    date: '5 Şubat 2024',
    author: 'Dr. Mehmet Kaya',
    slug: 'evcil-hayvanlarda-dis-bakimi',
  },
];

export default function Blog() {
  return (
    <section className="w-full h-auto py-20 lg:py-32">
      <div className="max-w-7xl mx-auto w-full px-5">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-secondary font-medium">Blog</span>
          <h2 className="text-3xl lg:text-4xl font-semibold mt-3">
            Son Blog Yazıları
          </h2>
          <p className="text-gray-600 mt-5">
            Evcil hayvan bakımı ve sağlığı hakkında faydalı bilgiler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="size-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-semibold hover:text-secondary transition-colors duration-300">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mt-3">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className={`${buttonVariants({
                    variant: 'link',
                  })} mt-4 !p-0 !h-auto`}
                >
                  <span>Devamını Oku</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className={buttonVariants({ variant: 'primary', size: 'lg' })}
          >
            <span>Tüm Yazıları Gör</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
