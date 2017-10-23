import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 2.6rem;
  color:#6f5934;
  margin:0;
  padding:0;
  ${props => props.padding20 && 'padding:20px 0'}
  ${props => props.padding35 && 'padding:35px 0 0 0'}
`

export default H1
