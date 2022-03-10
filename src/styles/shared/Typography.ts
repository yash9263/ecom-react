import styled, { css } from 'styled-components'
import { typographyStyles, colors, typography } from '../utils'

import type { typographyProps, colorProps } from '../types/utils-types'

interface typoProps extends typographyProps, colorProps {}

const extendedProps = css<typographyProps | colorProps>`
  ${colors}
  ${typography}
`

export const Heading1 = styled.h1<typoProps>`
  ${typographyStyles.heading1}
  ${extendedProps}
`

export const Heading2 = styled.h2<typoProps>`
  ${typographyStyles.heading2}
  ${extendedProps}
`

export const Heading3 = styled.h3<typoProps>`
  ${typographyStyles.heading3}
  ${extendedProps}
`

export const Heading4 = styled.h4<typoProps>`
  ${typographyStyles.heading4}
  ${extendedProps}
`

export const Heading5 = styled.h5<typoProps>`
  ${typographyStyles.heading5}
  ${extendedProps}
`

export const Heading6 = styled.h6<typoProps>`
  ${typographyStyles.heading5}
  ${extendedProps}
`

export const Text = styled.p<typoProps>`
  ${typographyStyles.heading5}
  ${extendedProps}
`
