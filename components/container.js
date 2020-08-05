import { useState } from 'react'
import styled from 'styled-components'

import ProductIcons from './product-icons'
import ProductDetails from './product-details'

import { breakpoints } from '../utilities/constants'

const products = [
  {
    id: 1,
    color: 'Amber',
    filename: 'sofa-amber',
    price: '1250.00',
    discount: 200,
  },
  {
    id: 2,
    color: 'Charcoal',
    filename: 'sofa-charcoal',
    price: '1125.00',
    discount: 0,
  },
  {
    id: 3,
    color: 'Red',
    filename: 'sofa-red',
    price: '1575.00',
    discount: 100,
  },
]

export default function Container() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleOnClick = (index) => {
    setActiveIndex(index)
  }

  const ProductImg = products.map((product, index) => (
    <img
      src={`images/products/${product.filename}.jpg`}
      alt=''
      className={activeIndex === index ? 'active' : ''}
    />
  ))

  const ProductImgThumbs = products.map((product, index) => (
    <div
      key={index}
      onClick={() => handleOnClick(index)}
      className={activeIndex === index ? 'active' : ''}
    >
      <img src={`images/products/${product.filename}-thumb.jpg`} alt='' />
      <span>{product.color}</span>
    </div>
  ))

  return (
    <StyledWrapper>
      <main>
        <p>
          <span>
            <img src='images/icons/padlock.svg' alt='' />
            Secure Checkout
          </span>
          <span>Ships in 5-7 Business Days</span>
        </p>

        <ProductImagesWrapper>{ProductImg}</ProductImagesWrapper>
        <ProductIcons />
      </main>

      <aside>
        <ProductDetails />
        <ProductSelectionWrapper>
          <Title>
            <h3>1. Choose a fabric</h3>
            <p>Choose your choice from fabrics to leather.</p>
          </Title>

          <h4>Fabric Choices</h4>

          <Selection>{ProductImgThumbs}</Selection>
        </ProductSelectionWrapper>
      </aside>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
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
        text-align: right;

        @media ${breakpoints.small} {
          padding: 0 20px 0 0;
        }
      }

      img {
        display: inline-block;
        margin: 0 5px -3px 0;
        height: 19px;
      }
    }
  }
`

const ProductImagesWrapper = styled.div`
  margin: 40px 0 0;

  img {
    display: none;
    max-width: none;
    width: 100%;

    &.active {
      display: block;
    }
  }
`

const ProductSelectionWrapper = styled.div`
  padding: 25px 0;
  border-top: 2px solid #fff;

  h4 {
    margin: 35px 0 10px;
    font-weight: 700;
  }
`

const Title = styled.div`
  h3 {
    text-transform: uppercase;
    font-family: var(--font-family-brand);
    font-size: 16px;
    color: var(--color-brand-blue-dark);
  }
`

const Selection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  grid-gap: 10px;

  @media ${breakpoints.large} {
    grid-gap: 15px;
  }

  div {
    text-align: center;
    border-radius: 6px;
    border: 2px solid var(--color-background);
    background: var(--color-base-light);
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    img {
      width: 100%;
      padding: 30px 10px;
      background: var(--color-background);

      @media ${breakpoints.small} {
        padding: 20px 10px;
      }

      @media ${breakpoints.medium} {
        padding: 30px 10px;
      }
    }

    span {
      display: block;
      padding: 12px 5px;
      font-size: 14px;
      line-height: 1.2;
    }

    &.active {
      border: 2px solid var(--color-brand-blue);
      background: var(--color-brand-blue);

      img {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      span {
        color: #fff;
      }
    }
  }
`
