export interface Article {
  title: string;
  date: string;
  summary: string;
  content: string;
  slug: string;
  image: string;
}

export const articles: Article[] = [
  {
    title: "The Future of Web Development",
    date: "March 15, 2024",
    summary: "Exploring the latest trends in the web ecosystem, from server components to edge computing.",
    content: "Content for the future of web development goes here. Next.js and React are leading the way in providing a seamless experience for both developers and users.",
    slug: "future-of-web-dev",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Mastering Glassmorphism in CSS",
    date: "April 2, 2024",
    summary: "Learn how to create beautiful, semi-transparent UI elements that feel premium and modern.",
    content: "Glassmorphism is more than just blur. It's about light, shadows, and subtle borders that create a sense of depth and hierarchy.",
    slug: "mastering-glassmorphism",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Designing for Performance",
    date: "May 10, 2024",
    summary: "Why speed is a feature and how you can optimize your web applications for the best user experience.",
    content: "Performance is not just about loading times; it's about perceived speed and responsiveness. Optimized assets and efficient code are key.",
    slug: "designing-for-performance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Art of Minimalist UI",
    date: "June 20, 2024",
    summary: "How stripping away the unnecessary can lead to more powerful and intuitive user experiences.",
    content: "Minimalism is not about lack of features; it's about clarity of purpose. Every element should serve a specific function and contribute to the overall message.",
    slug: "minimalist-ui",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Exploring Next.js 15 Features",
    date: "July 5, 2024",
    summary: "A deep dive into the latest updates in Next.js, including enhanced server components and faster builds.",
    content: "Next.js continues to evolve at a rapid pace. Version 15 brings significant performance improvements and new primitives for data fetching.",
    slug: "nextjs-15-features",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80"
  }
];
