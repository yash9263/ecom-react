import styled from 'styled-components'
import ProductCard from '../components/ProductCard'
import { useFilterContext } from '../context/product-page-context'
import products from '../data/products'
import { Category } from '../reducers/filters-reducer'
import FilterSideBar from '../route-containers/products/Filters'

type Product = typeof products

const filterCategories = (products: Product, category: Category[]) => {
  if (category.length < 1) return products
  return products.filter((product) => category.includes(product.category as Category))
}

export default function ProductsRoute() {
  const { state } = useFilterContext()

  const filteredProducts = filterCategories(products, state.category)

  return (
    <Wrapper>
      <FilterSideBar />
      <Products>
        {filteredProducts &&
          filteredProducts.map((product) => (
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
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 24px;
`

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  .si-img {
    object-fit: contain;
  }
`
