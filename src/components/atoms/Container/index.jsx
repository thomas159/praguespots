/* eslint-disable no-param-reassign */
import styled, { css } from 'styled-components'

const minSizes = {
  giant: 1261,
  desktop: 959,
  tablet: 768,
  phone: 413,
  smphone: 0,
}

const maxSizes = {
  giant: 10000,
  desktop: 1260,
  tablet: 959,
  phone: 767,
  smphone: 412,
}

// iterate through the sizes and create a media template
export const media = Object.keys(minSizes, maxSizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emMinSize = minSizes[label] / 16
  const emMaxSize = maxSizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emMinSize}em) and (max-width: ${emMaxSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

const Container = styled.div`
  position: relative;
  color: #333;
  background: inherit;

  ${media.phone`
    position: relative;
    max-width: 1260px;
    margin: 0 auto;
    padding: 0 ;
    ${props => props.padding && 'padding: 0 10px'}
  `}
  ${media.tablet`
    position: relative;
    max-width: 1260px;
    margin: 0 auto;
    padding: 0;
    ${props => props.padding && 'padding: 0 10px'}
  `}
  ${media.desktop`
    position: relative;
    max-width: 1260px;
    margin: 0 auto;
    padding: 0;
    ${props => props.padding40 && 'padding: 40px'}
  `}
  ${media.giant`
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 ;
    ${props => props.padding40 && 'padding: 40px'}
  `}
`

export default Container
