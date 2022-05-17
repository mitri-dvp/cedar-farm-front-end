import { NextPage } from 'next'
import ProductList from '@components/ProductList'

const defaultEwes: Ewe[] = [
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/2019/08-02-19/Untitled-1.png',
    name: 'Steve',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/2019/08-02-19/Untitled-1.png',
    name: 'Steve',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/2019/08-02-19/Untitled-1.png',
    name: 'Steve',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/2019/08-02-19/Untitled-1.png',
    name: 'Steve',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/2019/08-02-19/Untitled-1.png',
    name: 'Steve',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  }
]

const About: NextPage = () => {
  return (
    <>
      <ProductList title="Dorper Ewe Lambs For Sale" products={defaultEwes} />
    </>
  )
}

export default About
