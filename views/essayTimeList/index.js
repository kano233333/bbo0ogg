import React from 'react'
import './index.scss'
import Axis from '../components/axis'
import { ajax, reFormatTime } from '../components/common'

class EssayTimeList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      essays: [],
      loadding: false
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
        let essays = {};
        res.data.map((value)=>{
          value.time = reFormatTime(value.time);
          let tag = value.time.split('-')[0];
          Array.isArray(essays[tag]) ? {} : essays[tag] = [];
          essays[tag].push(value);
        })
        _this.setState({
          essays: essays,
          loadding: true
        })
      }
    })
  }
  render(){
    let main;
    if(this.state.loadding){
      main = <Axis essays={this.state.essays} />
    }else{
      main = <h2>loadding...</h2>
    }
    return (
      <div>
        <div>
          {main}
        </div>
      </div>
    )
  }
}

export default EssayTimeList