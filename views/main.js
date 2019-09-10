import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./index"
import EssayTimeList from './essayTimeList'
import EssayTagList from './essayTagList'
import Works from './works'
import Essay from './essay'
import Edit from './edit'

class Main extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route path="/essayTimeList" component={EssayTimeList} />
          <Route path="/essayTagList" component={EssayTagList} />
          <Route path="/works" component={Works} />
          <Route path="/essay" component={Essay} />
          <Route path="/edit" component={Edit} />
        </div>
      </Router>
    )
  }
}

export default Main