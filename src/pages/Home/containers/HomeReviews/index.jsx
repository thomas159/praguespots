import React from 'react'
import styled from 'styled-components'
import items from './const'
import Image from '../../../../components/Image'
// import Overlay from '../../../../components/atoms/Overlay'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`

const Cell = styled.div`
  background: #fff;
  padding: 1px;
  position: relative;
    flex: 1;
    flex-direction: column;
    display: flex;
    text-align: left;

  &:nth-child(1) {
    flex:0 0 50%;
    padding-left: 0;
  }

  &:nth-child(2) {
    flex:0 0 50%;
    padding-right: 0;
  }

  &:nth-child(3) {
    flex:0 0 33.33333%;
    padding-left: 1px;
  }

  &:nth-child(4) {
    flex:0 0 33.33333%;
  }

  &:nth-child(5) {
    flex:0 0 33.33333%;
    padding-right: 1px;
  }
`

// const Wrap = styled.div`
//   background: #fff;
// `

// const ImageWrap = styled.div`
//   position:relative;
//   width:100%;
//   height:auto;
// `

// const Text = styled.div`
//   padding: 60px 20px;
// `

export default class HomeReviews extends React.Component {
  render() {
    const reviews = items.map(item => (
      <Cell key={item.id}>
        <Image subText={item.text} cat={item.name} catSlug={item.slug} img={item.img} />
      </Cell>
    ))
    return (
      <Grid>
        { reviews }
      </Grid>
    )
  }
}
