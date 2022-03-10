import styled from 'styled-components'
import { colors, dimensions, gutters, resolvePixelVal, typography } from '../utils'

import type { BoxProps } from '../types/utils-types'

const Box = styled.div<BoxProps>`
  position: ${(p) => p.position};
  display: ${(p) => p.display};
  ${(p) => (p.gap && (p.display === 'flex' || p.display === 'inline-flex') ? `gap: ${p.gap}px;` : null)}
  ${(p) =>
    p.align && (p.display === 'flex' || p.display === 'inline-flex') ? `align-items: ${p.align};` : null}
  ${(p) =>
    p.justify && (p.display === 'flex' || p.display === 'inline-flex')
      ? `justify-content: ${p.justify};`
      : null}
  ${(p) =>
    p.direction && (p.display === 'flex' || p.display === 'inline-flex')
      ? `flex-direction: ${p.direction};`
      : null}
  overflow: ${(p) => p.overflow};
  border-radius: ${(p) => resolvePixelVal(p.borderRadius)};
  inset: ${(p) => p.inset};
  ${gutters}
  ${colors}
  ${dimensions}
  ${typography}
`

export default Box
