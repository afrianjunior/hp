import React from 'react'
import { Layout, Header, Container } from 'ui'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Detail from './pages/Detail'
import Address from './pages/Address'
import Thanks from './pages/Thanks'
import NotFound from './pages/utils/NotFound'
export default function App () {
  return (
    <Router>
      <Layout>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/address" component={Address} />
            <Route exact path="/thanks" component={Thanks} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Container>
      </Layout>
    </Router>
  )
}
