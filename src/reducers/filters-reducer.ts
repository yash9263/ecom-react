export type Category = 'men' | 'women' | 'accessories' | undefined
export type Sizes = 's' | 'm' | 'l' | 'xl' | undefined
export type Sort = 'highToLow' | 'lowToHigh' | undefined
export type Rating = 1 | 2 | 3 | 4 | undefined | number

export type State = {
  category: Category[]
  sizes: Sizes[]
  sortBy: Sort
  rating: Rating
}

export type Action =
  | { type: 'category'; payload: Category }
  | { type: 'sizes'; payload: Sizes }
  | { type: 'sortBy'; payload: Sort }
  | { type: 'rating'; payload: Rating }
  | { type: 'clear'; payload: undefined }

export const initialState: State = {
  category: [],
  sizes: [],
  sortBy: undefined,
  rating: undefined,
}

const filterReducer = (state: State, action: Action): State => {
  const { type, payload } = action

  switch (type) {
    case 'category': {
      const { category } = state
      if (category.includes(payload)) {
        const updateCategory = category.filter((option: Category) => option !== payload)
        return { ...state, category: updateCategory }
      }

      const updateCategory = [...category, payload]
      return { ...state, category: updateCategory }
    }

    case 'sizes': {
      const { sizes } = state
      if (sizes.includes(payload)) {
        const updateSizes = sizes.filter((option: Sizes) => option !== payload)
        return { ...state, sizes: updateSizes }
      }

      const updateSizes = [...sizes, payload]
      return { ...state, sizes: updateSizes }
    }
    case 'rating': {
      return { ...state, rating: Number(payload) }
    }
    case 'sortBy': {
      return { ...state, sortBy: payload }
    }

    case 'clear':
      return { ...initialState }

    default:
      throw new Error(`Type: ${type} in invalid`)
  }
}

export default filterReducer
