// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: "http://192.168.1.193:3000/api",
      appSecret: "",
    },
  },
  app: {
    head: {
      title: "Wikipedia",
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/assets/css/global.css",
        },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/712c8ec23d.js",
          async: true,
          crossorigin: "anonymous",
        },
      ],
    },
  },
  devServer: {
    port: 4000,
  },
});
