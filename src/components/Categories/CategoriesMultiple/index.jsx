import React from 'react'
import styled from 'styled-components'
import categories from '../../../data/const'
import CatCard from '../components/CatCard'
import { media } from '../../atoms/Container'

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const Cell = styled.li`
  flex: 0 0 100%;
  padding: 10px;
  ${media.tablet`
    flex: 0 0 50%;
  `}
  ${media.desktop`
  flex: 0 0 33.333333%
  `}
  ${media.giant`
  flex: 0 0 33.333333%
  `}
`

export default class CategoriesMultiple extends React.Component {
  render() {
    return (
      <Grid>
        {categories.map(category =>
          <Cell>
            <CatCard
              id={category.id}
              cat={category.cat}
              sub={category.sub}
              slug={category.slug}
              img={category.img}
            />
          </Cell>)}
      </Grid>
    )
  }
}

