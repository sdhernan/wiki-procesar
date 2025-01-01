// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: "https://sdhernan.github.io",
  base: "wiki-procesar/",
  integrations: [starlight({
   
    title: "Wiki Docs",
    defaultLocale: "root",
    locales: {
      root: {
        label: "Español",
        lang: "es",
      },
    },
    social: {
      github: "https://github.com/sdhernan",
    },
    sidebar: [
      {
        label: "Comienza a explorar",
        items: [
          // Each item here is one entry in the navigation menu.
          { label: "Introducción", slug: "guias/introduccion" },
          {
            label: "Documentación ecológica",
            slug: "guias/impacto-ecologico",
          },
        ],
      },
      {
        label: "Documentos",
        items: [
          // Each item here is one entry in the navigation menu.
        ],
      },
      {
        label: "Servicios REST",
        items: [
          // Each item here is one entry in the navigation menu
          { label: "Verificar Correo Trabajador", slug: "api/verificar-correo" },
          { label: "Verificar Teléfono Trabajador", slug: "api/verificar-telefono" },
        ],
      },
      {
        label: "Referencias",
        autogenerate: { directory: "reference" },
      },
      {
        label: "Ayuda",
        autogenerate: { directory: "reference" },
      },
    ],
  }),markdoc()],
  devToolbar: {
    enabled: false,
  },
});