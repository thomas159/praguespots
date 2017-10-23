import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import { Link } from 'react-router-dom'
// import Img from '../atoms/Img'
import Overlay from '../atoms/Overlay'

const ImageWrap = styled.div`
position:relative;
width:100%;
height:auto;
`

const Text = styled.div`
position: absolute;
bottom: 0;
left: 0;
flex-direction: row;
width: 100%;
height: auto;
padding: 10px 0 ;
color: #fff;
background: rgba(0,0,0,.4);
z-index: 1;
text-align: center;
`

const StyledLink = styled(Link)`
color: palevioletred;
font-weight: bold;
text-decoration: none;
text-transform: capitalize;
font-size: 18px;
font-family: 'Montserrat', sans-serif;
&:hover {
  color: #fff;
}
`

const StyledImg = styled.img`
position: relative;
display: block;
width: 100%;
height: auto;
`

const Image = (props) => {
  const {
    cat, catSlug, img, prop, slug, subText,
  } = props

  let link = ''
  if (prop) {
    link = <StyledLink to={`/reviews/${catSlug}/${slug}`}>{cat}</StyledLink>
  } else {
    link = <StyledLink to={`/reviews/${slug}`}>{cat}</StyledLink>
  }

  return (
    <ImageWrap>
      <Text>
        {link}
        { subText && <div>{subText}</div>}
      </Text>
      <StyledImg src={`https://dl.dropboxusercontent.com/s/${img}`} />
      <Overlay />
    </ImageWrap>
  )
}

export default Image

Image.propTypes = {
  cat: string,
  catSlug: string,
  img: string,
  prop: string,
  slug: string,
  subText: string,
}

Image.defaultProps = {
  cat: '',
  catSlug: string,
  img: '',
  prop: '',
  slug: '',
  subText: '',
}

