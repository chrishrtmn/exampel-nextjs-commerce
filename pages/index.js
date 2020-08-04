import Head from 'next/head'
import Header from '../components/header'
import Container from '../components/container'
import styled from 'styled-components'
import { widths, breakpoints } from '../utilities/constants'

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>The Sofa - Allday</title>
      </Head>

      <Wrapper>
        <Header />
        <Container />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: ${widths.xlarge};
  margin: 0 auto;
  padding: 0 20px;
`
