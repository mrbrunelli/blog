// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Matheus Brunelli",
  tagline: "Blog Matheus Brunelli",
  url: "https://mrbrunelli.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "warn",
  favicon: "img/favicon.ico",
  organizationName: "mrbrunelli",
  projectName: "blog",
  deploymentBranch: "gh-pages",
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    localeConfigs: {
      pt: {
        label: "Português",
        direction: "ltr",
        htmlLang: "pt-BR",
      },
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: "/",
          showReadingTime: true,
          blogTitle: "Blog Matheus Brunelli",
          blogDescription: "Veja as últimas postagens",
          blogSidebarTitle: "Todos os posts",
          blogSidebarCount: "ALL",
          editUrl: "https://github.com/mrbrunelli/blog/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: false,
      navbar: {
        hideOnScroll: true,
        title: "Posts",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
          href: "/",
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Minhas redes sociais",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/mrbrunelli",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/mrbrunelli_",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/mrbrunelli",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Matheus Ricardo Brunelli. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
