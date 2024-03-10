import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seoSettings',
  title: 'SEO Settings',
  type: 'document',
  fields: [
    defineField({
      title: 'Site Name',
      name: 'siteName',
      type: 'string',
    }),
    defineField({
      title: 'Site Name Position',
      name: 'siteNamePosition',
      type: 'string',
      options: {
        list: [
          {title: 'Before', value: 'before'},
          {title: 'After', value: 'after'},
        ],
      },
    }),
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
    defineField({
      title: 'Canonical URL',
      name: 'canonicalUrl',
      type: 'url',
    }),
  ],
})
