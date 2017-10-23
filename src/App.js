import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'sanitize.css'
import styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Reviews from './pages/Reviews'
import Review from './pages/Review'
import ScrollToTop from './components/atoms/ScrollToTop'
import './styles'


const Wrapper = styled.div`
  display:flex;
  min-height:100vh;
  flex:1;
  background:#eee;
`

class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Header />
            <Wrapper>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/reviews" component={Reviews} />
                <Route exact path="/reviews/:catId" component={Reviews} />
                <Route exact path="/reviews/:catId/:slug" component={Review} />
                <Route exact path="/" component={Home} />
                {/* <ScrollToTop path="/reviews/:catId" component={Review} /> */}
                {/* <ScrollToTop path="/another-page" component={Reviews} /> */}
              </Switch>
            </Wrapper>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}
export default App

