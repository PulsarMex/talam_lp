// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Cambia al dominio final cuando lo tengas:
  // site: "https://talam.com.mx",

  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});