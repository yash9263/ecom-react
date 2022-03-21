import styled from 'styled-components'

import Categories from 'route-containers/home/Categories'
import { QUERIES } from 'styles/constants'
import { Box, Block, Image, Button } from '../styles/shared'
import { v4 as uuid } from 'uuid'
import ProductRow from 'components/ProductRow'

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
    img: 'https://res.cloudinary.com/yashwant9263/image/upload/v1647592165/Camp/ecommerce/home/77a49585-0afa-485d-b8e2-5bddceee5c11_ccexpress_hr8buu.png',
    title: "The North Face Ceptor Jacket - Men's",
    price: 2847,
    discount: 25,
    category: 'men',
    size: ['s', 'm', 'l', 'xl'],
    rating: 4.3,
  },
  {
    id: uuid(),
    img: 'https://res.cloudinary.com/yashwant9263/image/upload/v1647593166/Camp/ecommerce/home/a14142485858m_ccexpress_aewsch.png',
    title: 'The North Face Mens Recycled Gotham Jacket',
    price: 6648,
    discount: 30,
    category: 'men',
    size: ['s', 'm', 'l', 'xl'],
    rating: 3.8,
  },
  {
    id: uuid(),
    img: 'https://res.cloudinary.com/yashwant9263/image/upload/v1647593375/Camp/ecommerce/home/a14142743131n_ccexpress_k5xi2f.png',
    title: 'Jack Wolfskin Mens White Forest Jacket',
    price: 2184,
    discount: 20,
    category: 'men',
    size: ['s', 'm', 'l', 'xl'],
    rating: 4,
  },
  {
    id: uuid(),
    img: 'https://res.cloudinary.com/yashwant9263/image/upload/v1647593530/Camp/ecommerce/home/1c4edc15-0d32-482b-a042-e9bf7aa0af17_ccexpress_vpkrga.png',
    title: "Arc'teryx Micon Jacket - Men's",
    price: 3253,
    discount: 15,
    category: 'men',
    size: ['s', 'm', 'l', 'xl'],
    rating: 4.7,
  },
]
