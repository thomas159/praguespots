/* eslint-disable */
import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Lato|Montserrat');
* {
    box-sizing: border-box;
}

html,
body {
    position: relative;
    width: 100%;
    height: 100%;
}

html {
    font-size: 62.5%;
}

ul,li {
  list-style: none;
}
body {
  color:#282828;
  font-family: 'Lato', sans-serif;
  font-size:14px;
  line-height:1.4;
}

.selected {
  color: #ff00ff;
}
`
