import { createGlobalStyle } from 'styled-components'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  :root {
    --color-base: #444444;
    --color-base-light: #E8E8E8;

    --color-brand-blue: #0D6EF0;
    --color-brand-blue-dark: #0547A0;
    --color-brand-red: #EF0E11;
    --color-brand-red-dark: #C6232D;

    --color-background: #f2f2f2;

    --font-family-base: 'Raleway', system-ui, BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-family-brand: 'Bungee', cursive;

    --font-size-button: 20px;
    --font-size-heading: 40px;
  }

  /* Custom Reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  img:not([alt]) {
    outline: 2px dashed red;
    filter: blur(10px);
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Global */
  body,
  #__next {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: var(--font-family-base);
    color: var(--color-base);
    background: var(--color-background);
  }

  a,
  button {
    transition: all ease-in-out 0.2s;
  }
`
