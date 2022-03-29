import { useAuth } from 'context/auth-context'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const RequireAuth = () => {
  const location = useLocation()
  const auth = useAuth()
  const { removeFormWishlist, removeFromCart, updateItemCount, moveToCart, moveToWishlist } = auth

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return (
    <Outlet
      context={{
        user: auth.user,
        removeFormWishlist,
        removeFromCart,
        updateItemCount,
        moveToCart,
        moveToWishlist,
      }}
    />
  )
}

export default RequireAuth
