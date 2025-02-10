import { meta } from './meta';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/styles/index.css', 'vue3-carousel/carousel.css'],
  modules: ['@nuxt/image', '@nuxtjs/sitemap', 'vue3-carousel-nuxt'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: meta.title,
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', href: '/logo/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
        { rel: 'icon', href: '/logo/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
        { rel: 'apple-touch-icon', href: '/logo/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      // TODO: Add analytics later
      // script: [
      //   {
      //     key: 'plausible',
      //     defer: true,
      //     src: 'https://plausible.io/js/script.js',
      //     'data-domain': meta.domain,
      //   },
      // ],
      meta: [
        // TODO: Uncomment fields below when ready
        {
          name: 'description',
          content: meta.description,
        },
        {
          name: 'keywords',
          content: meta.keywords,
        },
        {
          name: 'twitter:title',
          content: meta.title,
        },
        {
          name: 'twitter:description',
          content: meta.description,
        },
        {
          name: 'twitter:image',
          content: meta.ogImage,
        },
        {
          name: 'twitter:image:alt',
          content: meta.title,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: meta.x,
        },
        {
          property: 'og:title',
          content: meta.title,
        },
        {
          property: 'og:description',
          content: meta.description,
        },
        {
          property: 'og:url',
          content: meta.url,
        },
        {
          property: 'og:image',
          content: meta.ogImage,
        },
        {
          property: 'og:image:secure_url',
          content: meta.ogImage,
        },
        {
          property: 'og:image:alt',
          content: meta.title,
        },
        {
          property: 'og:image:width',
          content: meta.ogImageWidth,
        },
        {
          property: 'og:image:height',
          content: meta.ogImageHeight,
        },
        {
          property: 'og:url',
          content: meta.url,
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ],
    },
  },
});
