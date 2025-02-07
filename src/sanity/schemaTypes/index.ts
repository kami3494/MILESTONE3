import { type SchemaTypeDefinition } from 'sanity'
import { product } from './pruduct'
import { order } from './order'
import { wishlist } from './wishlist'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,order,wishlist],
}
