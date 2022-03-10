import styled from 'styled-components'
import { QUERIES } from '../constants'
import type { BoxProps } from '../types/utils-types'
import Box from './Box'

const Block = styled(Box)<BoxProps>`
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  //TODO: add maxWidth property using max() or min()
  @media ${QUERIES.mobile} {
    padding-left: 16px;
    padding-right: 16px;
  }
`
export default Block
