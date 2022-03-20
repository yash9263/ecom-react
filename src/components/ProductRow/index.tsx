import { Box, Heading3 } from '../../styles/shared'
import ProductCard from '../ProductCard'
import type { productProp } from '../../types'

interface ProductRowProps {
  title: string
  products: productProp[]
}

const ProductRow = ({ title, products }: ProductRowProps) => {
  return (
    <Box pY={24}>
      <Heading3 fontWeight="medium" mB={16}>
        {title}
      </Heading3>
      <Box display="flex">
        {products && products.map((product) => <ProductCard key={product.id} {...product} />)}
      </Box>
    </Box>
  )
}

export default ProductRow
