import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
  height:auto;
  margin-bottom: 2px;
`

const Name = styled.div`
  display: flex;
  flex: 0 0 100%;
  background: #fff;
  justify-content: center;
  padding: 10px;
  color: #666;
`

export default class CatCardItem extends React.Component {
  static propTypes = {
    name: string,
  }

  static defaultProps = {
    name: '',
  }

  render() {
    return (
      <Wrapper>
        <Name>{this.props.name}</Name>
      </Wrapper>
    )
  }
}
