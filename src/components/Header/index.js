import React from 'react'
import styled from 'styled-components'
// import { NavLink } from 'react-router-dom'
import Nav from '../../components/atoms/Nav'
// import { media } from '../../../Container'
import { media } from '../../components/atoms/Container'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  z-index: 9999;
`

const Container = styled.div`
  display: flex;
  max-width: 1260px;
  padding: 20px;
  justify-content: center;
  margin: 0 auto;
`

const StyledNavLink = styled(Nav)`
`

const Grid = styled.div`
  display: flex;
  flex: 0 0 100%;
`
const Cell = styled.div`
  &:nth-child(1) {
  display: flex;
  flex: 0 0 40%;
  justify-content: flex-end
  }  &:nth-child(2) {
  display: flex;
  flex: 0 0 20%;
  justify-content: center;
  } &:nth-child(3) {
  display: flex;
  flex: 0 0 40%;
  justify-content: flex-start;
}
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
`

// const Hide = styled.div`
//   position: absolute;
//   display: none;
// ${media.desktop`
//   display: block;
// `}
// ${media.giant`
//   display: block;
// `}
// `

const Hamburger = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 80px;
  background: #000;
  ${media.desktop`
    display: none;
  `}
  ${media.giant`
    display: none;
  `}
`

// const SubCell = styled.div`
//   flex: 0 0 50%;
//   padding: 10px;
// `

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Container>
          <Hamburger />
          <Grid>
            <Cell>
              <StyledNavLink to="/about" activeClassName="selected">About</StyledNavLink>
              <StyledNavLink to="/about" activeClassName="selected">About</StyledNavLink>
            </Cell>
            <Cell>
              <Logo>PragueSpots</Logo>
            </Cell>
            <Cell>
              <StyledNavLink to="/reviews/food-and-drink" activeClassName="selected">Food & Drink</StyledNavLink>
              <StyledNavLink to="/reviews/things-to-do" activeClassName="selected">Things to do</StyledNavLink>
            </Cell>
          </Grid>
        </Container>
      </Wrapper>
    )
  }
}

export default Header

