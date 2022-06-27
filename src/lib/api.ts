export function getStrapiURL() {
  return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path = '', params = '') {
  const url = getStrapiURL()
  const finalURL =
    url +
    `${path}` +
    `?key=${process.env.NEXT_PUBLIC_API_KEY}` +
    `&sort[0]=id:asc` +
    `&${params}`

  console.log('FINAL URL', finalURL)

  const res = await fetch(finalURL)
  return await res.json()
}
