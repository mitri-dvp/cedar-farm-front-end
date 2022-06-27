import { NextPage } from 'next'
import Products from '@components/Products'

const defaultCows: AngusCow[] = [
  {
    id: new Date().toString(),
    pictures: [
      'https://www.agdaily.com/wp-content/uploads/2020/04/bg-black_angus-001-JAndrewPatronik.jpg'
    ],
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
    pictures: [
      'https://www.agdaily.com/wp-content/uploads/2020/04/bg-black_angus-001-JAndrewPatronik.jpg'
    ],
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
    pictures: [
      'https://www.agdaily.com/wp-content/uploads/2020/04/bg-black_angus-001-JAndrewPatronik.jpg'
    ],
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
    pictures: [
      'https://www.agdaily.com/wp-content/uploads/2020/04/bg-black_angus-001-JAndrewPatronik.jpg'
    ],
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
    pictures: [
      'https://www.agdaily.com/wp-content/uploads/2020/04/bg-black_angus-001-JAndrewPatronik.jpg'
    ],
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

const AngusCows: NextPage = () => {
  return (
    <>
      <Products.AngusCows.List cows={defaultCows} />
    </>
  )
}

export default AngusCows
