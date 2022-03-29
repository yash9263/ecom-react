import { useOutletContext } from 'react-router-dom'

const WishlistRoute = () => {
  const { user, removeFormWishlist, moveToCart } = useOutletContext()

  return (
    <div>
      <div>wishlist</div>
      <div>
        {user.wishlist.length > 0 &&
          user.wishlist.map((product) => (
            <div key={product.id}>
              {product.title}
              <button onClick={() => removeFormWishlist(product)}>remove from wishlist</button>
              <button onClick={() => moveToCart(product)}>move to cart</button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default WishlistRoute
