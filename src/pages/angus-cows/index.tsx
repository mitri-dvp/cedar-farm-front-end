import { GetStaticProps, NextPage } from 'next'
import Products from '@components/Products'
import { fetchAPI } from '@lib/api'

const AngusCows: NextPage<{ cows: AngusCow[] }> = ({ cows }) => {
  return (
    <>
      <Products.AngusCows.List cows={cows} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const cows: APIResponse = await fetchAPI('/api/angus-cows', '&populate=*')
  return {
    props: {
      cows: cows.data
    }
  }
}

export default AngusCows
