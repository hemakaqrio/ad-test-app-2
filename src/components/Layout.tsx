import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full">
        {children}
      </main>
      <footer className="py-12 border-t border-white/5 text-center text-white/40 text-sm">
        © 2024 Jabburr Blog. Crafted with passion.
      </footer>
    </div>
  );
}
