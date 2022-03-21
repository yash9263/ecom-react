//@ts-nocheck
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFilterContext } from 'context/product-page-context'
import { categoryOptions, sizeOptions, sortByOptions, ratingsOptions } from './filter-options'
import { Button, Checkbox, Radio } from 'styles/shared'

const FilterSideBar = () => {
  const { state, dispatch } = useFilterContext()
  const { category, sizes, sortBy, rating } = state
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    for (const [type, payload] of searchParams.entries()) {
      handleChange(type, payload)
    }
  }, [])

  useEffect(() => {
    setSearchParams(
      Object.keys(state).reduce(
        (prev, curr) =>
          !state[curr] || state[curr] === 'undefined' ? { ...prev } : { ...prev, [curr]: state[curr] },
        {},
      ),
    )
  }, [state])

  const handleChange = (type: string, payload: string | number | undefined) => {
    dispatch({ type, payload })
  }

  return (
    <div>
      <form>
        <fieldset>
          <Button onClick={() => handleChange('clear')}>clear</Button>
        </fieldset>
        <fieldset>
          <legend>categories</legend>
          {categoryOptions.map(({ label, value }) => (
            <Checkbox
              checked={category.includes(value)}
              id={`${value}-category`}
              key={label}
              label={label}
              name={value}
              onChange={() => handleChange('category', value)}
              value={value}
            />
          ))}
        </fieldset>
        <fieldset>
          <legend>size</legend>
          {sizeOptions.map(({ value, label }) => (
            <Checkbox
              checked={sizes.includes(value)}
              id={`${value}-size`}
              key={label}
              label={label}
              name={value}
              onChange={() => handleChange('sizes', value)}
              value={value}
            />
          ))}
        </fieldset>
        <fieldset>
          <legend>sort by</legend>
          {sortByOptions.map(({ label, value }) => (
            <Radio
              checked={sortBy === value}
              id={`sort-${value}`}
              key={label}
              label={label}
              name="sortBy"
              onChange={() => handleChange('sortBy', value)}
              value={value}
            />
          ))}
        </fieldset>
        <fieldset>
          <legend>Rating</legend>
          {ratingsOptions.map(({ label, value }) => (
            <Radio
              checked={rating === value}
              id={`rating-${value}`}
              key={label}
              label={label}
              name="rating"
              onChange={() => handleChange('rating', value)}
              value={value}
            />
          ))}
        </fieldset>
        {/* TODO: add dual slider price range*/}
      </form>
    </div>
  )
}

export default FilterSideBar
