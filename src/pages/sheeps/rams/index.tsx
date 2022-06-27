import { GetStaticProps, NextPage } from 'next'
import Products from '@components/Products'
import { fetchAPI } from '@lib/api'

const Rams: NextPage<{ rams: Ram[] }> = ({ rams }) => {
  return (
    <>
      <Products.Rams.List rams={rams} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const rams: APIResponse = await fetchAPI('/api/rams', '&populate=*')
  return {
    props: {
      rams: rams.data
    }
  }
}

export default Rams
