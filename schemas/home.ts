import {UserIcon, HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'featuredArticle',
      title: 'Featured Article',
      type: 'reference',
      to: [{type: 'post'}],
    }),
    defineField({
      name: 'latestArticle',
      title: 'Latest Article',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
        },
      ],
    }),
  ],
})
