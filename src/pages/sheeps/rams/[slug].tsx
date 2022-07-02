import Products from '@components/Products'
import { fetchAPI } from '@lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

const RamsDetails: React.FC<{ ram: Ram }> = ({ ram }) => {
  return <Products.Rams.Details ram={ram} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const rams: APIResponse = await fetchAPI('/api/rams', '&populate=*')

  return {
    paths: rams.data.map((ram: Ram) => ({
      params: { slug: ram.attributes.slug, id: ram.id }
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
  const ram: APIResponse = await fetchAPI(
    `/api/rams`,
    `&populate=*` + `&filters[slug][$eq]=${slug}`
  )

  return {
    props: {
      ram: ram.data[0]
    }
  }
}

export default RamsDetails
