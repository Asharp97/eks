// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxt/image", "@nuxtjs/supabase"],
  image: {
    imagekit: {
      baseURL: "https://ik.imagekit.io/sharp/",
    },
  },
  supabase: {
    redirect: false,
  },
});
