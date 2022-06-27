import { GetStaticProps, NextPage } from 'next'
import Products from '@components/Products'
import { fetchAPI } from '@lib/api'

const About: NextPage<{ ewes: Ewe[] }> = ({ ewes }) => {
  return (
    <>
      <Products.Ewes.List ewes={ewes} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const ewes: APIResponse = await fetchAPI('/api/ewes', '&populate=*')
  return {
    props: {
      ewes: ewes.data
    }
  }
}

export default About
