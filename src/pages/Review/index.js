import React from 'react'
import styled from 'styled-components'
import { object } from 'prop-types'
import Section from '../../components/atoms/Section'
import categories from '../../data/const'
import Container, { media } from '../../components/atoms/Container'
import * as palette from '../../variables'
import Img from '../../components/atoms/Img'
// const HeroHeader = styled.div`
// display: flex;
// flex: 0 0 100%;
// height: 300px;
// background:url('https://dl.dropboxusercontent.com/s/${props => props.bg}');
// `

const Wrap = styled.div`
  width: 100%;
`

const InnerWrap = styled.div`
  width:100%
`

const Hero = styled.div`
  width: 100%;
  height: 450px;
  background:  linear-gradient(to bottom, rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('https://dl.dropboxusercontent.com/s/${props => props.bg}');
  background-size: cover;
  color: ${props => props.bg}
`

const ContentWrap = styled.div`
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  background: #F0F5F8;
  text-align: center;
  padding: 0 10px;
`

const Cell = styled.li`
  flex: 0 0 100%;
  padding: 10px;
  ${media.giant`
    flex: 0 0 33.3333%;
  `}
  ${media.desktop`
    flex: 0 0 33.33333%
  `}
`

const CardWrap = styled.div`
  height: auto;
  box-shadow: ${palette.shadow};
`

// const Rank = styled.div`
//   display: flex;
//   flex: 0 0 100%;
//   border-radius: 6px 6px 0 0;
//   background: ${palette.purple};
//   color: #fff;
//   justify-content: center;
//   align-items: center;
//   padding: 5px;
//   font-weight: 700;
//   font-size: 20px;
// `

const Position = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  top: -70px;
  right: 20px;
  font-size: 30px;
  font-family: 'montserrat', 'sans-serif';
  border-width: 0 2px 0 0;
  padding: 5px;
  border-style: solid;
  border-color: #fff;
`
const PositionInner = styled.div`
  color: #fff;
`

const Title = styled.div`
  position: relative;
  font-family: 'montserrat', 'sans-serif';
  color: ${palette.mediumGrey};
  font-size: 18px;
  display: flex;
  flex: 0 0 100%;
  background: #fff;
  padding: 20px 20px 0 20px;
  text-align: left;
`

const Text = styled.div`
  font-family: 'lato', 'sans-serif';
  color: ${palette.lightGrey};
  font-size: 14px;
  display: flex;
  flex: 0 0 100%;
  background: #fff;
  padding: 20px;
  text-align: left;
`

const Info = styled.div`
  display: flex;
  flex: 0 0 100%;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  background: #fff;
`

const Bottom = styled.div`
  display: flex;
  flex: 0 0 100%;
  border-radius: 0 0 6px 6px;
  padding: 10px;
  background: #fff;
`

export default class Reviews extends React.Component {
  static propTypes = {
    match: object //eslint-disable-line
  }

  static defaultProps = {
    match: '',
  }

  state = {
    count: 1,
  }

  handleCount() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <Wrap>
        {categories.filter(cat => cat.slug === this.props.match.params.catId).map(category =>
          <InnerWrap key={category.id}>
            <Section>
              <Hero bg={category.hero} />
            </Section>
            <Section bg="#F0F5F8">
              {category.sub.filter(filter => filter.slug === this.props.match.params.slug).map(items =>
                <Container>
                  <div>{items.slug}</div>
                  <ContentWrap>
                    {items.items.map(item =>
                      <Cell key={item.id}>
                        <CardWrap>
                          <Img src={item.img} />
                          <Title>{item.name}
                            <Position><PositionInner>{item.position}</PositionInner></Position>
                          </Title>
                          <Text>{item.text}</Text>
                          <Info>4 out of 5</Info>
                          <Bottom />
                        </CardWrap>
                      </Cell>)}
                  </ContentWrap>
                </Container>)}
            </Section>
          </InnerWrap>)}
      </Wrap>
    )
  }
}

// const ReviewItem = props => (
//   <Wrapper>
//     <Rank>{props.key}</Rank>
//     <ImgWrap>
//       <Img src={`https://dl.dropboxusercontent.com/s/${props.img}`} />
//       <Overlay />
//     </ImgWrap>
//     <Info>
//       <Name>{props.name}</Name>
//       <Text>{props.text}</Text>
//     </Info>
//   </Wrapper>
// )

// {categories.filter(category => category.slug === this.props.match.params.slug

