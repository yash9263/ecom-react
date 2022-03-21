export type Category = 'men' | 'women' | 'accessories'

export type State = {
  category: Category[]
}

export type Action = { type: 'category'; payload: Category }

export const initialState: State = {
  category: [],
}

const filterReducer = (state: State, action: Action): State => {
  const { type, payload } = action

  switch (type) {
    case 'category':
      const { category } = state
      if (category.includes(payload)) {
        const updateCategory = category.filter((option: Category) => option !== payload)
        return { ...state, category: updateCategory }
      }
      const updateCategory = [...category, payload]
      return { ...state, category: updateCategory }

    default:
      throw new Error(`Type: ${type} in invalid`)
  }
}

export default filterReducer
