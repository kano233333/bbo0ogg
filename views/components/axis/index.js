import React from 'react'
import './index.scss'
import SmallTag from '../../components/smallTag'

const a = {
  2019:{
    12:[
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
      }
    ]
  }
}
class Axis extends React.Component {
  AxisList(props){
    return (
      <div className='list'>
        <SmallTag className ='axis-tag' tag={'2019'} />
        <p>{props.title}</p>
      </div>
    )
  }
  render(){
    return (
      <div className='axis'>
        <div className='axis-wrap'>
          {
            Object.keys(a).map((value,index)=>{
              return Object.keys(a[value]).map((item,key)=>{
                return a[value][item].map((a,b)=>{
                  return <this.AxisList {...a} key={b} />
                })
              })
            })
          }
        </div>
      </div>
    )
  }
}

export default Axis