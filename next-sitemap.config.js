/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.deltaes.co.kr",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/profile", "/profile/*", "/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/profile", "/profile/", "/profile/*", "/api/", "/api/*"],
      },
    ],
  },
};

module.exports = config;
