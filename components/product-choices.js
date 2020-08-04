import styled from 'styled-components'
import { breakpoints } from '../utilities/constants'

export default function ProductChoices() {
  return (
    <Fragment>
      <Title>
        <h3>1. Choose a fabric</h3>
        <p>Choose your choice from fabrics to leather.</p>
      </Title>

      <h4>Fabric Choices</h4>

      <Thumbnails>
        <div className='active'>
          <img src='images/products/sofa-amber-thumb.jpg' alt='' />
          <span>Amber</span>
        </div>
        <div>
          <img src='images/products/sofa-charcoal-thumb.jpg' alt='' />
          <span>Charcoal</span>
        </div>
        <div>
          <img src='images/products/sofa-red-thumb.jpg' alt='' />
          <span>Red</span>
        </div>
      </Thumbnails>
    </Fragment>
  )
}

const Fragment = styled.div`
  padding: 35px 0;
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

const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media ${breakpoints.large} {
    grid-gap: 20px;
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
