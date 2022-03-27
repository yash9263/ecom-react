import axios from 'axios'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import useLocalStorage from 'hooks/useLocalStorage'
import { useLocation, useNavigate } from 'react-router-dom'

type AuthProvider = {
  user: unknown
  login: (data: any) => Promise<void>
  signUp: (data: any) => Promise<void>
  logOut: () => Promise<void>
}

type LoginData = {
  email: string
  password: string
}

type SignUpData = {
  email: string
  password: string
  firstName: string
  lastName: string
}

const AuthContext = createContext<AuthProvider | undefined>(undefined)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuthProvider()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

const useAuthProvider = () => {
  const [user, setUser] = useState<unknown | null | undefined>(null)
  const [token, setStoredValue] = useLocalStorage<{ encodedToken: string; userInfo: object }>('user_token')
  const navigate = useNavigate()
  const { state }: { state: any } = useLocation()

  useEffect(() => {
    if (token) {
      setUser(token.userInfo)
    }
  }, [])

  let from = state?.from?.pathname || '/'

  const login = async (data: LoginData) => {
    if (!data) throw new Error('email and password fields are required')
    try {
      const res = await axios({
        method: 'post',
        url: '/api/auth/login',
        data,
      })
      const { foundUser, encodedToken } = res.data

      setUser(foundUser)
      setStoredValue({ userInfo: foundUser, encodedToken })
      navigate(from, { replace: true })
    } catch (error) {
      setUser(undefined)
      console.error(error)
    }
  }
  const signUp = async (data: SignUpData) => {
    if (!data) throw new Error('name, email and password fileds are required')
    try {
      const res = await axios({
        method: 'post',
        url: '/api/auth/signup',
        data,
      })
      const { createdUser, encodedToken } = res.data
      setUser(createdUser)
      setStoredValue({ userInfo: createdUser, encodedToken })
      navigate(from, { replace: true })
    } catch (error) {
      setUser(undefined)
      console.error(error)
    }
  }

  const logOut = async () => {
    setUser(undefined)
    if (typeof window !== 'undefined') window.localStorage.removeItem('user_token')
  }
  return { user, login, signUp, logOut }
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
