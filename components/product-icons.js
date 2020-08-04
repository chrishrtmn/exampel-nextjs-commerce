import styled from 'styled-components'
import { breakpoints } from '../utilities/constants'

export default function ProductIcons() {
  return (
    <Icons>
      <img src='images/icons/free-shipping.svg' alt='' />
      <img src='images/icons/trial.svg' alt='' />
      <img src='images/icons/made-in-america.svg' alt='' />
      <img src='images/icons/warranty.svg' alt='' />
      <img src='images/icons/assembly.svg' alt='' />
      <img src='images/icons/materials.svg' alt='' />
    </Icons>
  )
}

const Icons = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  margin: 10px 0 0;

  @media ${breakpoints.large} {
    grid-template-columns: repeat(6, 1fr);
  }

  img {
    max-height: 45px;

    @media ${breakpoints.large} {
      max-height: 60px;
    }
  }
`
