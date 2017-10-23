import styled from 'styled-components'
import React from 'react'
import { string } from 'prop-types'

const StyledImg = styled.img`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  ${props => props.darken && 'padding:20px 0'}
`

const Img = ({ src }) => (
  <StyledImg src={`https://dl.dropboxusercontent.com/s/${src}`} />
)

export default Img

Img.propTypes = {
  src: string,
}

Img.defaultProps = {
  src: '',
}
