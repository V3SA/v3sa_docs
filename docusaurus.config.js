// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: " ",
  tagline: "Building the bridge between DeFi and Traditional Finance with a suite of unique protocols.",
  url: "https://docs.v3sa.finance",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/header.png",
  organizationName: "V3SA", // Usually your GitHub org/user name.
  projectName: "Box Suites", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/v3sa",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/v3sa/BoxSuites"
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
        title: "- Home Page",
        logo: {
          alt: "Triple Box Logo",
          src: "img/triplebox.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Learn",
          },
          { to: "/blog", label: "Updates", position: "left" },
          {
            href: "https://phantom.app/",
            label: "Install Wallet",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Blue Box Suites",
                to: "/docs/box-suites/blue-box-suites",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://Github.com/v3sa", // TODO: fill this in
              },
              {
                label: "Website",
                href: "https://v3sa.finance", // TODO: fill this in
              },
              {
                label: "Twitter",
                href: "https://twitter.com/v3sa_fi",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Updates",
                to: "/blog",
              },
              {
                label: "Rick",
                href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} V3SA, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
