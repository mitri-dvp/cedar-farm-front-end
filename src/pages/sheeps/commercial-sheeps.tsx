import { NextPage } from 'next'
import Products from '@components/Products'

const defaultCommercialSheep: CommercialSheep[] = [
  {
    id: new Date().toString(),
    pictures: ['https://kjhdorpersheep.com/images/2019/01.jpg'],
    name: 'Steve',
    slug: 'steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
    sold: false
  },
  {
    id: new Date().toString(),
    pictures: ['https://kjhdorpersheep.com/images/2019/01.jpg'],
    name: 'Steve',
    slug: 'steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
    sold: false
  },
  {
    id: new Date().toString(),
    pictures: ['https://kjhdorpersheep.com/images/2019/01.jpg'],
    name: 'Steve',
    slug: 'steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
    sold: false
  },
  {
    id: new Date().toString(),
    pictures: ['https://kjhdorpersheep.com/images/2019/01.jpg'],
    name: 'Steve',
    slug: 'steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
    sold: false
  },
  {
    id: new Date().toString(),
    pictures: ['https://kjhdorpersheep.com/images/2019/01.jpg'],
    name: 'Steve',
    slug: 'steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?',
    sold: false
  }
]

const About: NextPage = () => {
  return (
    <>
      <Products.CommercialSheeps.List sheeps={defaultCommercialSheep} />
    </>
  )
}

export default About
