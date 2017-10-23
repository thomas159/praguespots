import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import Image from '../../../../components/Image'

const Wrapper = styled.div`
  position: relative;
  display:flex;
  flex-direction: column;
  flex:0 0 100%;
  height:auto;
  background:#fff;
`

const CatCard = ({ cat, catSlug, img, slug }) => (
  <Wrapper>
    <Image prop cat={cat} catSlug={catSlug} img={img} slug={slug} />
  </Wrapper>
)

export default CatCard

CatCard.propTypes = {
  cat: string,
  catSlug: string,
  img: string,
  slug: string,
}

CatCard.defaultProps = {
  cat: '',
  catSlug: '',
  img: '',
  slug: '',
}
