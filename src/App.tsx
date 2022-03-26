import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './routes'
import ProductsRoute from './routes/products'
import ErrorBoundary from './route-containers/error-boundaries/ErrorBoudary'
import ProductPageContextProvider from './context/product-page-context'
import { MockmanRoute } from 'routes/mockman'
import LoginRoute from 'routes/login'
import SignUpRoute from 'routes/signup'

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

        {/* Error Boundary for not available pages */}
        <Route path="*" element={<ErrorBoundary />} />
      </Route>
    </Routes>
  )
}

export default App
