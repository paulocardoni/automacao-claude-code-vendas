#!/usr/bin/env node
/**
 * gera-sitemap.mjs
 * Lê client/src/data/posts.ts e gera client/public/sitemap.xml automaticamente.
 * 
 * Uso:
 *   node gera-sitemap.mjs
 * 
 * Adicionar ao fluxo de deploy:
 *   node gera-sitemap.mjs && git add client/public/sitemap.xml
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://formacaoagentica.com.br';
const POSTS_FILE = resolve(__dirname, 'client/src/data/posts.ts');
const SITEMAP_FILE = resolve(__dirname, 'client/public/sitemap.xml');

// Mapa slug → imagem (atualizar quando adicionar post com imagem nova)
const IMAGE_MAP = {
  'revolucao-agentes-ia': null,
  'claude-code-google-ads-meta-ads': null,
  'geo-generative-engine-optimization': null,
  'analytics-conversacional-tempo-real': null,
  'elevacao-ia-conteudo-citado': null,
  'claude-code-instalacao-5-minutos': null,
  'superpoderes-claude-code-skills': null,
  'por-que-creditos-claude-acabam': 'post9-tokens.png',
  'fim-da-tela-em-branco-carrosseis-claude-code': 'post10-carrossel.png',
  'meta-ads-ai-connectors-claude-code-gerenciador-anuncios': 'post11-meta-connectors.png',
  'claude-cowork-equipe-digital-agentes-agencia': 'post12-claude-cowork.png',
  'limites-dobrados-parceria-anthropic-spacex-claude-code': 'post13-anthropic-spacex.png',
  'claude-dreaming-ia-aprende-sozinha-dorme': 'post14-claude-dreaming.png',
  'ia-demissoes-gerente-agentes-blindar-carreira': 'post15-gerente-agentes.png',
  'whatsapp-agents-conversoes-7x-email-2026': 'post16-whatsapp-agents.png',
  'como-criar-agente-ia-whatsapp-passo-a-passo': 'post17-whatsapp-guia.png',
  'alem-do-chat-6-maneiras-dominar-claude-agencia-2026': 'post18-6-maneiras-claude.png',
  'agencia-autonoma-ecossistema-marketing-claude-code': 'post19-agencia-autonoma.png',
  'graphify-economia-71x-tokens-claude-code': 'post20-graphify-tokens.png',
  'claude-code-routines-piloto-automatico-campanhas-ads': 'post21-routines-ads.png',
  'playwright-mcp-olhos-claude-auditar-pixels-landing-pages': 'post22-playwright-mcp.png',
  'criativos-em-massa-claude-code-anuncios': 'post24-criativos-em-massa.png',
  'guia-definitivo-instalar-treinar-claude-code-midia': 'post25-instalar-treinar-claude-code.png',
  'nodejs-gestores-midia-cerebro-conecta-pc-ia': 'post26-nodejs-gestores-ia.png',
  'rastreamento-agentico-fim-tags-manuais-atribuicao-inteligente': 'post27-rastreamento-agentico-tags-manuais.png',
  'dominar-terminal-plugins-skills-git-claude-code': 'post28-terminal-plugins-skills-git.png',
  'morte-vaidade-dashboard-inflacao-atribuicional-claude-code': 'post29-inflacao-atribuicional-dashboard.png',
  'servidores-mcp-essenciais-ads-analytics-claude-code': 'post30-servidores-mcp-ads-analytics.png',
  'producao-massa-criativos-prompts-routines-agentes-2026': 'post31-producao-massa-criativos-routines.png',
  'fim-terceirizacao-landing-pages-claude-code-github-cloudflare': 'post32-landing-page-claude-code-cloudflare.png',
  'automatizar-dashboards-midia-claude-code-mcp': 'post33-dashboards-midia-automatizados.png',
};

function extractPosts(source) {
  const posts = [];

  // Extrai blocos slug + date + title + imageAlt do posts.ts via regex
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  const dateRegex = /date:\s*["'](\d{4}-\d{2}-\d{2})["']/g;
  const titleRegex = /title:\s*["']([^"']+)["']/g;
  const imageAltRegex = /imageAlt:\s*["']([^"']+)["']/g;

  const slugs = [...source.matchAll(slugRegex)].map(m => m[1]);
  const dates = [...source.matchAll(dateRegex)].map(m => m[1]);
  const titles = [...source.matchAll(titleRegex)].map(m => m[1]);
  const alts = [...source.matchAll(imageAltRegex)].map(m => m[1]);

  // Filtra slugs que são reais (ignora linhas da interface/exports)
  const validSlugs = slugs.filter(s => !s.includes(' ') && s.length > 3);

  for (let i = 0; i < validSlugs.length; i++) {
    posts.push({
      slug: validSlugs[i],
      date: dates[i] || '2026-01-01',
      title: titles[i] || '',
      imageAlt: alts[i] || '',
    });
  }

  return posts;
}

function urlBlock(loc, lastmod, priority, changefreq, imageFile, imageAlt) {
  const imgTag = imageFile ? `
    <image:image>
      <image:loc>${BASE_URL}/blog-images/${imageFile}</image:loc>
      <image:title>${imageAlt.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</image:title>
    </image:image>` : '';

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${imgTag}
  </url>`;
}

function generateSitemap(posts) {
  const today = new Date().toISOString().split('T')[0];

  // Ordena por data decrescente
  posts.sort((a, b) => b.date.localeCompare(a.date));
  const lastPostDate = posts[0]?.date || today;

  const staticUrls = [
    urlBlock(`${BASE_URL}/`, lastPostDate, '1.0', 'weekly'),
    urlBlock(`${BASE_URL}/blog`, lastPostDate, '0.9', 'daily'),
  ];

  const postUrls = posts.map(p =>
    urlBlock(
      `${BASE_URL}/blog/${p.slug}`,
      p.date,
      '0.8',
      'monthly',
      IMAGE_MAP[p.slug] || null,
      p.imageAlt
    )
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Páginas principais -->
${staticUrls.join('\n')}

  <!-- Posts do blog (${posts.length} posts) -->
${postUrls.join('\n')}

</urlset>`;
}

// Main
const source = readFileSync(POSTS_FILE, 'utf-8');
const posts = extractPosts(source);

if (posts.length === 0) {
  console.error('❌ Nenhum post encontrado. Verifique o caminho do posts.ts.');
  process.exit(1);
}

const sitemap = generateSitemap(posts);
writeFileSync(SITEMAP_FILE, sitemap, 'utf-8');

console.log(`✅ sitemap.xml gerado com ${posts.length + 2} URLs:`);
console.log(`   • 2 páginas estáticas (home + blog)`);
console.log(`   • ${posts.length} posts`);
console.log(`   • Salvo em: client/public/sitemap.xml`);
console.log('');
console.log('📌 Próximo passo:');
console.log('   git add client/public/sitemap.xml && git commit -m "seo: sitemap atualizado"');
