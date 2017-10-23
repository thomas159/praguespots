import React from 'react'
import styled from 'styled-components'
import categories from '../../../data/const'
import CatCard from '../components/CatCard'
import { Grid } from '../../atoms/'

const Cell = styled.li`
  flex: 0 0 33.333333%;
  padding: 10px;
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

