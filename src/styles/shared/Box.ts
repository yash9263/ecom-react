import styled from 'styled-components'
import { colors, dimensions, gutters, resolvePixelVal, typography } from './utils'

import type { BoxProps } from '../types/utils-types'

const isFlex = (display: BoxProps['display']) => display === 'flex' || display === 'inline-flex'

const Box = styled.div<BoxProps>`
  position: ${(p) => p.position};

  display: ${(p) => p.display};
  flex-direction: ${(p) => isFlex(p.display) && p.direction};
  gap: ${(p) => isFlex(p.display) && resolvePixelVal(p.gap)};
  align-items: ${(p) => isFlex(p.display) && p.align};
  justify-content: ${(p) => isFlex(p.display) && p.justify};
  flex-wrap: ${(p) => isFlex(p.display) && p.flexWrap && 'wrap'};

  overflow: ${(p) => p.overflow};
  border-radius: ${(p) => resolvePixelVal(p.borderRadius)};
  inset: ${(p) => p.inset};
  ${gutters}
  ${colors}
  ${dimensions}
  ${typography}
`

export default Box
