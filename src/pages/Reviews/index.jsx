import React from 'react'
import { string } from 'prop-types'
import Section from '../../components/atoms/Section'
import Container from '../../components/atoms/Container'
import CategoriesFilter from '../../components/Categories/CategoriesFilter'

export default class Reviews extends React.Component {
  static propTypes = {
    match: string,
  }

  static defaultProps = {
    match: '',
  }

  render() {
    return (
      <Section>
        <Container>
          <CategoriesFilter filter={this.props.match.params.catId} />
        </Container>
      </Section>
    )
  }
}
