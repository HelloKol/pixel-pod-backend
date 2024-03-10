import sanityClient from '../utils/sanity'
import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'titleOne',
      title: 'Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'featuredArticle',
      title: 'Featured Article',
      type: 'reference',
      to: [{type: 'post'}],
      group: 'content',
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
      group: 'content',
    }),
    defineField({
      title: 'Seo Settings',
      name: 'seoPage',
      type: 'seoPage',
      group: 'seo',

      // Specify initial values based on the values from the `home` document
      initialValue: async () => {
        // Fetch the current home document
        const currentDocumentData = await sanityClient.fetch('*[_type == "home"][0]{title, body}')

        // Extract values from the home document to set as initial values for `seoPage`
        const seoTitle = currentDocumentData?.title ? currentDocumentData.title : 'another title'
        const seoDescription = currentDocumentData?.body
          ? currentDocumentData?.body[0].children[0].text
          : ''

        // Return the initial values for the `seoPage` field
        return {
          title: seoTitle,
          description: seoDescription,
        }
      },
    }),
  ],
})
