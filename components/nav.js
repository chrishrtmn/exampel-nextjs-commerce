import Link from 'next/link'
import Logo from './logo'
import styled from 'styled-components'

export default function Nav() {
  return (
    <Fragment>
      <div>
        <Link href='/'>
          <a className='active'>The Sofa</a>
        </Link>

        <a href='#'>Reviews</a>
        <a href='#'>About Us</a>
      </div>

      <div className='logo'>
        <Logo />
      </div>

      <div>
        <a href='#'>Showroom</a>
        <a href='#'>Swatches</a>
      </div>
    </Fragment>
  )
}

const Fragment = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 20px;
  margin: 35px 0;

  .logo {
    justify-self: center;
  }

  & > div:last-of-type {
    justify-self: end;
  }
`
