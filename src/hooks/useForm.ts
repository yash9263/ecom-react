import { useState } from 'react'

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState)
  //   TODO add an error state to validate all fields and store the error for them
  const handleChange = (e) => {
    let { name, value, type } = e.target
    if (type === 'number') {
      value = parseInt(value)
    }

    setValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  return [values, handleChange]
}

export default useForm
