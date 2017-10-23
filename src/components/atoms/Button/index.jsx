import styled from 'styled-components'

const Button = styled.button`
  margin:0;
  padding:0;
  font-size: 1.0em;
  color:#fff;
  background:#9ac93f;
  cursor:pointer;
  border:none;
  outline:none;
  width:100%;
  text-decoration:none;
  font-size:1.4rem;
  
  &:hover {
    background:#6da305;
  }
  ${props => props.large && 'height:45px; border-radius: 4px; '}
  
`

export default Button
