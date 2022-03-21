import { useFilterContext } from '../../../context/product-page-context'

const FilterSideBar = () => {
  const { state, dispatch } = useFilterContext()
  const { category } = state

  return (
    <div>
      <form>
        <fieldset>
          <legend>categories</legend>
          <div>
            <input
              type="checkbox"
              name="categories"
              id="filter-men-category"
              value="men"
              checked={category.includes('men')}
              onChange={() => dispatch({ type: 'category', payload: 'men' })}
            />
            <label htmlFor="filter-men-category">men</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="categories"
              id="filter-women-category"
              value="women"
              checked={category.includes('women')}
              onChange={() => dispatch({ type: 'category', payload: 'women' })}
            />
            <label htmlFor="filter-women-category">women</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="categories"
              id="filter-accessories-category"
              value="accessories"
              checked={category.includes('accessories')}
              onChange={() => dispatch({ type: 'category', payload: 'accessories' })}
            />
            <label htmlFor="filter-accessories-category">accessories</label>
          </div>
        </fieldset>
        {/* TODO: add price range rating size sort low to high and high to low */}
        <fieldset>
          <div></div>
        </fieldset>
      </form>
    </div>
  )
}

export default FilterSideBar
