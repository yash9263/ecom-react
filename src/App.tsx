import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './routes'
import ProductsRoute from './routes/products'
import ErrorBoundary from './route-containers/error-boundaries/ErrorBoudary'
import ProductPageContextProvider from './context/product-page-context'
import { MockmanRoute } from 'routes/mockman'
import LoginRoute from 'routes/login'
import SignUpRoute from 'routes/signup'
import CartRoute from 'routes/cart'
import WishlistRoute from 'routes/wishlist'
import RequireAuth from 'components/RequireAuth'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/products"
          element={
            <ProductPageContextProvider>
              <ProductsRoute />
            </ProductPageContextProvider>
          }
        />
        <Route path="/mockman" element={<MockmanRoute />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/signup" element={<SignUpRoute />} />

        <Route element={<RequireAuth />}>
          <Route path="/cart" element={<CartRoute />} />
          <Route path="/wishlist" element={<WishlistRoute />} />
        </Route>
        {/* Error Boundary for not available pages */}
        <Route path="*" element={<ErrorBoundary />} />
      </Route>
    </Routes>
  )
}

export default App
