import useLocalStorage from 'hooks/useLocalStorage'

import { Navigate, Outlet, useLocation } from 'react-router-dom'

const RequireAuth = () => {
  const location = useLocation()

  const [token] = useLocalStorage<{ encodedToken: string; userInfo: object }>('user_token')

  if (!token || !token.userInfo) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  const { userInfo: user, encodedToken } = token

  return <Outlet context={{ user, encodedToken }} />
}

export default RequireAuth
