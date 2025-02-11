// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Native Android Widget',
  tagline: 'Build Android Widgets with React Native',
  url: 'https://sAleksovski.github.io/',
  baseUrl: '/react-native-android-widget',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sAleksovski', // Usually your GitHub org/user name.
  projectName: 'react-native-android-widget', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../src/index.tsx'],
        tsconfig: '../tsconfig.json',
        out: 'public-api',
        disableSources: true,
        readme: 'none',
        sort: 'required-first',
        visibilityFilters: {
          private: false,
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sAleksovski/react-native-android-widget/tree/master/docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-S7YD6GC3T0',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og-image.png',
      metadata: [
        {
          name: 'keywords',
          content: [
            'react native widget',
            'react native widgets',
            'react native android widget',
            'expo widget',
            'expo widgets',
            'react native expo widget',
            'react-native-android-widget',
          ].join(','),
        },
      ],
      navbar: {
        title: 'React Native Android Widget',
        logo: {
          alt: 'React Native Android Widget Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'public-api/index',
            position: 'left',
            label: 'Public API',
          },
          {
            position: 'right',
            href: 'https://www.buymeacoffee.com/sAleksovski',
            className: 'header-buymeacoffee-link',
          },
          {
            href: 'https://github.com/sAleksovski/react-native-android-widget',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Stefan Aleksovski. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
      announcementBar: {
        id: 'star-on-github', // Increment on change
        content:
          '⭐️ If you like React Native Android Widget, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/sAleksovski/react-native-android-widget">GitHub</a>',
      },
    }),
};

module.exports = config;
