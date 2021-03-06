// @ts-ignore
import { createGlobalStyle } from 'styled-components'
import { COLORS, WEIGHTS } from './constants'

const GlobalStyles = createGlobalStyle`
/* Css reset */
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
  html, body {
    min-height: 100%;
  }
*/
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
  
:root {
  --color-black: hsl(${COLORS.black});
  --color-white: hsl(${COLORS.white});

  /* gray colors */
  ${Object.keys(COLORS.gray)
    .map(
      (shade) => `--color-gray-${shade}: hsl(${COLORS.gray[shade as unknown as keyof typeof COLORS.gray]});`,
    )
    .join('\n')}

/* 
  --color-gray-100: hsl(${COLORS.gray[100]})
  --color-gray-150: hsl(${COLORS.gray[150]})
  --color-gray-200: hsl(${COLORS.gray[200]})
  --color-gray-300: hsl(${COLORS.gray[300]})
  --color-gray-400: hsl(${COLORS.gray[400]})
  --color-gray-500: hsl(${COLORS.gray[500]})
  --color-gray-600: hsl(${COLORS.gray[600]})
  --color-gray-700: hsl(${COLORS.gray[700]})
  --color-gray-800: hsl(${COLORS.gray[800]})
  --color-gray-900: hsl(${COLORS.gray[900]}) */


  --font-weight-bold: ${WEIGHTS.bold};
  --font-weight-medium: ${WEIGHTS.medium};
  --font-weight-normal: ${WEIGHTS.normal};
  --font-body: -apple-system, "Segoe UI", Helvetica Neue, Helvetica, Roboto,
    Arial, sans-serif, system-ui, "Apple Color Emoji", "Segoe UI Emoji";
}

html, body {
  padding: 0;
  margin:  0;
  /* color: ;
  background: ; */
}
body {
  font-family: var(--font-body);
  line-height: 1.5;
  background-repeat: no-repeat;
  min-height: 100vh;
  min-height: calc(100vh - env(safe-area-inset-bottom));
}
h1, h2, h3, h4, h5, h6 {
  /* font-family; ; */
  margin: 0;
}

h1 {
  font-size: 3.125rem;
  line-height: 1.33;
}

h2 {
  font-size: 2.375;
  line-height: 1.33;
}

h3 {
  font-size: 1.75;
  line-height: 1.33;
}

h4 {
  font-size: 1.313rem;
  line-height: 1.5;
}

h5  {
  font-size: 0.95rem;
  line-height: 1.5;
}

h6 {
  font-size: 0.875rem;
  line-height: 1.5;
}

button {
  appearance: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  outline-offset: 2px;
  border-radius: 2px;
  font-weight: var(--font-weight-medium);
  margin: 0;
  padding: 8px 12px;
  word-break: keep-all;
}

a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

`

export { GlobalStyles }
