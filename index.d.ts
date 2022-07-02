/* eslint-disable camelcase */
type PictureAttributes = {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: object // To-Do: Add formats type
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null | string // Note: Type assumption
  provider: string
  provider_metadata: null | string // Note: Type assumption
  createdAt: string
  updatedAt: string
}

type Picture = {
  id: string
  attributes: PictureAttributes
}

type ProductPictures = {
  data: null | Picture[]
}

type ProductAttributes = {
  uid: string
  pictures: ProductPictures
  name: string
  slug: string
  price: number
  dateOfBirth: string
  weight: number
  description: string
  sold: boolean
}

type Product = {
  id: string
  attributes: ProductAttributes
}

type APIResponse = {
  data: Product[]
}

type AngusCow = Product
type CommercialSheep = Product
type Ewe = Product
type Ram = Product
type Sire = Product

type FormValidationFields = {
  name: string
  email: string
  message: string
}
