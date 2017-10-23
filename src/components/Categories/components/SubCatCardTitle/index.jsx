import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { string } from 'prop-types'

const Wrapper = styled.div`
  padding: 20px;
  color: #ff00ff;
`

const SubCatCardTitle = props => (
  <Wrapper>
    <Link to={`/reviews/${props.slug}`}>dd{props.cat}</Link>
  </Wrapper>
)

export default SubCatCardTitle

SubCatCardTitle.propTypes = {
  cat: string,
  slug: string,
}

SubCatCardTitle.defaultProps = {
  cat: '',
  slug: '',
}
