import styled from 'styled-components'
import ProductCard from 'components/ProductCard'
import { useFilterContext } from '../context/product-page-context'
import products from 'data/products'
import type { Category, Rating, Sort } from 'reducers/filters-reducer'
import FilterSideBar from 'route-containers/products/Filters'

type Product = typeof products

const filterCategories = (products: Product, category: Category[]) => {
  if (category.length < 1) return products
  return products.filter((product) => category.includes(product.category as Category))
}

const sortProducts = (products: Product, sortBy: Sort) => {
  if (!sortBy) return products
  if (sortBy === 'highToLow') return [...products].sort((a, b) => b.price - a.price)
  else if (sortBy === 'lowToHigh') return [...products].sort((a, b) => a.price - b.price)
  return products
}

const filterRating = (products: Product, rating: Rating) => {
  if (!rating || typeof rating !== 'number') return products
  return products.filter((product) => product.rating > Number(rating))
}

export default function ProductsRoute() {
  const { state } = useFilterContext()

  const filterCategory = filterCategories(products, state.category)
  // Todo add size filter
  const sortedProducts = sortProducts(filterCategory, state.sortBy)
  const filterProductRating = filterRating(sortedProducts, state.rating)

  return (
    <Wrapper>
      <FilterSideBar />
      <Products>
        {filterProductRating &&
          filterProductRating.map((product) => (
            <ProductCard
              minW={240}
              key={product.id}
              id={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              category={product.category}
              discount={product.discount}
              rating={product.rating}
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
