// @ts-check
// Main settings file for the site. Docusaurus reads this when it builds.
// Reference: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'John Marks',
  tagline: 'Senior technical writer',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Where the site is published: https://johnbmarks.github.io/portfolio/
  url: 'https://johnbmarks.github.io',
  baseUrl: '/portfolio/',
  trailingSlash: false,

  // GitHub account and repository that hold the site
  organizationName: 'johnbmarks',
  projectName: 'portfolio',

  // Stop the build if any internal link is broken
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // The "docs" feature powers the Portfolio section (pages in /docs)
        docs: {
          path: 'docs',
          routeBasePath: 'portfolio',
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Blog',
          blogDescription: 'Articles about technical writing and documentation',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'John Marks',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'portfolioSidebar',
            position: 'left',
            label: 'Portfolio',
          },
          {to: '/resume', label: 'Resume', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/johnbmarks/portfolio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site',
            items: [
              {label: 'Portfolio', to: '/portfolio'},
              {label: 'Resume', to: '/resume'},
              {label: 'About', to: '/about'},
              {label: 'Blog', to: '/blog'},
            ],
          },
          {
            title: 'Elsewhere',
            items: [
              {label: 'GitHub', href: 'https://github.com/johnbmarks'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} John Marks. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
