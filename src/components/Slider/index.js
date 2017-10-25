import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  width: 100%;
`

const ImgWrap = styled.div`
  width: 100%;
  height: 300px;
  background: url(${props => props.bg});
`

const NextArrow = styled.button`
  position: absolute;
  height: 40px;
  width: 40px;
  right: 20px;
  top: 50%;
  color: #fff;
  cursor: pointer;
  border: 2px solid #fff;
  outline: 0;
  border-radius: 50%;
  margin-top: -20px;
  font-size: 20px;
  line-height: 0.5;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`

const PrevArrow = styled.button`
  position: absolute;
  height: 40px;
  width: 40px;
  left: 20px;
  top: 50%;
  cursor: pointer;
  color: #fff;
  border: 2px solid #fff;
  outline: 0;
  border-radius: 50%;
  margin-top: -20px;
  font-size: 20px;
  line-height: 0.5;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`

const Text = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  color: #fff;
  padding: 10px;
  align-items: center;
  background: rgba(0,0,0, .2);

`


const slides = [
  { id: 1, img: 'https://dl.dropboxusercontent.com/s/f3s8lyj8gavzd4e/prague.jpg?dl=0', text: ' explore the latest sights in Prague' },
  { id: 2, img: 'img2' },
  { id: 3, img: 'img3' },
  { id: 4, img: 'img4' },
]

export default class Slider extends React.Component {
  state = {
    slide: 1,
  }

  handleNextSlide = () => {
    this.setState({
      slide: this.state.slide + 1 < slides.length + 1 || 0 ? this.state.slide + 1 : 1,
    })
  }

  handlePrevSlide = () => {
    this.setState({
      slide: this.state.slide - 1 > 0 ? this.state.slide - 1 : 4,
    })
  }

  isShown = num =>
    this.state.slide === num

  render() {
    return (
      <Wrap>
        {slides.map(item =>
          <div>
            {this.isShown(item.id) &&
              <ImgWrap bg={item.img}>
                <Text>{item.text}</Text>
                {item.id}
                {/* <img src={item.img} alt="ndsd" /> */}
              </ImgWrap>
            }
          </div>,
        )}
        <NextArrow onClick={this.handleNextSlide}>&#62;</NextArrow>
        <PrevArrow onClick={this.handlePrevSlide} >&#60;</PrevArrow>
      </Wrap>
    )
  }
}
