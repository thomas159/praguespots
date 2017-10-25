import React from 'react'
import styled from 'styled-components'
import Section from '../../components/atoms/Section'
import Container from '../../components/atoms/Container'
// import Reviews from '../../organisms/Reviews'
// import HomeReviews from './containers/HomeReviews'
import Slider from '../../components/Slider'
import CategoriesMultiple from '../../components/Categories/CategoriesMultiple'

const Wrap = styled.div`
  width: 100%;
`

export default class Home extends React.Component {
  render() {
    return (
      <Wrap>
        <Slider />
        {/* <HomeReviews /> */}
        <Section bg="#eee">
          <Container padding40>
            <CategoriesMultiple />
          </Container>
        </Section>
      </Wrap>
    )
  }
}
