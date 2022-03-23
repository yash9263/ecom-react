import { createContext, useContext, useReducer } from 'react'
import filterReducer, { initialState } from 'reducers/filters-reducer'

import type { Dispatch, ReactNode, Reducer } from 'react'
import type { Action, State } from 'reducers/filters-reducer'

interface ProductPageContextInterface {
  state: typeof initialState
  dispatch: Dispatch<Action>
}

const defaultDispatch: Dispatch<any> = () => initialState

const FilterContext = createContext<ProductPageContextInterface>({
  state: initialState,
  dispatch: defaultDispatch,
})

const ProductPageContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(filterReducer, initialState)

  return <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>
}

export const useFilterContext = () => useContext(FilterContext)

export default ProductPageContextProvider
