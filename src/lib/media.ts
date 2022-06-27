import { getStrapiURL } from './api'

// Returns the correct URL from strapi media
export function getStrapiMedia(media: null | Picture[], i: number) {
  if (!media) {
    console.log('GET STRAPI MEDIA :: ERROR :: MEDIA IS NULL')
    return '/image.svg'
  }
  if (!media[i]) {
    console.log(`GET STRAPI MEDIA :: ERROR :: MEDIA ON INDEX (${i}) IS NULL`)
    return '/image.svg'
  }
  const imageUrl = media[i].attributes.url.startsWith('/')
    ? getStrapiURL() + media[i].attributes.url
    : media[i].attributes.url
  return imageUrl
}
