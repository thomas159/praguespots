import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import H2 from '../../atoms/H2'

const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  flex:0 0 100%;
  height:auto;
  padding: 20px;
  background:#fff;
`

export default class CatCardItem extends React.Component {

  static propTypes = {
    cat: React.PropTypes.isRequired,
    slug: React.PropTypes.isRequired,
    name: React.PropTypes.isRequired,
  }

  render() {
    return (
      <Wrapper>
        <Link to={`/reviews/${this.props.cat}/${this.props.slug}`}><H2>{this.props.name}</H2></Link>
      </Wrapper>
    )
  }
}
