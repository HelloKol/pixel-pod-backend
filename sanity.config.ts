/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import {debugSecrets} from '@sanity/preview-url-secret/sanity-plugin-debug-secrets'
import {visionTool} from '@sanity/vision'
import {apiVersion, dataset, DRAFT_MODE_ROUTE, projectId} from './lib/sanity.api'
import {locate} from './plugins/locate'
import {previewDocumentNode} from './plugins/previewPane'
import {settingsPlugin, settingsStructure} from './plugins/settings'
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {deskTool} from 'sanity/desk'
import {structure} from './desk'
import {structureTool} from 'sanity/structure'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import authorType from './schemas/author'
import postType from './schemas/post'
import postIndexType from './schemas/postIndex'
import homeType from './schemas/home'
import settingsType from './schemas/settings'

import externalLink from './objects/externalLink'
import internalLink from './objects/internalLink'
import emailLink from './objects/emailLink'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io'

const linkableContentTypes = ['home', 'post', 'postIndex', 'author']

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
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
