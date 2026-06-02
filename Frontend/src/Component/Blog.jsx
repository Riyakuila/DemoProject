import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search, ChevronRight, Mail } from 'lucide-react';

// --- DUMMY BLOG DATA ---
const categories = ["All", "Tech Trends", "Development", "UI/UX Design", "Business Growth"];

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2026",
    category: "Development",
    excerpt: "Explore the shifting landscape of frontend architectures, edge computing, and how AI-assisted coding is changing production speeds forever.",
    date: "May 28, 2026",
    author: "Amit Sharma",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Why Minimalist UI is Driving 40% More User Conversions",
    category: "UI/UX Design",
    excerpt: "Clutter kills retention. We break down data-backed design frameworks that prioritize cognitive ease and speed up client checkout funnels.",
    date: "May 15, 2026",
    author: "Sarah Jenkins",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Scaling Your SaaS Architecture from 0 to 100k Users",
    category: "Tech Trends",
    excerpt: "A technical post-mortem on choosing database clusters, serverless computing pitfalls, and caching strategies that save thousands in monthly cloud bills.",
    date: "Apr 29, 2026",
    author: "Vikram Malhotra",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 4,
    title: "How to Build an AI Assistant Using Modern LLM APIs",
    category: "Development",
    excerpt: "A step-by-step developer's guide to context window management, system prompt fine-tuning, and keeping token costs low.",
    date: "Apr 12, 2026",
    author: "Amit Sharma",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Maximizing Digital Impact with Limited Marketing Budgets",
    category: "Business Growth",
    excerpt: "Stop burning cash on unoptimized ad campaigns. Learn how organic micro-funnels and clear copywriting can bootstrap early stage growth.",
    date: "Mar 22, 2026",
    author: "Rohan Das",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    featured: false
  }
];

// --- ANIMATION CONFIGS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Logic
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogs.find(b => b.featured);

  return (
    <div className="bg-black text-white font-sans selection:bg-orange-500 selection:text-black overflow-x-hidden min-h-screen">
      
      {/* --- HERO / HEADER HEADER --- */}
      <section className="relative pt-36 pb-12 px-6 lg:px-16 max-w-7xl mx-auto text-center">
        {/* Glow Layer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-orange-500 uppercase tracking-widest text-xs font-bold block mb-3"
        >
          INSIGHTS & ARTICLES
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
        >
          Knowledge To Shape Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Digital Future</span>
        </motion.h1>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Deep dives into clean code engineering, UI strategies, and industrial scaling ideas engineered by our team.
        </p>
      </section>

      {/* --- FEATURED HERO POST BLOCK --- */}
      {featuredPost && activeCategory === "All" && searchQuery === "" && (
        <section className="px-6 lg:px-16 max-w-7xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-neutral-950 border border-neutral-900/80 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-8 hover:border-orange-500/20 transition-all overflow-hidden"
          >
            <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto lg:h-80 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover opacity-60 group-hover:scale-101 group-hover:opacity-75 transition-all duration-500"
              />
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col justify-between h-full">
              <div>
                <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase inline-block mb-4">
                  FEATURED ARTICLE
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-amber-400 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-900">
                <div className="flex items-center space-x-4 text-[11px] text-gray-500 font-medium">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-orange-500/70" /> {featuredPost.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
                </div>
                <button className="flex items-center space-x-1 text-xs font-bold tracking-wider text-orange-500 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* --- SEARCH AND CATEGORY BAR CONTAINER --- */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-neutral-900 pb-8">
        {/* Dynamic Horizontal Filters */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all ${
                activeCategory === cat 
                  ? 'bg-orange-500 text-black border-orange-500 font-bold shadow-[0_0_15px_rgba(249,115,22,0.2)]' 
                  : 'bg-neutral-950 text-gray-400 border-neutral-900 hover:border-orange-500/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Input Interactive Search */}
        <div className="relative w-full md:w-72">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-500" />
          </span>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-neutral-950 border border-neutral-900 rounded-lg text-xs font-medium placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-all text-white"
          />
        </div>
      </section>

      {/* --- MAIN BLOG GRID --- */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto mb-20">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog) => (
              <motion.article
                layout
                initial="hidden"
                whileInView="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                variants={fadeInUp}
                key={blog.id}
                className="group bg-neutral-950 border border-neutral-900/80 rounded-xl p-5 hover:border-orange-500/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-lg overflow-hidden mb-4 aspect-video bg-neutral-900 border border-neutral-900/60">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover opacity-50 group-hover:scale-102 group-hover:opacity-75 transition-all duration-500"
                    />
                  </div>
                  <span className="text-[10px] tracking-widest text-orange-500 font-bold uppercase block mb-2">{blog.category}</span>
                  <h3 className="text-base font-bold mb-3 group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-5 line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-[10px] text-gray-500 font-semibold">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <button className="flex items-center space-x-1 text-xs font-bold text-orange-500/90 group-hover:text-orange-500">
                    <span>Read</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State Result Handling */}
        {filteredBlogs.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 border border-dashed border-neutral-900 rounded-xl">
            <p className="text-gray-500 text-sm">No articles match your selection criteria.</p>
          </motion.div>
        )}
      </section>

      {/* --- NEWSLETTER CAPTURE SLOT --- */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto mb-20">
        <div className="relative rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900/50 to-neutral-950 border border-orange-500/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="absolute right-0 top-0 opacity-[0.02] w-64 h-64 pointer-events-none transform translate-x-10 -translate-y-10">
            <Mail className="w-full h-full text-orange-500" />
          </div>
          
          <div className="max-w-md text-center md:text-left z-10">
            <h3 className="text-xl font-bold mb-1.5">Stay Ahead of the Tech Curve</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Get modular breakdowns of performance techniques and design components directly to your inbox. No spam.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto flex flex-col sm:flex-row gap-2 z-10">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="px-4 py-2.5 bg-black border border-neutral-800 rounded-lg text-xs font-medium text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/40 sm:w-64"
            />
            <button 
              type="submit" 
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold text-xs px-5 py-2.5 rounded-lg transition-all shadow-md whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}