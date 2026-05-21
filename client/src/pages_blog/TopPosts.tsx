import { Link } from "wouter";
import { ChevronRight, TrendingUp, Clock, Tag } from "lucide-react";
import { getAllPosts } from "@/data/posts";
import type { Post } from "@/data/posts";

// ─── Algoritmo de Score ────────────────────────────────────────────────────
// Semente baseada em janelas de 30 dias: muda automaticamente a cada ~30 dias
// sem nenhuma intervenção manual.
function getMonthSeed(): number {
  return Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 30));
}

// Pseudo-random determinístico baseado na semente (mulberry32)
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s |= 0;
    s = s + 0x6d2b79f5 | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function scorePost(post: Post, now: number, rand: number): number {
  let score = 0;

  // 1. Frescor — posts dos últimos 60 dias ganham bônus extra
  const ageMs = now - new Date(post.date).getTime();
  const ageDays = ageMs / (1000 * 60 * 60 * 24);
  if (ageDays <= 30)  score += 40;
  else if (ageDays <= 60)  score += 25;
  else if (ageDays <= 120) score += 12;
  else if (ageDays <= 240) score += 6;

  // 2. Profundidade — posts mais longos (readTime maior) tendem a ser mais completos
  score += Math.min(post.readTime * 2.5, 20);

  // 3. Riqueza de tags — mais tags = mais abrangente
  score += Math.min(post.tags.length * 1.5, 12);

  // 4. Ruído aleatório controlado pela semente mensal (0–18 pts)
  // Garante diversidade e rotação suave a cada 30 dias
  score += rand * 18;

  return score;
}

function getTop5Posts(): Post[] {
  const all = getAllPosts();
  const now = Date.now();
  const seed = getMonthSeed();
  const rand = seededRandom(seed);

  // Scorar todos os posts
  const scored = all.map(post => ({
    post,
    score: scorePost(post, now, rand()),
  }));

  // Ordenar por score desc
  scored.sort((a, b) => b.score - a.score);

  // Garantir diversidade de categorias no top 5:
  // nunca mais de 2 posts da mesma categoria
  const result: Post[] = [];
  const categoryCount: Record<string, number> = {};

  for (const { post } of scored) {
    if (result.length >= 5) break;
    const cat = post.category;
    if ((categoryCount[cat] ?? 0) >= 2) continue;
    result.push(post);
    categoryCount[cat] = (categoryCount[cat] ?? 0) + 1;
  }

  // Fallback: se não chegou a 5 (ex.: poucas categorias), completa sem restrição
  if (result.length < 5) {
    for (const { post } of scored) {
      if (result.length >= 5) break;
      if (!result.find(p => p.id === post.id)) result.push(post);
    }
  }

  return result;
}

// ─── Labels de posição ─────────────────────────────────────────────────────
const RANK_LABELS = ["#1", "#2", "#3", "#4", "#5"];
const RANK_STYLES = [
  "text-[#00FF88] border-[#00FF88]",   // 1º — neon green
  "text-[#FF6B35] border-[#FF6B35]",   // 2º — orange
  "text-[#8A63F5] border-[#8A63F5]",   // 3º — purple
  "text-[#0099FF] border-[#0099FF]",   // 4º — blue
  "text-[#FFD700] border-[#FFD700]",   // 5º — gold
];

// ─── Componente ────────────────────────────────────────────────────────────
export default function TopPosts() {
  const top5 = getTop5Posts();

  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6">
      <div className="container max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#00FF88] bg-opacity-10 border border-[#00FF88] border-opacity-40">
            <TrendingUp size={18} className="text-[#00FF88]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
              Leituras Recomendadas
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5 font-mono">
              seleção atualizada automaticamente · top 5
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {top5.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <a className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-[rgba(0,255,136,0.15)] bg-[rgba(26,26,26,0.6)] hover:border-[rgba(0,255,136,0.6)] hover:bg-[rgba(26,26,26,0.9)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,255,136,0.08)]">

                {/* Rank badge */}
                <div className={`shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center font-mono font-bold text-sm ${RANK_STYLES[index]}`}>
                  {RANK_LABELS[index]}
                </div>

                {/* Thumbnail */}
                <div className="shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-md overflow-hidden bg-muted hidden xs:block">
                  <img
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[rgba(255,107,53,0.1)] text-[#FF6B35]">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime} min
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold leading-snug text-foreground group-hover:text-[#00FF88] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Tags — apenas 2 */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1">
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <ChevronRight
                  size={16}
                  className="shrink-0 text-muted-foreground group-hover:text-[#00FF88] group-hover:translate-x-1 transition-all duration-200 mt-1"
                />
              </a>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-xs text-muted-foreground text-center mt-5 font-mono opacity-60">
          ✦ curadoria algorítmica · atualiza a cada 30 dias
        </p>
      </div>
    </section>
  );
}
