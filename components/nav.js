import Popup from 'reactjs-popup'
import NavPopupToggle from './nav-popup-toggle'
import NavPopup from './nav-popup'
import styled from 'styled-components'
import { breakpoints } from '../utilities/constants'

const contentStyle = {
  width: '80%',
  border: 'none',
  background: 'none',
}

export default function Nav() {
  return (
    <Fragment>
      <Popup
        trigger={(open) => <NavPopupToggle open={open} />}
        modal
        lockScroll={true}
        overlayStyle={{ background: 'var(--color-background)' }}
        contentStyle={contentStyle}
      >
        {(close) => <NavPopup close={close} />}
      </Popup>

      <div className='nav-left'>
        <a href='/' className='active'>
          The Sofa
        </a>
        <a href='#'>Reviews</a>
        <a href='#'>About Us</a>
      </div>

      <div className='logo'>
        <a href='/' title='Allday'>
          <img src='images/logos/logo.svg' alt='' />
        </a>
      </div>

      <div className='nav-right'>
        <a href='#'>Showroom</a>
        <a href='#'>Swatches</a>
      </div>

      <div></div>
    </Fragment>
  )
}

const Fragment = styled.nav`
  display: grid;
  grid-template-columns: 1fr 180px 1fr;
  margin: 16px 0 45px;

  @media ${breakpoints.medium} {
    grid-template-columns: 1fr 325px 1fr;
    grid-gap: 0 20px;
    margin: 35px 0 45px;
  }

  .logo {
    justify-self: center;
    position: relative;
    z-index: 9999;

    img {
      max-height: 50px;
    }
  }

  .nav-left,
  .nav-right {
    display: none;
    padding: 12px 0 0;

    @media ${breakpoints.medium} {
      display: inline-block;
    }

    a {
      margin: 0 20px 0 0;
      padding: 0 0 2px;
      font-family: var(--font-family-brand);
      text-decoration: none;
      color: var(--color-base);

      @media ${breakpoints.large} {
        margin: 0 40px 0 0;
      }

      &.active,
      &:hover {
        border-bottom: 3px solid var(--color-brand-blue);
      }

      &:last-of-type {
        margin: 0;
      }
    }
  }

  .nav-right {
    justify-self: end;
  }
`
