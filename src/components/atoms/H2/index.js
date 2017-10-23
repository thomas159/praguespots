import styled from 'styled-components'

const H2 = styled.h2`
  font-size: 18px;
  color:#6f5934;
  margin:0;
  padding:0;
  text-transform: capitalize;
  ${props => props.padding20 && 'padding:20px 0'}
  ${props => props.padding35 && 'padding:20px 0 35px 0'}
  ${props => props.white && 'color: #fff'}
`

export default H2
