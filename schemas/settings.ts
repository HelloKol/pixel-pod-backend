import {CogIcon} from '@sanity/icons'
import * as demo from '../lib/demo.data'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'siteHeader',
      title: 'Site Header',
    },
    {
      name: 'siteFooter',
      title: 'Site Footer',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your blog.',
      title: 'Title',
      type: 'string',
      initialValue: demo.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headerNavigation',
      title: 'Navigation',
      type: 'array',
      of: [{type: 'internalLink'}, {type: 'externalLink'}, {type: 'emailLink'}],
      group: 'siteHeader',
    }),

    defineField({
      name: 'credit',
      title: 'Credit',
      type: 'string',
      group: 'siteFooter',
    }),
    defineField({
      name: 'footerNavigation',
      title: 'Navigation',
      type: 'array',
      of: [{type: 'internalLink'}, {type: 'externalLink'}, {type: 'emailLink'}],
      group: 'siteFooter',
    }),
    defineField({
      title: 'SEO Settings',
      name: 'seoSettings',
      type: 'seoSettings',
      group: 'seo',
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'description'}},
})
