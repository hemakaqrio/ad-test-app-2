import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="nav-glass">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-gradient">
          JABBURR BLOG
        </Link>
        <div className="flex gap-8 items-center text-sm font-medium">
          <Link href="/" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">
            Home
          </Link>
          <Link href="/blog" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">
            Blog
          </Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
