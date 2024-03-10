import {BookIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'postIndex',
  title: 'Post Index',
  type: 'document',
  icon: BookIcon,
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
  ],
})
