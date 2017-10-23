import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../../components/atoms/Container'
// import Home from '../pages/Home'
// import About from '../pages/About'
// import Topics from '../pages/Topics'

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`

const StyledNavLink = styled(NavLink)`
  color: #ff0000;
`

const Grid = styled.div`
  display: flex;
  flex: 0 0 100%;
`
const Cell = styled.div`
  flex: 0 0 20%;
`

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Container>
          <Grid>
            <Cell><StyledNavLink exact to="/" activeClassName="selected">Home</StyledNavLink></Cell>
            <Cell><StyledNavLink to="/about" activeClassName="selected">About</StyledNavLink></Cell>
            <Cell><StyledNavLink to="/reviews/food-and-drink" activeClassName="selected">Food & Drink</StyledNavLink></Cell>
            <Cell><StyledNavLink to="/reviews/things-to-do" activeClassName="selected">Things to do</StyledNavLink></Cell>
            <Cell><StyledNavLink to="/topics" activeClassName="selected">Topics</StyledNavLink></Cell>
          </Grid>
        </Container>
      </Wrapper>
    )
  }
}

export default Header

