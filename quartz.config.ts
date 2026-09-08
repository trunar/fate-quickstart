import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Fate Quickstart",
    pageTitleSuffix: " | Fate Quickstart",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "trunar.github.io/fate-quickstart",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans",
        body: "Noto Sans",
        code: "Noto Sans Mono",
      },
      colors: {
        lightMode: {
          light: "#fafafb",       // Window/background
          lightgray: "#deddda",   // Borders
          gray: "#9a9996",        // Stronger borders / graph
          darkgray: "#3d3846",    // Body text
          dark: "#241f31",        // Headers/icons
          secondary: "#3584e4",   // Adwaita blue accent
          tertiary: "#1c71d8",    // Hover/visited
          highlight: "rgba(53, 132, 228, 0.15)",
          textHighlight: "#f5c21144",
        },
        darkMode: {
          light: "#222226",
          lightgray: "#3d3846",
          gray: "#5e5c64",
          darkgray: "#ffffffcc",
          dark: "#ffffff",
          secondary: "#62a0ea",
          tertiary: "#3584e4",
          highlight: "rgba(98, 160, 234, 0.15)",
          textHighlight: "#f6d32d44",
        },
      },
    },
  },
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
