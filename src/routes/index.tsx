import { Link } from 'react-router-dom'
import { Box } from '../styles/shared/Box'

export default function IndexRoute() {
  return (
    <Box>
      <h1>Welcome to my Ecommerce</h1>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/products">
        <button>products</button>
      </Link>
    </Box>
  )
}
