import styled from 'styled-components'

export default function ProductImage() {
  return (
    <Images>
      <img src='images/products/sofa-amber.jpg' alt='' />
      <img src='images/products/sofa-charcoal.jpg' alt='' hidden />
      <img src='images/products/sofa-red.jpg' alt='' hidden />
    </Images>
  )
}

const Images = styled.div`
  margin: 40px 0 0;

  img {
    max-width: none;
    width: 100%;
  }

  img[hidden] {
    display: none !important;
  }
`
