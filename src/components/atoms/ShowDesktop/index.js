import styled from 'styled-components'
import { media } from '../../atoms/Container'

const ShowDesktop = styled.div`
  ${media.giant`
    display:visible;
  `}
  ${media.desktop`
    display:visible;
  `}
  ${media.tablet`
    display:none;
  `}
  ${media.phone`
    display:none;
  `}
  ${media.smphone`
    display:none;
  `}
`

export default ShowDesktop
