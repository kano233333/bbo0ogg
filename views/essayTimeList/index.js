import React from 'react'
import './index.scss'
import Axis from '../components/axis'
import { ajax } from '../components/common'

class EssayTimeList extends React.Component {
  componentDidMount(){
    ajax({
      url: '/getEssay',
      method: 'GET',
      data: {
        page: 1
      },
      success: function(res){
        console.log(res)
      }
    })
  }
  render(){
    return (
      <div>
        <div>
          <Axis />
        </div>
      </div>
    )
  }
}

export default EssayTimeList