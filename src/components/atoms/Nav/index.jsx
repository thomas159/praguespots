import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = styled(NavLink)`
  display:flex;
  height:41px;
  background: inherit;
  color:#ddd;
  cursor:pointer;
  text-decoration:none;
  align-items:center;
  justify-content:center;
  margin-top:5px;
  &:hover {
    background:#fff;
    color:#90Ba41;
    text-decoration:none;
  }
`

export default Nav
