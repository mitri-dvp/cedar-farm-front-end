import { NextPage } from 'next'
import Products from '@components/Products'

const defaultSires: Sire[] = [
  {
    id: new Date().toString(),
    pictures: ['https://kjhdorpersheep.com/images/sires/indy_sm.jpg'],
    name: 'Steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    pictures: ['https://kjhdorpersheep.com/images/sires/indy_sm.jpg'],
    name: 'Steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    pictures: ['https://kjhdorpersheep.com/images/sires/indy_sm.jpg'],
    name: 'Steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    pictures: ['https://kjhdorpersheep.com/images/sires/indy_sm.jpg'],
    name: 'Steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  },
  {
    id: new Date().toString(),
    pictures: ['https://kjhdorpersheep.com/images/sires/indy_sm.jpg'],
    name: 'Steve',
    price: 10.99,
    dateOfBirth: 'YYYY-MM-DD',
    weight: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit dolorem tempore iure quae minus aperiam doloremque, error facere totam iusto natus enim nobis ea at aut, debitis, in quis?'
  }
]

const Sires: NextPage = () => {
  return (
    <>
      <Products.Sires.List sires={defaultSires} />
    </>
  )
}

export default Sires
