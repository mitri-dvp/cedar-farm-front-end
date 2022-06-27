import { GetStaticProps, NextPage } from 'next'
import Products from '@components/Products'
import { fetchAPI } from '@lib/api'

const CommercialSheeps: NextPage<{ sheeps: CommercialSheep[] }> = ({
  sheeps
}) => {
  return (
    <>
      <Products.CommercialSheeps.List sheeps={sheeps} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sheeps: APIResponse = await fetchAPI(
    '/api/commercial-sheeps',
    '&populate=*'
  )
  return {
    props: {
      sheeps: sheeps.data
    }
  }
}

export default CommercialSheeps
