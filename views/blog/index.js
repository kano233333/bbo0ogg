import React from 'react'
import './index.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Nav from '../components/nav'
import EssayTimeList from '../essayTimeList'
import EssayTagList from '../essayTagList'
import Works from '../works'
import Essay from '../essay'

const routers = [
  {
    path:'/main/essayTimeList',
    component:EssayTimeList
  },
  {
    path:'/main/essayTagList',
    component:EssayTagList
  },
  {
    path:'/main/works',
    component:Works
  },
  {
    path:'/main/essay/:essayId',
    component:Essay
  }
]
class Blog extends React.Component {
  RouteWithSubRoutes(route,key){
    return (
      <Route
        key={key}
        path={route.path}
        render={props => (
          <route.component {...props} />
        )}
      />
    );
  }
  render(){
    return (
      <div id="container" className="list_wrap">
        <Nav></Nav>
        <div className='list_box'>
          {routers.map( (route,key) => 
            this.RouteWithSubRoutes(route,key)
          )}
        </div>
        <div className='icp'>
          <a href='http://www.beian.miit.gov.cn' target='_blank'>渝ICP备20000448号-1</a>
        </div>
      </div>
    )
  }
}

export default Blog