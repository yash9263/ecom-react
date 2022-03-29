import { Box, Heading3 } from 'styles/shared'
import ProductCard from '../ProductCard'
import type { ProductProp } from 'types'

interface ProductRowProps {
  title: string
  products: ProductProp[]
}

const ProductRow = ({ title, products }: ProductRowProps) => {
  return (
    <Box pY={24}>
      <Heading3 fontWeight="medium" mB={16}>
        {title}
      </Heading3>
      <Box display="flex">
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </Box>
    </Box>
  )
}

export default ProductRow
