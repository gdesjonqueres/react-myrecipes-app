import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Connection from './components/Connection'

const MyRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Connection} />
      <Route path='/mybox/:pseudo' component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(<MyRouter />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
