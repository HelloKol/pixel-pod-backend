/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import {visionTool} from '@sanity/vision'
import {apiVersion, dataset, projectId} from './lib/sanity.api'
import {settingsPlugin} from './plugins/settings'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {structure} from './desk'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import authorType from './schemas/author'
import postType from './schemas/post'
import postIndexType from './schemas/postIndex'
import homeType from './schemas/home'
import settingsType from './schemas/settings'

import externalLink from './objects/externalLink'
import internalLink from './objects/internalLink'
import emailLink from './objects/emailLink'
import seoSettingsType from './objects/seoSettings'
import seoPageType from './objects/seoPage'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Pixel Pod'

const linkableContentTypes = ['home', 'post', 'postIndex', 'author']

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      seoSettingsType,
      seoPageType,
      postType,
      postIndexType,
      homeType,
      authorType,
      settingsType,
      externalLink,
      emailLink,
      internalLink({linkableContentTypes}),
    ],
  },
  plugins: [
    deskTool({structure}),

    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({type: homeType.name}),
    settingsPlugin({type: settingsType.name}),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    process.env.NODE_ENV !== 'production' && visionTool({defaultApiVersion: apiVersion}),
  ],
})
