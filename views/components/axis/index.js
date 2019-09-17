import React from 'react'
import './index.scss'
import AxisList from './axisList.js'

const a = [
    {
      time:'2019-12-3',
      title:'三季度开始就卡机的空间撒娇的',
      tags:[],
      excerpt:'激发科技贷款及付款的就是空间发的是健康路附近都付了款手机打开了附近的家里附近的身份的看法就是点击放大师傅开始锻炼减肥的时间'
    },
    {
      time:'2019-12-1',
      title:'三季度开始就卡机的空间撒娇的',
      tags:[],
      excerpt:'激发科技贷款及付款的就是空间发的是健康路附近都付了款手机打开了附近的家里附近的身份的看法就是点击放大师傅开始锻炼减肥的时间'
    },
    {
      time:'2018-12-1',
      title:'三季度开始就卡机的空间撒娇的',
      tags:[],
      excerpt:'激发科技贷款及付款的就是空间发的是健康路附近都付了款手机打开了附近的家里附近的身份的看法就是点击放大师傅开始锻炼减肥的时间'
    },
    {
      time:'2017-12-1',
      title:'三季度开始就卡机的空间撒娇的',
      tags:[],
      excerpt:'激发科技贷款及付款的就是空间发的是健康路附近都付了款手机打开了附近的家里附近的身份的看法就是点击放大师傅开始锻炼减肥的时间'
    },
    {
      time:'2017-12-1',
      title:'三季度开始就卡机的空间撒娇的',
      tags:[],
      excerpt:'激发科技贷款及付款的就是空间发的是健康路附近都付了款手机打开了附近的家里附近的身份的看法就是点击放大师傅开始锻炼减肥的时间'
    },
    {
      time:'2017-12-1',
      title:'三季度开始就卡机的空间撒娇的',
      tags:[],
      excerpt:'激发科技贷款及付款的就是空间发的是健康路附近都付了款手机打开了附近的家里附近的身份的看法就是点击放大师傅开始锻炼减肥的时间'
    },
    {
      time:'2017-12-1',
      title:'三季度开始就卡机的空间撒娇的',
      tags:[],
      excerpt:'激发科技贷款及付款的就是空间发的是健康路附近都付了款手机打开了附近的家里附近的身份的看法就是点击放大师傅开始锻炼减肥的时间'
    },{
      time:'2016-12-1',
      title:'三季度开始就卡机的空间撒娇的',
      tags:[],
      excerpt:'激发科技贷款及付款的就是空间发的是健康路附近都付了款手机打开了附近的家里附近的身份的看法就是点击放大师傅开始锻炼减肥的时间'
    }
  ]

class Axis extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var t;
    return (
      <div className='axis'>
        <div className='axis-wrap'>
          {
            a.map((value,key)=>{
              var props = value;
              var year = value.time.split('-')[0];
              if(t==year){
                props.isFirstY = 'none';
              }else{
                props.isFirstY = 'block';
              }
              props.year = year;
              t = year;
              return <AxisList {...props} key={key} />
            })
          }
        </div>
      </div>
    )
  }
}

export default Axis