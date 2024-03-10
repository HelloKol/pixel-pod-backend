import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seoPage',
  title: 'SEO Settings',
  type: 'document',
  fields: [
    defineField({
      title: 'SEO Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'SEO Description',
      name: 'description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      title: 'SEO Keywords',
      name: 'keywords',
      type: 'string',
    }),
    defineField({
      title: 'SEO Image',
      name: 'image',
      type: 'image',
    }),
  ],
})
