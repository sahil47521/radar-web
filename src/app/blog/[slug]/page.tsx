import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-40 pb-24">
        <article className="container mx-auto px-6 max-w-3xl">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-navy/40 hover:text-navy font-bold text-sm mb-12 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Journal
          </Link>
          
          <div className="mb-12">
            <div className="inline-flex px-3 py-1 rounded-full bg-teal/10 text-teal text-[10px] font-black uppercase tracking-tighter mb-6">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-navy mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm font-bold text-navy/60">
                <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center">
                    <User className="w-4 h-4" />
                </div>
                {post.author}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-navy/40">
                <Calendar className="w-4 h-4" /> {post.date}
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-navy max-w-none text-navy/80 leading-relaxed space-y-8">
            <p className="text-xl font-medium text-navy leading-relaxed">
              {post.excerpt}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2 className="text-2xl font-black text-navy mt-12 mb-6">Breaking Down the noise</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <blockquote className="border-l-4 border-teal pl-6 italic text-navy/60 text-xl">
              "The most valuable asset in the modern world isn't information, it's the filter that helps you find the right information."
            </blockquote>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
