// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Blog Matheus Brunelli, programação, carreira e muito Javascript!",
  tagline: "Compartilhando conhecimento de experiências reais",
  url: "https://mrbrunelli.github.io",
  baseUrl: "/blog/",
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
          blogTitle: "Postagens",
          blogDescription:
            "Matheus Brunelli, programação, carreira e muito Javascript!. Veja as últimas postagens:",
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
      metadata: [
        {
          name: "keywords",
          content:
            "matheus ricardo brunelli, matheus brunelli, brunelli, mrbrunelli, brunelli blog, blog, programação, dev, javascript, typescript",
        },
        {
          name: "og:image",
          content:
            "https://lh3.googleusercontent.com/fife/AAWUweV6ZG1YLwHb6r7Mu1EJ0MY76dSFMuKAZql7IbeTp63LsoVqstyYAcRh3xxlsM8jHwsAF40CXmfY5aqdfIZAj-onKdO5sNas23ARCoZPmfHTxtDJFlmcpV8RCE_T0O9DHrWQzqnp9nfg1mhOKIlEsd-cblr3l7gc5VavRf7XnEBeVkV6qQmr_1P5FE8pnc1oxuPDZoVBpolq0OjmvP80Ht3fGytCWiFX5LCaDfkEkY8AOzAgQsDA8OzfpZ1vs-Z18bN61fO-1n63idqxeqBUUtpZpS2CtT5HXOztATXDuSB8dg-0pooXXCxVFjja2ygoyybGjSe6FtIedYuyzGw23FCcnIepOXZQuFrrZn66XREdtOhVuAD6sn2pi-uuYdIV2noXwifEJEsB7MPdNKScri8LuS3Fhe4j8W7e9PWYqp124WQPqBMsk2q6OayMM_ngZj_mGwcrfZHjIHg92qt8ACyrWGftRmogM9YUvydH2V8elk2AZxC4dnO105f-eigm0Rs1z2fxWD_Cbe6SBGXOfidMwLRRihER0PjlUS4ZWfD74KMJ_1uJb1iqw1iS2z4qKxk6RpPq1_m6otG7-Nb4RLKNXIx-iWsP4k6xnUQs61bGjB8BWsG6gKCFtMrjfcxahlHnul3NHuBm8brhDwIKnZY_X5HFlkBDpdMxZBBFm66f2F02u5dKpO1ITMArgDcKEURz30VpJ5MkTLLf_O4EmiYJgaGN8ArTjA=w1920-h927",
        },
        {
          name: "twitter:image",
          content:
            "https://lh3.googleusercontent.com/fife/AAWUweV6ZG1YLwHb6r7Mu1EJ0MY76dSFMuKAZql7IbeTp63LsoVqstyYAcRh3xxlsM8jHwsAF40CXmfY5aqdfIZAj-onKdO5sNas23ARCoZPmfHTxtDJFlmcpV8RCE_T0O9DHrWQzqnp9nfg1mhOKIlEsd-cblr3l7gc5VavRf7XnEBeVkV6qQmr_1P5FE8pnc1oxuPDZoVBpolq0OjmvP80Ht3fGytCWiFX5LCaDfkEkY8AOzAgQsDA8OzfpZ1vs-Z18bN61fO-1n63idqxeqBUUtpZpS2CtT5HXOztATXDuSB8dg-0pooXXCxVFjja2ygoyybGjSe6FtIedYuyzGw23FCcnIepOXZQuFrrZn66XREdtOhVuAD6sn2pi-uuYdIV2noXwifEJEsB7MPdNKScri8LuS3Fhe4j8W7e9PWYqp124WQPqBMsk2q6OayMM_ngZj_mGwcrfZHjIHg92qt8ACyrWGftRmogM9YUvydH2V8elk2AZxC4dnO105f-eigm0Rs1z2fxWD_Cbe6SBGXOfidMwLRRihER0PjlUS4ZWfD74KMJ_1uJb1iqw1iS2z4qKxk6RpPq1_m6otG7-Nb4RLKNXIx-iWsP4k6xnUQs61bGjB8BWsG6gKCFtMrjfcxahlHnul3NHuBm8brhDwIKnZY_X5HFlkBDpdMxZBBFm66f2F02u5dKpO1ITMArgDcKEURz30VpJ5MkTLLf_O4EmiYJgaGN8ArTjA=w1920-h927",
        },
      ],
      hideableSidebar: false,
      navbar: {
        hideOnScroll: true,
        title: "Postagens",
        logo: {
          src: "img/pen.svg",
          href: "/",
        },
        items: [
          {
            to: "/tags",
            label: "Marcadores",
            position: "left",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/mrbrunelli",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub profile",
          },
        ],
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
        copyright: `Copyright © ${new Date().getFullYear()} Matheus Ricardo Brunelli. Built with Docusaurus 💛`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
