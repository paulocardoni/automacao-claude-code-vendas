import { Link, useRoute } from "wouter";
import { getPostBySlug, getRelatedPosts } from "@/data/posts";
import { ChevronLeft, Calendar, Clock, User, Share2, ArrowRight, Twitter, Instagram, Music } from "lucide-react";
import { useEffect } from "react";
import { Streamdown } from "streamdown";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const post = match ? getPostBySlug(params?.slug as string) : null;
  const relatedPosts = post ? getRelatedPosts(post.id) : [];

  useEffect(() => {
    // Update page title and meta tags for SEO
    if (post) {
      document.title = `${post.title} | Blog Formação Agêntica`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.seoDescription);
      }
      
      // Update OG tags for social sharing
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', post.title);
      }
      
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', post.seoDescription);
      }
      
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', post.imageUrl);
      }
      
      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">Post não encontrado</h1>
          <Link href="/blog">
            <a className="text-accent hover:underline flex items-center gap-2 justify-center text-sm sm:text-base">
              <ChevronLeft size={20} /> Voltar ao blog
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data for Article */}
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "${post.title}",
          "description": "${post.seoDescription}",
          "image": "${post.imageUrl}",
          "datePublished": "${post.date}",
          "author": {
            "@type": "Organization",
            "name": "${post.author}"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Formação Agêntica",
            "logo": "https://formacaoagentica.com.br/favicon.ico"
          }
        }`}
      </script>

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background border-b neon-border">
        <div className="container py-3 sm:py-4 flex items-center justify-between">
          <Link href="/blog">
            <a className="text-lg sm:text-2xl font-bold accent-text font-mono">
              FORMAÇÃO AGÊNTICA
            </a>
          </Link>
          <Link href="/blog">
            <a className="flex items-center gap-2 text-accent hover:underline text-sm sm:text-base">
              <ChevronLeft size={18} /> Voltar
            </a>
          </Link>
        </div>
      </header>

      {/* Hero Image - Responsive */}
      <section className="relative h-48 sm:h-64 md:h-96 lg:h-[500px] overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.imageAlt}
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </section>

      {/* Article Content */}
      <article className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6">
        <div className="container max-w-4xl mx-auto">
          {/* Meta Information */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-accent bg-opacity-10 text-accent rounded-full font-mono font-bold text-xs sm:text-sm">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-xs sm:text-sm">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-xs sm:text-sm">
                <Clock size={14} />
                {post.readTime} min
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-xs sm:text-sm">
                <User size={14} />
                {post.author}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {post.title}
            </h1>

            {/* TL;DR */}
            <div className="p-4 sm:p-6 bg-card border-l-4 border-accent rounded-lg mb-6 sm:mb-8">
              <p className="text-accent font-bold mb-2 text-xs sm:text-sm uppercase tracking-wider">TL;DR</p>
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                {post.tldr}
              </p>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3 sm:gap-4 pb-6 sm:pb-8 border-b neon-border">
              <span className="text-muted-foreground text-xs sm:text-sm">Compartilhar:</span>
              <button
                onClick={() => {
                  const url = window.location.href;
                  const text = `Leia: ${post.title}`;
                  if (navigator.share) {
                    navigator.share({ title: post.title, text, url });
                  } else {
                    navigator.clipboard.writeText(url);
                  }
                }}
                className="p-2 hover:bg-card rounded-lg transition-colors"
                title="Compartilhar"
              >
                <Share2 size={18} className="text-accent" />
              </button>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none mb-12 sm:mb-16 text-sm sm:text-base">
            <Streamdown>{post.content}</Streamdown>
          </div>

          {/* Author Bio */}
          <div className="p-4 sm:p-8 bg-card border neon-border rounded-lg mb-12 sm:mb-16">
            <div className="flex gap-4 sm:gap-6 items-start">
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-accent flex-shrink-0"></div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{post.author}</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  Especialista em Automação Agêntica e Performance Digital. Transformando agências através de IA, Claude Code e estratégias GEO.
                </p>
                <a
                  href="https://formacaoagentica.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-bold flex items-center gap-2 text-sm sm:text-base"
                >
                  Conheça a Formação Agêntica <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-card border neon-border rounded-full text-xs sm:text-sm hover:border-accent transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="border-t neon-border pt-12 sm:pt-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Artigos Relacionados</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <a className="post-card group h-full flex flex-col">
                      <div className="relative overflow-hidden rounded-lg aspect-video bg-muted mb-3 sm:mb-4">
                        <img
                          src={relatedPost.imageUrl}
                          alt={relatedPost.imageAlt}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-accent text-xs font-mono font-bold mb-2">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2 text-sm sm:text-base">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4 flex-grow">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-accent font-mono font-bold text-xs sm:text-sm">
                        Ler <ChevronLeft size={16} className="rotate-180" />
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-card border-t neon-border px-4 sm:px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Quer Aprender Mais?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Acesse a <span className="text-accent font-bold">Formação Agêntica</span> e domine as ferramentas que estão redefinindo o futuro do marketing digital.
          </p>
          <a
            href="https://formacaoagentica.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground rounded-lg font-bold hover:shadow-lg hover:shadow-accent hover:shadow-opacity-50 transition-all duration-300 text-sm sm:text-base md:text-lg"
          >
            Acessar Formação Agêntica
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t neon-border px-4 sm:px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h4 className="font-bold text-accent mb-3 sm:mb-4 text-sm sm:text-base">Formação Agêntica</h4>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Blog especializado em automação com IA e estratégias GEO para agências de marketing.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Links</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/blog">
                    <a className="text-muted-foreground hover:text-accent transition-colors">
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="https://formacaoagentica.com.br/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    Curso
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    Termos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contato</h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                <a href="mailto:atendimento.claudetrafego@gmail.com" className="hover:text-accent transition-colors">
                  atendimento.claudetrafego@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t neon-border pt-6 sm:pt-8">
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://x.com/IA_para_GDT" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.instagram.com/claudecodegtt/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@claudecodegtt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Music size={24} />
              </a>
            </div>
            <p className="text-center text-muted-foreground text-xs sm:text-sm">&copy; 2026 Formação Agêntica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
