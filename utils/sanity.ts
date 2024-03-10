import {createClient} from '@sanity/client'

export default createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_ID || 'chj9vsgl',
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || 'production',
  apiVersion: '2022-11-15',
  useCdn: true,
})
