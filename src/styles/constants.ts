export const COLORS = {
  black: '0, 0%, 0%',
  white: '0, 0%, 100%',
  gray: {
    100: '240, 20%, 97%',
    150: '240, 14%, 93%',
    200: '240, 13%, 88%',
    300: '240, 14%, 78%',
    400: '240, 13%, 69%',
    500: '240, 14%, 61%',
    600: '240, 14%, 46%',
    700: '240, 18%, 35%',
    800: '240, 21%, 25%',
    900: '240, 22%, 17%',
  },
}

/* 

  TODO: add function to generate 5 shades from given color and create an object of all the shades

  --color-primary-500: hsl(245, 58%, 51%);
  500 - 100 - 50
  --color-secondary-500: hsl(201, 86%, 26%);
  500 - 100
  --color-success-500: hsl(137, 44%, 25%);
  500 - 100
  --color-danger-500: hsl(4, 73%, 33%);
  500 - 100
  --color-warning-500: hsl(29, 69%, 36%);
  500 - 100
*/

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
