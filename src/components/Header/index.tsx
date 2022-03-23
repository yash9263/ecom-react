import { Heart, ShoppingBag, User } from 'react-feather'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { QUERIES } from 'styles/constants'
import { Box, Block } from 'styles/shared'
import Logo from './Logo'

export default function Header() {
  return (
    <Wrapper as="header">
      <Box mR="auto">
        <Logo />
      </Box>
      <Box display="flex">
        <NavLink to="/login">
          <User /> <NavText>Sign in</NavText>
        </NavLink>
        <NavLink to="/wishlist">
          <Heart /> <NavText>Wishlist</NavText>
        </NavLink>
        <NavLink to="/cart">
          <ShoppingBag />
          <NavText>Cart</NavText> (0)
        </NavLink>
      </Box>
    </Wrapper>
  )
}

export const Wrapper = styled(Block)`
  display: flex;
  align-items: center;
  height: 64px;
`

export const NavText = styled.span`
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
  @media ${QUERIES.tablet} {
    display: none;
  }
`

export const NavLink = styled(Link)`
  position: relative;
  display: flex;
  gap: 8px;
  color: inherit;
  margin-left: 16px;
  text-decoration: none;
  margin-bottom: 4px;
  &:hover {
    text-decoration: none;
  }
  &:hover ${NavText}:before {
    transform: scale(1);
    transform-origin: bottom left;
  }
`
