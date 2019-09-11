import React from 'react'
import './index.scss'
import Nav from '../components/nav'

class EssayTimeList extends React.Component {
  render(){
    return (
      <div id="container" className="list_wrap">
        <Nav></Nav>
        <div className='list_box'></div>
      </div>
    )
  }
}

export default EssayTimeList