import { NextPage } from 'next'
import ProductList from '@components/ProductList'

const defaultSires: Sire[] = [
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/sires/indy_sm.jpg',
    name: 'Steve',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/sires/indy_sm.jpg',
    name: 'Steve',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/sires/indy_sm.jpg',
    name: 'Steve',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/sires/indy_sm.jpg',
    name: 'Steve',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/sires/indy_sm.jpg',
    name: 'Steve',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  }
]

const About: NextPage = () => {
  return (
    <>
      <ProductList title="Dorper Sheep Sires" products={defaultSires} />
    </>
  )
}

export default About
