import React from 'react'
import './index.scss'
import Axis from '../components/axis'
import { ajax, reFormatTime } from '../components/common'

class EssayTimeList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      essays: []
    }
  }
  componentDidMount(){
    let _this = this;
    ajax({
      url: '/getEssay',
      method: 'POST',
      data: {
        page: 1
      },
      success: function(res){
        res.data.map((value)=>{
          value.time = reFormatTime(value.time);
          return value;
        })
        _this.setState({
          essays: res.data
        })
      }
    })
  }
  render(){
    return (
      <div>
        <div>
          <Axis essays={this.state.essays} />
        </div>
      </div>
    )
  }
}

export default EssayTimeList