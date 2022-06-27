import { GetStaticProps, NextPage } from 'next'
import Products from '@components/Products'
import { fetchAPI } from '@lib/api'

const Sires: NextPage<{ sires: Sire[] }> = ({ sires }) => {
  return (
    <>
      <Products.Sires.List sires={sires} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sires: APIResponse = await fetchAPI('/api/sires', '&populate=*')
  return {
    props: {
      sires: sires.data
    }
  }
}

export default Sires
