import styled from 'styled-components'
import { breakpoints } from '../utilities/constants'

export default function NavPopupToggle({ open, ...props }) {
  return (
    <NavToggle className={open ? 'nav-toggle open' : 'nav-toggle'} {...props}>
      <div className='gg-menu'></div>
    </NavToggle>
  )
}

const NavToggle = styled.div`
  &.nav-toggle {
    position: relative;
    z-index: 9999;
    left: -20px;
    top: -6px;
    width: 38px;
    height: 38px;
    cursor: pointer;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: var(--color-brand-blue);
  }

  @media ${breakpoints.medium} {
    &.nav-toggle {
      display: none;
    }
  }

  .gg-menu {
    top: 18px;
  }

  .gg-menu,
  .gg-menu::after,
  .gg-menu::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 2px;
    margin: 0 auto;
    border-radius: 3px;
    background: #fff;
  }

  &.nav-toggle.open {
    background: var(--color-brand-blue-dark);
  }

  .gg-menu::after,
  .gg-menu::before {
    content: '';
    position: absolute;
    top: -6px;
  }

  .gg-menu::after {
    top: 6px;
  }
`
