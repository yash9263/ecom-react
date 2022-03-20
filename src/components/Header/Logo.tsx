import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Logo() {
  return <LogoLink to="/">Logo</LogoLink>
}

export const LogoLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: var(--font-weight-medium);
`
