import React from 'react'
import Section from '../../components/atoms/Section'
import Container from '../../components/atoms/Container'
// import Reviews from '../../organisms/Reviews'
import HomeReviews from './containers/HomeReviews'
import CategoriesMultiple from '../../components/Categories/CategoriesMultiple'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeReviews />
        <Section bg="#282828">
          <Container paddingTop>
            <CategoriesMultiple />
          </Container>
        </Section>
      </div>
    )
  }
}
