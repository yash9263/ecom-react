export const COLORS = {
  black: '0, 0%, 0%',
  white: '0, 0%, 100%',
}

export const WEIGHTS = {
  bold: 700,
  medium: 500,
  normal: 400,
}

export const BREAKPOINTS = {
  mobile: 550,
  tablet: 950,
  laptop: 1300,
}

export const QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.mobile / 16}rem)`,
  tablet: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptop: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
}
