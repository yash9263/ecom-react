import { useState } from 'react'
import { Heart as WishList, ShoppingBag } from 'react-feather'
import styled, { keyframes } from 'styled-components'
import { Box, Text, Image, Heading5, SmallText, Button } from 'styles/shared'
import type { BoxProps } from 'styles/types/utils-types'

interface ProductProps extends BoxProps {
  id: number | string
  title: string
  img: string
  price: number
  discount: number
  size?: string[]
  rating: number
  category: string
  className?: string
}

const ProductCard = ({
  id,
  img,
  title,
  price,
  discount,
  category,
  className,
  rating,
  ...delegated
}: ProductProps) => {
  const [show, setShow] = useState(false)

  const addToCart = () => {
    console.log('add to cart')
  }
  const addToWishlist = () => {
    console.log('add to wishlist')
  }

  return (
    <ProductCardWrapper
      key={id}
      className={className}
      as="article"
      maxW={280}
      m={4}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      {...delegated}
    >
      <ImageWrapper>
        <Image height="240" src={img} aspectRatio={0.9} alt="product image" objectFit="cover" />
        {show && (
          <ActionBox>
            <ActionBtn onClick={addToWishlist}>
              <WishList />
            </ActionBtn>
            <Seperator />
            <ActionBtn onClick={addToCart}>
              <ShoppingBag />
            </ActionBtn>
          </ActionBox>
        )}
      </ImageWrapper>
      <Box pL={8} pT={8}>
        <a>
          <Heading5 fontWeight="bold">{title}</Heading5>
        </a>
        <Box display="flex" gap={12}>
          <Text fontWeight="medium">Rs. {price}.00</Text>
          <Text as="s" fontSize="0.9" color="var(--color-gray-500)">
            Rs.{Math.round(price / (1 - discount / 100))}.00
          </Text>
        </Box>
        <Text>({discount}% OFF)</Text>
        <SmallText fontWeight="medium" color="var(--color-gray-700)">
          {category} {rating} stars
        </SmallText>
      </Box>
    </ProductCardWrapper>
  )
}

export const ProductCardWrapper = styled(Box)`
  cursor: pointer;
  flex: 1 0;
`

export const ImageWrapper = styled(Box)`
  overflow: hidden;
  position: relative;
`

export const WishlistBtn = styled(Button)`
  position: absolute;
  top: 8px;
  right: 12px;
  background: transparent;
  & > svg {
    /* 
      TODO: add condition for wishlist color
      color: hsl(0, 100%, 50%);
      fill: hsl(0, 100%, 50%); 
    */
  }
`

export const ActionBtn = styled(Button)`
  border-radius: initial;
  & > svg {
  }
`

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ActionBox = styled.div`
  position: absolute;
  animation: ${fadeIn} 300ms ease-in;
  height: 40px;
  bottom: 8px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* add box shadow */
`

export const Seperator = styled.div``

export default ProductCard
