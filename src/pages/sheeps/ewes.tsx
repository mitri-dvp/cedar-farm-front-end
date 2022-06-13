import { NextPage } from 'next'
import Products from '@components/Products'

const defaultEwes: Ewe[] = [
  {
    id: new Date().toString(),
    pictures: [
      'https://kjhdorpersheep.com/images/2019/08-02-19/Untitled-1.png'
    ],
    name: 'Steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    pictures: [
      'https://kjhdorpersheep.com/images/2019/08-02-19/Untitled-1.png'
    ],
    name: 'Steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    pictures: [
      'https://kjhdorpersheep.com/images/2019/08-02-19/Untitled-1.png'
    ],
    name: 'Steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    pictures: [
      'https://kjhdorpersheep.com/images/2019/08-02-19/Untitled-1.png'
    ],
    name: 'Steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    pictures: [
      'https://kjhdorpersheep.com/images/2019/08-02-19/Untitled-1.png'
    ],
    name: 'Steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  }
]

const About: NextPage = () => {
  return (
    <>
      <Products.Ewes.List ewes={defaultEwes} />
    </>
  )
}

export default About
