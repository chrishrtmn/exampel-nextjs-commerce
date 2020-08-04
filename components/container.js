import ProductImage from './product-image'
import ProductIcons from './product-icons'
import ProductDetails from './product-details'
import ProductChoices from './product-choices'
import styled from 'styled-components'
import { breakpoints } from '../utilities/constants'

export default function Container() {
  return (
    <Fragment>
      <main>
        <p>
          <span>
            <img src='images/icons/padlock.svg' alt='' />
            Secure Checkout
          </span>
          <span>Ships in 5-7 Business Days</span>
        </p>

        <ProductImage />
        <ProductIcons />
      </main>

      <aside>
        <ProductDetails />
        <ProductChoices />
      </aside>
    </Fragment>
  )
}

const Fragment = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px 0;

  @media ${breakpoints.small} {
    grid-template-columns: 1fr 260px;
    grid-gap: 30px;
  }

  @media ${breakpoints.medium} {
    grid-template-columns: 1fr 330px;
  }

  @media ${breakpoints.large} {
    grid-template-columns: 1fr 440px;
  }

  @media ${breakpoints.xlarge} {
    grid-template-columns: 1fr 440px;
  }

  main {
    padding: 10px 0 0;
  }

  main p {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 20px;

    span {
      font-size: 14px;

      @media ${breakpoints.medium} {
        padding: 0;
        font-size: 16px;
      }

      &:last-of-type {
        padding: 0 20px 0 0;
        text-align: right;
      }

      img {
        display: inline-block;
        margin: 0 5px -3px 0;
        height: 19px;
      }
    }
  }
`
