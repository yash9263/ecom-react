type Globals = 'inherit' | 'initial' | 'revert' | 'unset'

interface gutterProps {
  p?: Globals | string | number
  m?: Globals | string | number
  pX?: Globals | string | number
  pY?: Globals | string | number
  mX?: Globals | string | number
  mY?: Globals | string | number
  pT?: Globals | string | number
  pR?: Globals | string | number
  pB?: Globals | string | number
  pL?: Globals | string | number
  mT?: Globals | string | number
  mR?: Globals | string | number
  mB?: Globals | string | number
  mL?: Globals | string | number
}

interface colorProps {
  bg?: Globals | string
  color?: Globals | string
}

interface dimensionsProps {
  width?: Globals | string | number
  height?: Globals | string | number
  maxW?: Globals | string | number
  minW?: Globals | string | number
  maxH?: Globals | string | number
  minH?: Globals | string | number
}

interface typographyProps {
  fontSize?: Globals | number | string
  textAlign?: Globals | 'center' | 'left' | 'right'
  fontWeight?: Globals | 'bold' | 'medium' | 'normal'
  lineHeight?: Globals | number
}

interface BoxProps extends gutterProps, colorProps, dimensionsProps, typographyProps {
  position?: Globals | 'relative' | 'absolute' | 'static'
  display?: Globals | 'block' | 'flex' | 'inline-block' | 'inline-flex' | 'none'
  direction?: Globals | 'row' | 'column' | 'row-reverse' | 'column-reverse'
  gap?: Globals | number
  align?: Globals | 'baseline' | 'normal' | 'stretch' | 'center' | 'flex-end' | 'flex-start'
  justify?:
    | Globals
    | 'baseline'
    | 'normal'
    | 'stretch'
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  overflow?: Globals | 'hidden' | 'auto'
  borderRadius?: Globals | number | string
  inset?: Globals | string
}

export type { Globals, gutterProps, colorProps, dimensionsProps, typographyProps, BoxProps }
