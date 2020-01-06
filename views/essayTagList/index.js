import React from 'react'
import Axis from '../components/axis'
import { ajax, reFormatTime } from '../components/common'

class EssayTagList extends React.Component {
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
        res.data.map((value)=>{
          value.time = reFormatTime(value.time);
          return value;
        })
        console.log(res.data)
        _this.setState({
          essays: res.data,
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

export default EssayTagList