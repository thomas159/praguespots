import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import { Link } from 'react-router-dom'
// import CatCardItem from '../CatCardItem'
import Image from '../../../Image'

const Wrapper = styled.div`
  position: relative;
  display:flex;
  flex-direction: column;
  flex:0 0 100%;
  height:auto;
  background:#F2F4F6;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
}
`

const StyledLink = styled(Link)`
  display: flex;
  transition: all 0.2s ease-out;
  flex: 0 0 100%;
  background: #fff;
  justify-content: center;
  padding: 10px;
  font-weight: 600;
  color: #666;
  text-decoration: none;
  &:hover {
    background: #fafafa;
    color: palevioletred;
    text-decoration:none;
  }
`

const CatCard = ({ cat, img, sub, slug }) => (
  <Wrapper>
    <Image cat={cat} img={img} slug={slug} />
    {sub.map(item =>
      <StyledLink to={`/reviews/${slug}/${item.slug}`}>
        { item.cat }
      </StyledLink>)}
  </Wrapper>
)


export default CatCard

CatCard.propTypes = {
  cat: string,
  img: string,
  sub: string,
  slug: string,
}

CatCard.defaultProps = {
  cat: '',
  img: '',
  sub: '',
  slug: '',
}
