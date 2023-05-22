import type { MarkdownInstance } from 'astro'
import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']


export const SiteMetadata = {
  title: '3Forges!',
  description: '3Forges is an App, for the world after wordpress.',
  author: {
    name: 'Boris Thérin',
    twitter: '@btherin',
    url: 'https://bherin.fr',
    email: 'boris@bherin.fr',
    summary: 'Outrageous JavaScripter.',
  },
  org: {
    name: 'Aux 3 Forges',
    twitter: '@aux3forges',
    url: 'https://aux3forges.io',
    email: 'info@aux3forges.io',
    summary:
      '3 Forges is a new generation web player, making SMBs first class citizens.',
  },
  location: 'Rivendell, Middle Earth',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/3forges/web.git',
  social: [
    {
      name: 'Email',
      link: 'mailto:info@aux3forges.io',
      icon: 'envelope',
    },
    {
      name: 'Phone',
      link: '555-5555',
      icon: 'telephone',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/3forges',
      icon: 'linkedin',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/3forges',
      icon: 'facebook',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/3forges',
      icon: 'instagram',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/3forges',
      icon: 'twitter',
    },
    {
      name: 'Github',
      link: 'https://github.com/3forges',
      icon: 'github',
    },
  ],
  buildTime: new Date(),
}

export const Logo = { 
    svg: '../images/svg/astro/logomark-light.svg',
    png: '../images/astro/full-logo-light.png'
}

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  // { name: 'Blog', href: 'blog' },
  { name: 'Portfolio', href: 'portfolio' },
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/3forges/web`

export const COMMUNITY_INVITE_URL = `https://3forges.io/chat`

export type UserSettingsMenu = Record<string, { text: string; link: string }[]>

export const User3fMenu: UserSettingsMenu = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' },
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }],
}