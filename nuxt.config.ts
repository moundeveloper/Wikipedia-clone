// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: "http://172.16.99.219:3000/api",
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
    },
  },
  devServer: {
    port: 4000,
  },
});
