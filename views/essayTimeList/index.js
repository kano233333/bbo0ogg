import React from 'react'
import './index.scss'
import Axis from '../components/axis'
import { ajax, reFormatTime } from '../components/common'

class EssayTimeList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      essays: [],
      loadding: false,
      page: 1
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.getList = this.getList.bind(this)
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
    this.getList();
  }
  getList(){
    let _this = this;
    ajax({
      url: '/getEssay',
      method: 'POST',
      data: {
        page: this.state.page
      },
      success: function(res){
        let essays = _this.state.essays;
        res.result.map((value)=>{
          // 当tag是数字/纯数字字符串 ===> essays变为伪数组 ===> 年份会从小到达排列
          let tag = ' ' + reFormatTime(value.time).split('-')[0];
          Array.isArray(essays[tag] ? {} : essays[tag] = []);
          essays[tag].push(value);
        });
        _this.setState({
          essays: essays,
          loadding: true
        });
      }
    })
  }
  handleScroll(e){
    let h1 = document.documentElement.scrollTop + document.documentElement.clientHeight;
    let h2 = document.documentElement.scrollHeight;
    if(h2 - h1 < 30){
      this.state.page++;
      this.getList();
    }
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