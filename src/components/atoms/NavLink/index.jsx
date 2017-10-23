import styled from 'styled-components'

const NavLink = styled.div`
  display:flex;
  height:41px;
  background: inheerit;
  color:#fff;
  cursor:pointer;
  text-decoration:none;
  align-items:center;
  justify-content:center;
  margin-top:5px;
  border-radius:5px 5px 0 0;
  &:hover { 
    background:#fff;
    color:#90Ba41;
    text-decoration:none;
  }
`

export default NavLink
