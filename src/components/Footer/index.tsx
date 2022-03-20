import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { Block, Box, flexCenterX, flexCol, Heading4 } from '../../styles/shared'
import { shopLinks, helpLinks, socials } from './footerLinks'

export default function Footer() {
  return (
    <FooterWrapper as="footer" p="64px 32px 32px">
      <Box display="flex" direction="column">
        <Heading4 pB={16}>Shop</Heading4>
        <UL>
          {shopLinks.map(({ path, title }) => (
            <li key={path}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </UL>
      </Box>
      <Box>
        <Heading4 pB={16}>Help</Heading4>
        <UL>
          {helpLinks.map(({ path, title }) => (
            <li key={path}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </UL>
      </Box>
      <SocialLinks>
        {socials.map(({ path, icon }) => (
          <Link key={path} to={path}>
            {icon}
          </Link>
        ))}
      </SocialLinks>
    </FooterWrapper>
  )
}

export const FooterWrapper = styled(Block)`
  ${flexCenterX}
  flex-wrap: wrap;
  gap: 32px 60px;
  background-color: var(--color-gray-200);
`

export const UL = styled.ul`
  ${flexCol}
  gap: 8px;
  list-style: none;
  padding: 0;
`

export const SocialLinks = styled(Box)`
  flex: 1 0 100%;
  flex-direction: row;
  ${flexCenterX}
  gap: 12px;
`
