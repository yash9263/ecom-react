import axios from 'axios'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import useLocalStorage from 'hooks/useLocalStorage'
import { useLocation, useNavigate } from 'react-router-dom'
import { ProductProp } from 'types'
import { formatDate } from 'utils'

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

type UserAction = (item: ProductProp) => Promise<void>

type AuthProvider = {
  user: unknown
  login: (data: LoginData) => Promise<void>
  signUp: (data: SignUpData) => Promise<void>
  logOut: () => Promise<void>
  getCart: () => Promise<void>
  addToCart: UserAction
  removeFromCart: UserAction
  addToWishlist: UserAction
  removeFormWishlist: UserAction
  moveToCart: UserAction
  getWishlist: () => Promise<void>
  moveToWishlist: UserAction
  updateItemCount: (item: ProductProp, type: 'increment' | 'decrement') => Promise<void>
}

const AuthContext = createContext<AuthProvider | undefined>(undefined)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuthProvider()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

const useAuthProvider = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<unknown | null | undefined>(null)
  const [token, setStoredValue] = useLocalStorage<{
    encodedToken: string
    userInfo: any
  }>('user_token')
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

  const getCart = async () => {
    try {
      // const res = await axios({
      //   method: 'get',
      //   url: '/api/user/cart',
      //   headers: { authorization: token.encodedToken },
      // })
    } catch (error) {
      console.error(error)
    }
  }

  const addToCart: UserAction = async (item) => {
    try {
      // const res = await axios({
      //   method: 'post',
      //   url: '/api/user/cart',
      //   headers: { authorization: token.encodedToken },
      //   data: {
      //     product: item,
      //   },
      // })
      setStoredValue({
        encodedToken: token.encodedToken,
        userInfo: {
          ...token.userInfo,
          cart: [
            ...token.userInfo.cart,
            {
              ...item,
              createdAt: formatDate(),
              updatedAt: formatDate(),
              qty: 1,
            },
          ],
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  const removeFromCart: UserAction = async (item: ProductProp) => {
    try {
      //   const res = await axios({
      //     method: 'delete',
      //     url: `/api/user/cart/${item.id}`,
      //     headers: { authorization: token.encodedToken },
      //   })

      setStoredValue({
        encodedToken: token.encodedToken,
        userInfo: {
          ...token.userInfo,
          cart: token.userInfo.cart.filter((product) => product.id !== item.id),
        },
      })
    } catch (error) {
      console.error(error)
    }
  }
  const updateItemCount = async (item: ProductProp, type: 'increment' | 'decrement') => {
    try {
      setStoredValue({
        encodedToken: token.encodedToken,
        userInfo: {
          ...token.userInfo,
          cart: token.userInfo.cart.map((product) =>
            product.id !== item.id
              ? product
              : {
                  ...product,
                  qty:
                    type === 'increment' ? product.qty + 1 : product.qty > 1 ? product.qty - 1 : product.qty,
                },
          ),
        },
      })
    } catch (error) {
      console.error(error)
    }
  }
  const getWishlist = async () => {
    try {
      // const res = await axios({
      //   method: 'get',
      //   url: '/api/user/wishlist',
      //   headers: { authorization: token.encodedToken },
      // })
    } catch (error) {
      console.error(error)
    }
  }
  const addToWishlist: UserAction = async (item) => {
    try {
      // const res = await axios({
      //   method: 'post',
      //   url: 'api/user/wishlist',
      //   headers: { authorization: token.encodedToken },
      //   data: {
      //     product: item,
      //   },
      // })

      setStoredValue({
        encodedToken: token.encodedToken,
        userInfo: {
          ...token.userInfo,
          wishlist: [
            ...token.userInfo.wishlist,
            {
              ...item,
              createdAt: formatDate(),
              updatedAt: formatDate(),
            },
          ],
        },
      })
    } catch (error) {
      console.error(error)
    }
  }
  const removeFormWishlist: UserAction = async (item) => {
    try {
      setStoredValue({
        encodedToken: token.encodedToken,
        userInfo: {
          ...token.userInfo,
          wishlist: token.userInfo.wishlist.filter((product) => product.id !== item.id),
        },
      })
      // const res = await axios({
      //   method: 'delete',
      //   url: `/api/user/wishlist/${item.id}`,
      //   headers: { authorization: token.encodedToken },
      // })
    } catch (error) {
      console.error(error)
    }
  }
  const moveToCart: UserAction = async (item) => {
    console.log('move to cart', item)
    try {
      setStoredValue({
        encodedToken: token.encodedToken,
        userInfo: {
          ...token.userInfo,
          wishlist: token.userInfo.wishlist.filter((product) => product.id !== item.id),
          cart: [
            ...token.userInfo.cart,
            {
              ...item,
              createdAt: formatDate(),
              updatedAt: formatDate(),
              qty: 1,
            },
          ],
        },
      })
    } catch (error) {}
  }
  const moveToWishlist: UserAction = async (item) => {
    console.log('move to wishlist', item)
    try {
      setStoredValue({
        encodedToken: token.encodedToken,
        userInfo: {
          ...token.userInfo,
          cart: token.userInfo.cart.filter((product) => product.id !== item.id),
          wishlist: [
            ...token.userInfo.wishlist,
            {
              ...item,
              createdAt: formatDate(),
              updatedAt: formatDate(),
            },
          ],
        },
      })
    } catch (error) {}
  }

  return {
    user: token && token.userInfo,
    login,
    signUp,
    logOut,
    getCart,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFormWishlist,
    moveToCart,
    getWishlist,
    moveToWishlist,
    updateItemCount,
  }
}

export const useAuth = () => {
  const auth = useContext(AuthContext)
  if (auth === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return auth
}

export default AuthProvider
