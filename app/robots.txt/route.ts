export async function GET(): Promise<Response> {
  const robots = `User-agent: *
Allow: /

Sitemap: https://www.villadeldique.gob.ar/sitemap.xml

# Permitir acceso completo a Googlebot
User-agent: Googlebot
Allow: /

# Permitir acceso a otros bots importantes
User-agent: Bingbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

# Bloquear archivos innecesarios
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: *.json$
Disallow: *.xml$

# Crawl-delay para evitar sobrecarga
Crawl-delay: 1`

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
