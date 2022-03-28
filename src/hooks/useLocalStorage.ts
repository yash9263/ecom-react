import { useState } from 'react'

// reference: https://usehooks.com/useLocalStorage
const useLocalStorage = <T>(key: string): [localValue: T, setStoredValue: (value: T) => void] => {
  const [localValue, setLocalValue] = useState<T>(() => {
    // to handle server side rendering, as window object is not present on server
    if (typeof window === 'undefined') return

    const item = window.localStorage.getItem(key)
    return item && JSON.parse(item)
  })

  const setStoredValue = (value: T) => {
    setLocalValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [localValue, setStoredValue]
}

export default useLocalStorage
