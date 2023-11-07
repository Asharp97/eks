// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@ant-design-vue/nuxt",
    'nuxt-quasar-ui',
  ],
  image: {
    imagekit: {
      baseURL: "https://ik.imagekit.io/sharp/eks/",
    },
  },
  antd: {
    imports: ["a-slider"],
  },
  supabase: {
    redirect: false,
  },
  css: [
    "@/assets/style/design-system.scss",
    "@/assets/style/style.scss",
    "@/assets/style/variables.scss",
  ],
});
