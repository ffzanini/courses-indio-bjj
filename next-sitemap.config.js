/** @type {import('next-sitemap').IConfig} */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://cursos.indiobjj.com.br";

const config = {
  siteUrl: siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.8,
  exclude: ["/opengraph-image*", "/twitter-image*"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};

module.exports = config;
