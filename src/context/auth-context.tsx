import axios from 'axios'
import { createContext, ReactNode, useContext, useState } from 'react'
import useLocalStorage from 'hooks/useLocalStorage'

const AuthContext = createContext()

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuthProvider()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

const useAuthProvider = () => {
  const [user, setUser] = useState(null)
  const [token, setStoredValue] = useLocalStorage<string>('user_token')

  const login = async (data) => {
    if (!data) throw new Error('email and password fields are required')
    try {
      const res = await axios({
        url: '/api/auth/login',
        method: 'post',
        data,
      })
      const { foundUser, encodedToken } = res.data

      setUser(foundUser)
      setStoredValue(encodedToken)
    } catch (error) {
      console.error(error)
    }
  }
  const signUp = async (data) => {
    if (!data) throw new Error('name, email and password fileds are required')
    try {
      const res = await axios({
        method: 'post',
        url: '/api/auth/signup',
        data,
      })
      const { createdUser, encodedToken } = res.data
      setUser(createdUser)
      setStoredValue(encodedToken)
    } catch (error) {
      console.error(error)
    }
  }

  const logOut = async () => {
    setUser(null)
    if (typeof window !== 'undefined') window.localStorage.removeItem('user_token')
  }
  return { user, login, signUp, logOut }
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
