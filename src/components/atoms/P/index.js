import { PropTypes } from 'react'
import styled from 'styled-components'

const P = styled.p`
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`

P.propTypes = {
  reverse: PropTypes.bool,
}

export default P
