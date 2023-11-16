// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@ant-design-vue/nuxt",
    "nuxt-quasar-ui",
    "@vueuse/nuxt",
  ],
  image: {
    provider: "imagekit",
    imagekit: {
      baseURL: "https://ik.imagekit.io/sharp/eks/",
      modifiers: {
        format: "webp",
      },
    },
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
