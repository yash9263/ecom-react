import styled from 'styled-components'

import Categories from '../route-containers/home/Categories'
import { QUERIES } from '../styles/constants'
import { Box, Block, Image, Button } from '../styles/shared'
import { v4 as uuid } from 'uuid'
import ProductRow from '../components/ProductRow'

export default function IndexRoute() {
  return (
    <Main>
      <Categories />
      <CoverImage>
        <ImageWrapper
          src="https://res.cloudinary.com/yashwant9263/image/upload/v1644669240/Camp/ecommerce/home/heroImage0.jpg"
          alt="hero-image"
          loading="eager"
          objectFit="cover"
        />
        <ImgGradient />
        <ContentBox>
          <h1>Secure your next adventure</h1>
          <p>Explore accessories to find all the equipments you need for your next adventure.</p>
          <Button>Explore</Button>
        </ContentBox>
      </CoverImage>
      <CoverImage>
        <ImageWrapper
          className="sq-img"
          src="https://res.cloudinary.com/yashwant9263/image/upload/v1644670597/Camp/ecommerce/home/wintergGoup_cppljk.jpg"
          alt="cover image"
          objectFit="cover"
        />
        <ImageWrapper
          className="sq-img"
          src="https://res.cloudinary.com/yashwant9263/image/upload/v1644670094/Camp/ecommerce/home/Equipments_hl1qar.jpg"
          alt="cover image"
          objectFit="cover"
        />
        <ImgGradient />
        <ContentBox>
          <h1>Winter is Here</h1>
          <p>Shop for clothes, shoes and many more for your winter adventures.</p>
          <button>shop now</button>
        </ContentBox>
      </CoverImage>
      <Block maxW={1110}>
        <ProductRow title="New Arrivals" products={productArr} />
      </Block>
      <CoverImage>
        <ImageWrapper
          src="https://res.cloudinary.com/yashwant9263/image/upload/v1644670597/Camp/ecommerce/home/snowboards_juq2cg.jpg"
          alt="cover image"
          objectFit="cover"
        />
        <ImgGradient />
        <ContentBox>
          <h1>Skis</h1>
          <p>
            Shop our huge selection of Skis! Find the best ski equipments and buy at best price your skis
            products.
          </p>
          <button>shop now</button>
        </ContentBox>
      </CoverImage>
    </Main>
  )
}

export const Main = styled.main`
  padding: 0;
`

export const CoverImage = styled.div`
  display: flex;
  position: relative;
  margin-top: 32px;
  margin-bottom: 32px;
`

export const ImgGradient = styled.div`
  background: linear-gradient(180deg, rgba(39, 45, 64, 0) 0%, rgba(39, 45, 64, 1) 100%);
  position: absolute;
  overflow: hidden;
  inset: 0;
  width: 100%;
  height: 100%;
`

export const ImageWrapper = styled(Image)`
  .si-img {
    aspect-ratio: 16 / 9;
    @media ${QUERIES.mobile} {
      aspect-ratio: 0.65;
    }
  }
  &.sq-img {
    flex: 1 0 50%;
    .si-img {
      aspect-ratio: 0.9;
    }
  }
  @media ${QUERIES.mobile} {
    &.sq-img:nth-child(2) {
      display: none;
    }
  }
`

export const ContentBox = styled(Box)`
  position: absolute;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  inset: auto 0 0 0;
  padding-bottom: 32px;
  text-align: center;
  color: var(--color-white);
`

const productArr = [
  {
    id: uuid(),
    title: 'Hiking Jacket',
    img: 'https://res.cloudinary.com/yashwant9263/image/upload/v1645121952/Camp/ecommerce/home/hiking_jacket.webp',
    price: 1200.0,
    discount: 60,
    category: 'New Arrival',
  },
  {
    id: uuid(),
    price: 2010.0,
    discount: 40,
    category: 'Trending',
    title: 'Hiking Bag 15 Litre NH100 - Blue',
    img: 'https://res.cloudinary.com/yashwant9263/image/upload/v1645126116/Camp/ecommerce/home/bagpack1_zu78hu.webp',
  },
  {
    id: uuid(),
    price: 2010.0,
    discount: 40,
    category: 'Trending',
    title: 'Men’s Hiking Fleece Jacket - MH120',
    img: 'https://res.cloudinary.com/yashwant9263/image/upload/v1645126228/Camp/ecommerce/home/hiking_flece_d9lh7g.webp',
  },
  {
    id: uuid(),
    price: 2010.0,
    discount: 40,
    category: 'Trending',
    title: 'Trekking Backpack Trek 900 50+10 Litre - Light Grey',
    img: 'https://res.cloudinary.com/yashwant9263/image/upload/v1645126153/Camp/ecommerce/home/rugsack1_gxdplc.webp',
  },
]
