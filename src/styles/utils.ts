import { css } from 'styled-components'
import type { gutterProps, colorProps, dimensionsProps, typographyProps, Globals } from './types/utils-types'

const resolvePixelVal = (gutter: Globals | number | string | undefined): string | undefined => {
  if (!gutter) return
  return typeof gutter === 'number' ? gutter + 'px' : !isNaN(Number(gutter)) ? gutter + 'px' : gutter
}

const gutters = css<gutterProps>`
  margin: ${(p) => resolvePixelVal(p.m)};
  padding: ${(p) => resolvePixelVal(p.p)};
  margin-top: ${(p) => resolvePixelVal(p.mT) || resolvePixelVal(p.mY)};
  margin-left: ${(p) => resolvePixelVal(p.mL) || resolvePixelVal(p.mX)};
  margin-bottom: ${(p) => resolvePixelVal(p.mB) || resolvePixelVal(p.mY)};
  margin-right: ${(p) => resolvePixelVal(p.mR) || resolvePixelVal(p.mX)};
  padding-top: ${(p) => resolvePixelVal(p.pT) || resolvePixelVal(p.pY)};
  padding-left: ${(p) => resolvePixelVal(p.pL) || resolvePixelVal(p.pX)};
  padding-bottom: ${(p) => resolvePixelVal(p.pB) || resolvePixelVal(p.pY)};
  padding-right: ${(p) => resolvePixelVal(p.pR) || resolvePixelVal(p.pX)};
`

const colors = css<colorProps>`
  background: ${(prop) => prop.bg || null};
  color: ${(prop) => prop.color || null};
`

const dimensions = css<dimensionsProps>`
  width: ${(p) => resolvePixelVal(p.width)};
  height: ${(p) => resolvePixelVal(p.height)};
  max-width: ${(p) => resolvePixelVal(p.maxW)};
  max-height: ${(p) => resolvePixelVal(p.maxH)};
  min-width: ${(p) => resolvePixelVal(p.minW)};
  min-height: ${(p) => resolvePixelVal(p.minH)};
`

const typography = css<typographyProps>`
  font-size: ${(p) => p.fontSize || null};
  line-height: ${(p) => p.lineHeight || null};
  font-weight: ${(p) =>
    p.fontWeight === 'bold'
      ? 'var(--font-weight-bold)'
      : p.fontWeight === 'medium'
      ? 'var(--font-weight-medium)'
      : null};
  text-align: ${(p) => p.textAlign};
`

const typographyStyles = {
  heading1: css`
    font-size: 3.125rem;
    line-height: 1.33;
  `,
  heading2: css`
    font-size: 2.375;
    line-height: 1.33;
  `,
  heading3: css`
    font-size: 1.75;
    line-height: 1.33;
  `,
  heading4: css`
    font-size: 1.313rem;
    line-height: 1.5;
  `,
  heading5: css`
    font-size: 0.875rem;
    line-height: 1.5;
  `,
  body: css`
    font-size: 1rem;
    line-height: 1.5;
  `,
  smallText: css``,
}

const flexUtils = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexColCenter: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  flexCenterX: css`
    display: flex;
    justify-content: center;
  `,
  flexCenterY: css`
    display: flex;
    align-items: center;
  `,
  flexCol: css`
    display: flex;
    flex-direction: column;
  `,
}

const pseudoDefault = css`
  content: '';
  position: absolute;
  display: block;
`

export {
  resolvePixelVal,
  gutters,
  colors,
  dimensions,
  typography,
  typographyStyles,
  flexUtils,
  pseudoDefault,
}
