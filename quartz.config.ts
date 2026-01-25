import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Formetrix Docs",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"], //"assets"
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
    header: {
      name:"Sora",
      weights: [300,400,]
    }, // test : sora , Marcellus, Poiret One, Comfortaa
    body: "Work Sans",   // Source Sans Pro
    code: "IBM Plex Mono",     // A clean alternative to JetBrains Mono
  },
      colors: {
  lightMode: {
    light: "#f6f6f4",
    lightgray: "#ececea",
    gray: "#d1d1ce",
    darkgray: "#6b7280",
    dark: "#1f2937",
    secondary: "#475569",
    tertiary: "#7794c1",
    // Fixed: Compact RGBA or Hex8 is required to prevent conversion errors
    highlight: "rgba(36,43,53,0.12)",
    textHighlight: "rgba(245,158,11,0.28)",
  },
  darkMode: {
  light: "#161618",
  lightgray: "#393639",
  gray: "#646464",
  darkgray: "#d4d4d4",
  dark: "#ebebec",
  secondary: "#d4c9a5", // Updated
  tertiary: "#f0d989", // Updated
  highlight: "rgba(143,159,169,0.15)",
  textHighlight: "#e0a64e", // Updated
},
},
    }, // Correctly closing the theme object
  }, // Correctly closing the configuration object

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
