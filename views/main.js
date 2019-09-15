import React from "react"
import { BrowserRouter as Router, Route, Link, Redirect, IndexRoute } from "react-router-dom"
import Index from "./index"
import Blog from "./blog"
import Edit from './edit'
import Works from './works'

class Main extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route path="/main" component={Blog} />>
          <Route path="/edit" component={Edit} />
        </div>
      </Router>
    )
  }
}

export default Main