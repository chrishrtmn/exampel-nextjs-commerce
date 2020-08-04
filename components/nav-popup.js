import styled from 'styled-components'

export default function NavPopup({ close }) {
  return (
    <Nav className='menu'>
      <a onClick={close} href='/' className='active'>
        The Sofa
      </a>
      <a href='/'>Reviews</a>
      <a href='/'>About Us</a>
      <a href='/'>Showroom</a>
      <a href='/'>Swatches</a>
    </Nav>
  )
}

const Nav = styled.nav`
  text-align: center;

  a {
    display: block;
    padding: 10px 0;
    border-bottom: 3px solid #fff;
    color: var(--color-base);
    text-decoration: none;
    font-family: var(--font-family-brand);
    font-size: 18px;
  }

  a:last-of-type {
    border: none;
  }

  a:hover {
    color: var(--color-brand-blue);
  }
`
