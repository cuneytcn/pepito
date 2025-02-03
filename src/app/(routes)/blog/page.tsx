import { Calendar, Search, Tag, User } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '../../../components/button';

const posts = [
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/1.jpg',
    title: 'Kedilerde Aşılama Takvimi',
    excerpt:
      'Kedilerin sağlıklı bir yaşam sürmesi için düzenli aşılama çok önemlidir. Peki hangi aşılar ne zaman yapılmalı?',
    date: '15 Şubat 2024',
    author: 'Dr. Ahmet Yılmaz',
    category: 'Kediler',
    tags: ['Aşılama', 'Sağlık', 'Kedi Bakımı'],
    slug: 'kedilerde-asilama-takvimi',
  },
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/2.jpg',
    title: 'Köpeklerde Beslenme',
    excerpt:
      'Köpeklerin sağlıklı ve mutlu bir yaşam sürmesi için doğru beslenme çok önemlidir. İşte size önerilerimiz.',
    date: '10 Şubat 2024',
    author: 'Dr. Ayşe Demir',
    category: 'Köpekler',
    tags: ['Beslenme', 'Sağlık', 'Köpek Bakımı'],
    slug: 'kopeklerde-beslenme',
  },
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/3.jpg',
    title: 'Evcil Hayvanlarda Diş Bakımı',
    excerpt:
      'Evcil hayvanların diş sağlığı genel sağlıkları için çok önemlidir. Düzenli diş bakımı nasıl yapılmalı?',
    date: '5 Şubat 2024',
    author: 'Dr. Mehmet Kaya',
    category: 'Genel',
    tags: ['Diş Sağlığı', 'Bakım', 'Sağlık'],
    slug: 'evcil-hayvanlarda-dis-bakimi',
  },
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/4.jpg',
    title: 'Kedi ve Köpeklerde Parazit Kontrolü',
    excerpt:
      'İç ve dış parazitler evcil hayvanlarınızın sağlığını tehdit eder. Düzenli parazit kontrolü nasıl yapılmalı?',
    date: '1 Şubat 2024',
    author: 'Dr. Zeynep Şahin',
    category: 'Genel',
    tags: ['Parazit', 'Sağlık', 'Bakım'],
    slug: 'kedi-ve-kopeklerde-parazit-kontrolu',
  },
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/5.jpg',
    title: 'Yavru Köpek Eğitimi',
    excerpt:
      'Yavru köpeğinizin eğitimi için en önemli ipuçları ve püf noktaları.',
    date: '25 Ocak 2024',
    author: 'Dr. Ali Yıldız',
    category: 'Köpekler',
    tags: ['Eğitim', 'Köpek Bakımı', 'Davranış'],
    slug: 'yavru-kopek-egitimi',
  },
  {
    image: 'https://duruthemes.com/demo/html/pepito/img/blog/6.jpg',
    title: 'Kedilerde Tüy Bakımı',
    excerpt:
      'Kedinizin tüylerinin sağlıklı ve parlak olması için yapmanız gerekenler.',
    date: '20 Ocak 2024',
    author: 'Dr. Ayşe Demir',
    category: 'Kediler',
    tags: ['Tüy Bakımı', 'Kedi Bakımı', 'Sağlık'],
    slug: 'kedilerde-tuy-bakimi',
  },
];

const categories = [
  { name: 'Kediler', count: 8 },
  { name: 'Köpekler', count: 12 },
  { name: 'Kuşlar', count: 5 },
  { name: 'Genel', count: 15 },
  { name: 'Beslenme', count: 7 },
  { name: 'Sağlık', count: 20 },
];

const tags = [
  'Aşılama',
  'Sağlık',
  'Bakım',
  'Beslenme',
  'Eğitim',
  'Kedi Bakımı',
  'Köpek Bakımı',
  'Diş Sağlığı',
  'Tüy Bakımı',
  'Davranış',
];

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-[url('https://duruthemes.com/demo/html/pepito/img/slider/1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
              Blog
            </h1>
            <p className="text-white/90">
              Evcil hayvan bakımı ve sağlığı hakkında faydalı bilgiler
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Blog Posts */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-10">
                {posts.map((post, index) => (
                  <article
                    key={index}
                    className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block relative"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                    <div className="p-8">
                      <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="size-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="size-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="size-4" />
                          <span>{post.category}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-2xl font-semibold hover:text-secondary transition-colors duration-300">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-gray-600 mt-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className={`${buttonVariants({
                          variant: 'link',
                        })} mt-6 !p-0 !h-auto`}
                      >
                        <span>Devamını Oku</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Blog yazısı ara..."
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Kategoriler</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.name.toLowerCase()}`}
                        className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors duration-300"
                      >
                        <span>{category.name}</span>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Etiketler</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
