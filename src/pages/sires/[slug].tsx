import Products from '@components/Products'
import { fetchAPI } from '@lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

const SireDetails: React.FC<{ sire: Sire }> = ({ sire }) => {
  return <Products.Sires.Details sire={sire} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const sires = await fetchAPI('/api/sires', '&populate=*')
  return {
    paths: sires.data.map((sire: Sire) => ({
      params: { slug: sire.attributes.slug, id: sire.id }
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
  const sire: APIResponse = await fetchAPI(
    `/api/sires`,
    `&populate=*` + `&filters[slug][$eq]=${slug}`
  )
  return {
    props: {
      sire: sire.data[0]
    }
  }
}

export default SireDetails
