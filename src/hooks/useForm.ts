import { useState } from 'react'

import type { ChangeEvent } from 'react'

type InputElement = {
  name: string
  value: string | number
  type: string
}

const useForm = <Type>(initialState: Type): [Type, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [values, setValues] = useState<Type>(initialState)

  //   TODO add an error state to validate all fields and store the error for them

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value, type } = e.target as InputElement
    if (type === 'number') {
      value = parseInt(value as string)
    }

    setValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  return [values, handleChange]
}

export default useForm
