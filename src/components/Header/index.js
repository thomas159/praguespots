import React from 'react'
import styled from 'styled-components'
// import { NavLink } from 'react-router-dom'
import Nav from '../../components/atoms/Nav'
// import { media } from '../../../Container'
import { media } from '../../components/atoms/Container'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`

const Container = styled.div`
  display: flex;
  max-width: 1260px;
  padding: 20px;
  justify-content: center;
`

const StyledNavLink = styled(Nav)`
`

const Grid = styled.div`
  display: flex;
  flex: 0 0 100%;
`
const Cell = styled.div`
  flex: 0 0 20%;
`

const Logo = styled.div`
  font-size: 20px;
  color: palevioletred;
  font-weight: 700;
`

const Hide = styled.div`
  display: none;
${media.desktop`
  display: block;
`}
${media.giant`
  display: block;
`}
`

const Hamburger = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 80px;
  background: #000;
`

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Container>
          <Hamburger />
          <Logo>PragueSpots</Logo>
          <Hide>
            <Grid>
              <Cell><StyledNavLink exact to="/" activeClassName="selected">Home</StyledNavLink></Cell>
              <Cell><StyledNavLink to="/about" activeClassName="selected">About</StyledNavLink></Cell>
              <Cell><StyledNavLink to="/reviews/food-and-drink" activeClassName="selected">Food & Drink</StyledNavLink></Cell>
              <Cell><StyledNavLink to="/reviews/things-to-do" activeClassName="selected">Things to do</StyledNavLink></Cell>
              <Cell><StyledNavLink to="/topics" activeClassName="selected">Topics</StyledNavLink></Cell>
            </Grid>
          </Hide>
        </Container>
      </Wrapper>
    )
  }
}

export default Header

