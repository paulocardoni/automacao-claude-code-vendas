import { Link } from "wouter";
import { getAllPosts } from "@/data/posts";
import { ChevronRight, Calendar, Clock, Tag, Zap, Twitter, Instagram, Music } from "lucide-react";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Formação Agêntica - Blog",
          "description": "Blog especializado em automação com IA, Claude Code e estratégias GEO para agências de marketing",
          "url": "https://formacaoagentica.com.br/blog",
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
          <Link href="/">
            <a className="text-lg sm:text-2xl font-bold accent-text font-mono">
              FORMAÇÃO AGÊNTICA
            </a>
          </Link>
          <nav className="hidden md:flex gap-6 md:gap-8">
            <a href="/blog" className="text-foreground hover:text-accent transition-colors text-sm">
              Blog
            </a>
            <a href="https://formacaoagentica.com.br/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors text-sm">
              Curso
            </a>
            <a href="mailto:atendimento.claudetrafego@gmail.com" className="text-foreground hover:text-accent transition-colors text-sm">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Compact for Mobile with Icon */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-card to-background px-4 sm:px-6 relative overflow-hidden">
        {/* Ícone decorativo laranja no canto superior esquerdo */}
        <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent bg-opacity-20 border-2 border-accent flex items-center justify-center">
          <Zap className="text-accent" size={24} />
        </div>

        <div className="container max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent bg-opacity-10 border neon-border rounded-full">
            <span className="text-accent font-mono text-xs sm:text-sm font-bold">
              BLOG ESPECIALIZADO
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
            Trilha de notícias e aprendizado para profissionais e agências
          </h1>
          
          
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
            <a
              href="https://formacaoagentica.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-accent-foreground rounded-lg font-bold hover:shadow-lg hover:shadow-accent hover:shadow-opacity-50 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              Conhecer o Curso <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Posts Grid - Compact spacing */}
      <section className="py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Últimos Artigos</h2>
            <div className="w-12 sm:w-16 h-1 gradient-accent rounded-full"></div>
          </div>

          <div className="grid gap-6 sm:gap-8 md:gap-10">
            {posts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <a className="post-card group block">
                  <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center">
                    {/* Image */}
                    <div className="md:col-span-1 order-2 md:order-1">
                      <div className="relative overflow-hidden rounded-lg aspect-video bg-muted">
                        <img
                          src={post.imageUrl}
                          alt={post.imageAlt}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 order-1 md:order-2">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-accent bg-opacity-10 text-accent rounded text-xs sm:text-sm font-mono font-bold">
                          {post.category}
                        </span>
                        <span className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString('pt-BR')}
                        </span>
                        <span className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime} min
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-accent transition-colors leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-accent font-mono font-bold text-sm sm:text-base">
                        Ler artigo <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs text-muted-foreground flex items-center gap-1">
                            <Tag size={12} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card border-t neon-border px-4 sm:px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Pronto para Automatizar sua Agência?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Acesse a <span className="text-accent font-bold">Formação Agêntica</span> e aprenda como implementar automação com IA em sua operação.
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
                  <a href="/blog" className="text-muted-foreground hover:text-accent transition-colors">
                    Blog
                  </a>
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
