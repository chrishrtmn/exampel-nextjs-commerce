import styled from 'styled-components'
import { breakpoints } from '../utilities/constants'

export default function ProductDetails() {
  return (
    <>
      <Title>
        <h1>The Sofa</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dui
          interdum, tincidunt velit sit amet.
        </h2>
      </Title>
      <Pricing>
        <div>
          <div>Pay Now</div>
          <div className='price'>$1,250</div>
          <div>
            <div className='old-price'>$1,450</div>
            <small>$200 OFF with code</small>
          </div>
        </div>
        <div>
          <div>Pay as low as</div>
          <div className='price'>
            $25<span>/month</span>
          </div>
          <div>
            <div>with Klarna</div>
            <small>
              <a href='#klarna'>Learn More</a>
            </small>
          </div>
        </div>
      </Pricing>
      <AddCart>
        <div>
          <button>Add to cart</button>
        </div>
        <div>
          <a href='#savedesign'>Save design for later</a>
        </div>
      </AddCart>
    </>
  )
}

const Title = styled.div`
  h1 {
    font-family: var(--font-family-brand);
    font-size: var(--font-size-heading);
    line-height: 1.5;
    text-transform: uppercase;
    color: var(--color-brand-blue-dark);
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
`

const Pricing = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 25px 0;
  text-align: center;
  font-size: 20px;
  line-height: 1.2;

  @media ${breakpoints.medium} {
    grid-template-columns: 1fr 1fr;
  }

  & > div {
    padding: 0 15px 15px;
    border-bottom: 2px solid #fff;

    @media ${breakpoints.medium} {
      padding: 0;
      border-bottom: none;
      border-right: 2px solid #fff;
    }
  }

  & > div:last-of-type {
    padding: 15px 15px 0;
    border: none;

    @media ${breakpoints.medium} {
      padding: 0;
    }
  }

  .price {
    font-size: var(--font-size-heading);
    color: var(--color-brand-red);
    font-weight: 700;

    span {
      font-size: 20px;
    }
  }

  .old-price {
    text-decoration-line: line-through;
  }

  small {
    font-size: 12px;

    a {
      color: var(--color-base);

      &:hover {
        color: var(--color-brand-blue);
      }
    }
  }
`

const AddCart = styled.div`
  margin: 25px 0 35px;
  text-align: center;

  button {
    width: 100%;
    margin: 0 0 5px;
    padding: 16px;
    border: none;
    border-radius: 6px;
    font-family: var(--font-family-brand);
    font-size: var(--font-size-button);
    line-height: 1.2;
    text-transform: uppercase;
    color: #fff;
    background: var(--color-brand-blue);
    cursor: pointer;

    &:hover {
      background: var(--color-brand-blue-dark);
    }
  }

  a {
    padding: 0 0 1px;
    font-family: var(--font-family-brand);
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 3px solid var(--color-brand-blue);
    color: var(--color-base);

    &:hover {
      color: var(--color-brand-blue);
    }
  }
`
