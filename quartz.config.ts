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
          light: "#eff1f5",        // Base
          lightgray: "#ccd0da",    // Surface 0
          gray: "#bcc0cc",         // Surface 1
          darkgray: "#6c6f85",     // Subtext 0
          dark: "#4c4f69",         // Text
          secondary: "#1e66f5",    // Blue
          tertiary: "#179299",     // Teal
          highlight: "rgba(32, 159, 181, 0.15)", // Sapphire (low opacity)
          textHighlight: "#df8e1d88",            // Yellow (semi-transparent)
        },
        darkMode: {
          light: "#1e1e2e",        // Base
          lightgray: "#313244",    // Surface 0
          gray: "#45475a",         // Surface 1
          darkgray: "#a6adc8",     // Subtext 0
          dark: "#cdd6f4",         // Text
          secondary: "#89b4fa",    // Blue
          tertiary: "#94e2d5",     // Teal
          highlight: "rgba(116, 199, 236, 0.15)", // Sapphire (low opacity)
          textHighlight: "#f9e2af44",             // Yellow (semi-transparent)
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
