import { useOutletContext } from 'react-router-dom'

const CartRoute = () => {
  const { user, removeFromCart, updateItemCount, moveToWishlist } = useOutletContext()

  return (
    <div>
      <div>cart</div>
      <div>
        {user.cart.length > 0 &&
          user.cart.map((product) => (
            <div key={product.id}>
              {product.title}
              <button onClick={() => removeFromCart(product)}>remove from cart</button>
              <button onClick={() => moveToWishlist(product)}>move to wishlist</button>
              <h1>{product.qty}</h1>
              <button onClick={() => updateItemCount(product, 'increment')}>+</button>
              <button onClick={() => updateItemCount(product, 'decrement')}>-</button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default CartRoute
