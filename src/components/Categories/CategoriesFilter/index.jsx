import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import categories from '../../../data/const'
// import ReviewCard from '../../organisms/ReviewCard'
import SubCatCard from '../components/SubCatCard'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const Cell = styled.div`
  flex: 0 0 100%;
  padding: 10px;
`

export default class CategoriesFilter extends React.Component {
  static propTypes = {
    filter: string,
  }

  static defaultProps = {
    filter: '',
  }

  render() {
    return (
      <div>
        {categories.filter(category => category.slug === this.props.filter)
          .map(category =>
            <div>
              <div>{category.cat}</div>
              <Grid>
                {category.sub.length > 0 && category.sub.map(subcat =>
                  <Cell>
                    <SubCatCard id={subcat.id} cat={subcat.cat} img={subcat.img} sub={subcat.sub} catSlug={category.slug} slug={subcat.slug} />
                  </Cell>)}
              </Grid>
            </div>)}
      </div>
    )
  }
}
