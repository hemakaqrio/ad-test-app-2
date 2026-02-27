import { articles } from '@/data/articles';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function BlogIndex() {
  return (
    <Layout>
      <div className="space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            All <span className="text-gradient">Articles</span>
          </h1>
          <p className="text-white/60 text-lg">
            Browse through our collection of insights and stories.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
              <article className="glass-card p-6 space-y-4 h-full flex flex-col">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  {article.date}
                </div>
                <h2 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-white/60 line-clamp-2">
                  {article.summary}
                </p>
                <div className="pt-4 mt-auto">
                  <span className="text-sm font-bold uppercase tracking-widest group-hover:underline">
                    Read More →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
