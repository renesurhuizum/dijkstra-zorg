import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'gowerghf',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(sanityClient)
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export const CONTENT_QUERY = `*[_type == "siteContent"][0]{
  name, business, role, tagline, phone, email, region,
  bio, values, credentials, experience, services,
  regionDetails, practiceInfo
}`
