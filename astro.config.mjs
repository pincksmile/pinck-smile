import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://pinck-smile.netlify.app",
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/404"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const url = item.url;
        const now = new Date();

        // 1. Homepage (Top Priority)
        if (url === "https://pinck-smile.netlify.app/" || url === "https://pinck-smile.netlify.app") {
          item.changefreq = "daily";
          item.priority = 1.0;
          item.lastmod = now;
          return item;
        }

        // 2. Product Catalog & Individual Product Pages (High Priority Commercial Pages)
        if (url.includes("/products")) {
          item.changefreq = "daily";
          item.priority = 0.9;
          item.lastmod = now;
          return item;
        }

        // 3. Pricing & Bundles
        if (url.includes("/pricing")) {
          item.changefreq = "weekly";
          item.priority = 0.85;
          item.lastmod = now;
          return item;
        }

        // 4. Educational Blog & Articles (Knowledge & SEO Engine)
        if (url.includes("/blog")) {
          item.changefreq = "weekly";
          item.priority = 0.85;
          item.lastmod = now;
          return item;
        }

        // 5. About, Contact & Trust Pages
        if (url.includes("/about") || url.includes("/contact")) {
          item.changefreq = "monthly";
          item.priority = 0.8;
          item.lastmod = now;
          return item;
        }

        return item;
      },
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

