import Link from 'next/link';
import { articles } from '@/data/articles';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            Insights & <span className="text-gradient">Innovations</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A minimalist space for deep dives into technology, design, and the future of the web.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
              <article className="glass-card h-full overflow-hidden flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 space-y-4 flex-grow">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                    {article.date}
                  </div>
                  <h2 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-white/60 text-sm line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
