// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxt/image"],
  image: {
    imagekit: {
      baseURL: "https://ik.imagekit.io/sharp/",
    },
  },
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL || "dev",
    supabaseKey: process.env.SUPABASE_KEY || "dev",
    // supabaseUrl:
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyaWx0dnVlaHpxYmZrcmN0cWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3NDc1NjAsImV4cCI6MjAxMTMyMzU2MH0.RvbgIAgGiE7VQvWefDpReiFNkwV_Eu0a9xgVXcI3hNs",
    // supabaseKey: "https://yriltvuehzqbfkrctqbg.supabase.co",
  },
});
