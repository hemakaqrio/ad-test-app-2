import { articles } from '@/data/articles';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <Layout>
      <article className="max-w-3xl mx-auto space-y-12">
        <Link 
          href="/" 
          className="text-white/40 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to insights
        </Link>
        
        <header className="space-y-6">
          <div className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
            {article.date}
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
            {article.title}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500" />
        </header>

        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-[400px] object-cover rounded-3xl border border-white/10"
        />

        <div className="prose prose-invert prose-cyan max-w-none">
          <p className="text-xl text-white/80 leading-relaxed font-medium">
            {article.summary}
          </p>
          <div className="mt-8 text-white/60 leading-relaxed space-y-6 whitespace-pre-line">
            {article.content}
          </div>
        </div>
      </article>
    </Layout>
  );
}
