import { defineUserConfig } from 'vuepress'
import { localTheme } from './theme'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export const themeOptions: DefaultThemeOptions = {
  lastUpdated: true,
  contributors: true,
  logo: '/images/hero.png',
  repo: 'sdiricco/simone-di-ricco',
  editLinkText: 'Edit this page on GitHub',
  docsDir: 'docs',
  contributorsText: 'Author',
  navbar: [
    {
      text: 'Section 1',
      children: [
        {
          text: 'Article 1',
          link: '/section-1/article-1/README.md'
        },
        {
          text: 'Article 2',
          link: '/section-1/article-2/README.md'
        }
      ]
    },
  ]
}

export default defineUserConfig({
  lang: 'en-US',
  title: 'Ciao!',
  description: 'Qui trovi i miei appunti di informatica',
  plugins: [
    searchPlugin(),
  ],
  theme: localTheme(themeOptions),
})
