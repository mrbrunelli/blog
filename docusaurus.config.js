// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Matheus Brunelli",
  tagline: "Blog Matheus Brunelli",
  url: "https://github.com/mrbrunelli/blog",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "mrbrunelli", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      navbar: {
        title: "Blog",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
          href: "/blog",
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Social",
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
          {
            title: "Sobre mim",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Matheus Ricardo Brunelli`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
