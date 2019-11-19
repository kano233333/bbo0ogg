import React from 'react'
import Md from '../components/md'
import { MonthDom, ajax, reFormatTime } from '../components/common'

const essayD = {
  time:'2017-4-1',
  title:'三季度开始就卡机的空间撒娇的',
  tags:[],
  excerpt:'激发科技贷款及付款的就是空间发的是健康路附近都付了款手机打开了附近的家里附近的身份的看法就是点击放大师傅开始锻炼减肥的时间'
}
class Essay extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      essayId: this.props.match.params.essayId,
      essay: essayD,
      loadding: false
    }
  }
  componentDidMount(){
    this.init();
  }
  init(){
    ajax({
      url:'/getEssayDetail',
      method: 'POST',
      data: {
        _id: this.state.essayId
      },
      success: (res)=>{
        this.setState({
          essay: res.data,
          loadding: true
        })
      }
    })
  }
  render(){
    var main;
    if(this.state.loadding){
      let essay = this.state.essay;
      let timeArr = reFormatTime(essay.time).split('-');
      console.log(timeArr)
      main = (
        <div>
          <div className='catalog'></div>
          <div className='content'>
            <h2>{essay.title}</h2>
            <p className='content-time'>
              <MonthDom month={timeArr[1]} />
              <span>{reFormatTime(essay.time)}</span>
            </p>
            <Md className='content-d' content={essay.content} />
          </div>
        </div>
      );
    }else{
      main = <h2>loadding...</h2>
    }

    return (
      <div className='essay-detail'>
        {main}
      </div>  
    )
  }
}

export default Essay