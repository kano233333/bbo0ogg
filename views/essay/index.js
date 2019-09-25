import React from 'react'
import Md from '../components/md'
import { MonthDom } from '../components/common'

const essayD = {
  time:'2017-4-1',
  title:'三季度开始就卡机的空间撒娇的',
  tags:[],
  excerpt:'激发科技贷款及付款的就是空间发的是健康路附近都付了款手机打开了附近的家里附近的身份的看法就是点击放大师傅开始锻炼减肥的时间'
}
class Essay extends React.Component {

  render(){
    var timeArr = essayD.time.split('-');
    return (
      <div className='essay-detail'>
        <div className='catalog'></div>
        <div className='content'>
          <h2>{essayD.title}</h2>
          <p className='content-time'>
            <MonthDom month={timeArr[1]} />
            <span>{essayD.time}</span>
          </p>
          <Md className='content-d' content={essayD.content} />
        </div>
      </div>  
    )
  }
}

export default Essay