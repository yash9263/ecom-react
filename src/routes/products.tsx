import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

export default function ProductsRoute() {
  return (
    <div>
      products
      <Link to="/">Home</Link>
      <Products>
        {products &&
          products.map((product) => (
            <ProductCard
              minW={240}
              key={product.id}
              id={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              category={product.category}
              discount={product.discount}
            />
          ))}
      </Products>
    </div>
  )
}

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  .si-img {
    object-fit: contain;
  }
`
