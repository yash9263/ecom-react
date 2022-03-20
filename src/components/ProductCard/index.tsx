import { Heart } from 'react-feather'
import styled from 'styled-components'
import { Box, Text, Image, Heading5, SmallText, Button } from '../../styles/shared'
import type { BoxProps } from '../../styles/types/utils-types'

interface ProductProps extends BoxProps {
  id: number | string
  title: string
  img: string
  price: number
  discount: number
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
  ...delegated
}: ProductProps) => {
  return (
    <ProductCardWrapper key={id} className={className} as="article" maxW={280} m={4} {...delegated}>
      <ImageWrapper>
        <Image height="240" src={img} aspectRatio={0.9} alt="product image" objectFit="cover" />
        <WishlistBtn>
          <Heart />
        </WishlistBtn>
      </ImageWrapper>
      <Box pL={8} pT={8}>
        <a>
          <Heading5 as="a" fontWeight="bold">
            {title}
          </Heading5>
        </a>
        <Box display="flex" gap={12}>
          <Text fontWeight="medium">Rs. {price}.00</Text>
          <Text as="s" fontSize="0.9" color="var(--color-gray-500)">
            Rs.{Math.round(price / (1 - discount / 100))}.00
          </Text>
        </Box>
        <Text>({discount}% OFF)</Text>
        <SmallText fontWeight="medium" color="var(--color-gray-700)">
          {category}
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
  .si-img {
    transition: transform 300ms ease-in;
  }
  .si-img:hover {
    transform: scale(1.1);
  }
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

export default ProductCard
