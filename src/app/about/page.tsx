import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            About the <span className="text-gradient">Creator</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500" />
        </header>

        <section className="glass-card p-8 md:p-12 space-y-8">
          <div className="prose prose-invert prose-cyan max-w-none">
            <p className="text-xl text-white/80 leading-relaxed font-medium">
              Welcome to my personal blog. I'm a developer and designer passionate about creating
              digital experiences that are as beautiful as they are functional.
            </p>
            <div className="text-white/60 leading-relaxed space-y-6">
              <p>
                This space is dedicated to exploring the intersection of technology, design, and
                productivity. Whether it's deep diving into a new CSS technique or discussing the
                latest in web standards, I aim to share insights that help other creators build a
                better web.
              </p>
              <p>
                The blog itself is built using <strong>Next.js</strong>, <strong>Tailwind CSS</strong>,
                and a healthy dose of <strong>Glassmorphism</strong> principles to create a premium,
                modern aesthetic.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10">
            <div className="space-y-2">
              <h3 className="text-gradient uppercase tracking-widest text-sm font-bold">Location</h3>
              <p className="text-white/80">Digital Nomad / Earth</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-gradient uppercase tracking-widest text-sm font-bold">Stacks</h3>
              <p className="text-white/80">React, Next.js, Node, TypeScript</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
