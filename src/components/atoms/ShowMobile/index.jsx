import styled from 'styled-components'
import { media } from '../../atoms/Container'

const ShowMobile = styled.span`
  ${media.giant`
    display:none;
  `}
  ${media.desktop`
    display:none;
  `}
  ${media.tablet`
    display:visible;
  `}
  ${media.phone`
    display:visible;
  `}
  ${media.smphone`
    display:visible;
  `}
`

export default ShowMobile
