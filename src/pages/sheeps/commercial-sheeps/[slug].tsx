import Products from '@components/Products'
import { fetchAPI } from '@lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

const CommercialSheepsDetails: React.FC<{ sheep: CommercialSheep }> = ({
  sheep
}) => {
  return <Products.CommercialSheeps.Details sheep={sheep} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const sheeps: APIResponse = await fetchAPI(
    '/api/commercial-sheeps',
    '&populate=*'
  )

  return {
    paths: sheeps.data.map((sheep: CommercialSheep) => ({
      params: { slug: sheep.attributes.slug, id: sheep.id }
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
  const sheep: APIResponse = await fetchAPI(
    `/api/commercial-sheeps`,
    `&populate=*` + `&filters[slug][$eq]=${slug}`
  )

  return {
    props: {
      sheep: sheep.data[0]
    }
  }
}

export default CommercialSheepsDetails
