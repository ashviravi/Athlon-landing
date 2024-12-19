import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'Modern Docs',
    logo: '/logo.png',
    nav: [
      { title: 'Guide', link: '/guide' },
      { title: 'Components', link: '/components' },
      { title: 'API', link: '/api' },
    ],
    footer: 'Made with ❤️ by Modern Docs Team',
    socialLinks: {
      github: 'https://github.com/your-username/modern-docs',
    },
  },
  favicons: ['/favicon.ico'],
  autoAlias: false,
  outputPath: 'dist',
  base: '/',
  publicPath: '/',
  hash: true,
  styles: [`
    .dumi-default-header-left {
      width: auto !important;
    }
    .dumi-default-hero {
      padding: 120px 0 !important;
      background: linear-gradient(to right, #4F46E5, #7C3AED);
    }
    .dumi-default-hero-title {
      color: white !important;
    }
    .dumi-default-hero-description {
      color: rgba(255, 255, 255, 0.8) !important;
    }
  `],
});