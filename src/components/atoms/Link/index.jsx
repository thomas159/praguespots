import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: #000;
  &:hover {
    text-decoration: underline;
  }
`

export default StyledLink
