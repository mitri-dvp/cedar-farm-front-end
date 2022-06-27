import Products from '@components/Products'
import { fetchAPI } from '@lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

const EwesDetails: React.FC<{ ewe: Ewe }> = ({ ewe }) => {
  return <Products.Ewes.Details ewe={ewe} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ewes: APIResponse = await fetchAPI('/api/ewes', '&populate=*')

  console.log('ewes', ewes)

  return {
    paths: ewes.data.map((ewe: Ewe) => ({
      params: { slug: ewe.attributes.slug, id: ewe.id }
    })),
    fallback: false
  }
}

interface Params extends ParsedUrlQuery {
  id: string
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params
  const ewe: APIResponse = await fetchAPI(
    `/api/ewes`,
    `&populate=*` + `&filters[slug][$eq]=${slug}`
  )

  console.log('ewe', ewe)

  return {
    props: {
      ewe: ewe.data[0]
    }
  }
}

export default EwesDetails
