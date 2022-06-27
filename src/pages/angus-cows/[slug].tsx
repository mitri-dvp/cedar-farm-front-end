import Products from '@components/Products'
import { fetchAPI } from '@lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

const AngusCowsDetails: React.FC<{ cow: AngusCow }> = ({ cow }) => {
  return <Products.AngusCows.Details cow={cow} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cows: APIResponse = await fetchAPI('/api/angus-cows', '&populate=*')

  console.log('COWS', cows)

  return {
    paths: cows.data.map((cow: AngusCow) => ({
      params: { slug: cow.attributes.slug, id: cow.id }
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
  const cow: APIResponse = await fetchAPI(
    `/api/angus-cows`,
    `&populate=*` + `&filters[slug][$eq]=${slug}`
  )

  console.log('COW', cow)

  return {
    props: {
      cow: cow.data[0]
    }
  }
}

export default AngusCowsDetails
