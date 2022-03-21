import { Link } from 'react-router-dom'
import styled from 'styled-components'

const categories = [
  {
    title: 'Men',
    path: '/',
  },
  {
    title: 'Women',
    path: '/',
  },
  {
    title: 'Kids',
    path: '/',
  },
  {
    title: 'Accesories',
    path: '/',
  },
  {
    title: 'SnowBoards',
    path: '/',
  },
]

const Categories = () => {
  return (
    <Wrapper>
      <h2>Top Categories</h2>
      <LinksWrapper>
        {categories.map(({ title, path }) => (
          <StyledLink key={title} to={path}>
            {title}
          </StyledLink>
        ))}
      </LinksWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  text-align: center;
`

export const LinksWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 24px;
  overflow: auto;
  justify-content: center;
`

export const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  margin-bottom: 8px;
  &:before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: -8px;
    left: 0;
    right: 0;
    background: var(--color-black);
    will-change: transform;
    transform: scale(0);
    transform-origin: bottom right;
    transition: transform 250ms ease-in;
  }
  &:hover {
    text-decoration: none;
  }
  &:hover:before {
    transform: scale(1);
    transform-origin: bottom left;
  }
`

export default Categories
