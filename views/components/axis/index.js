import React from 'react'
import './index.scss'
import SmallTag from '../../components/smallTag'

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

const fixedD = {
  position: 'fixed',
  top: '20px',
  left:'35px'
}
class Axis extends React.Component {
  constructor(props){
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.AxisList = this.AxisList.bind(this)
    this.state = {
      styleTag:{}
    }
  }
  AxisList(props){
    return (
      <div className='list'>
        {/* <SmallTag className='axis-tag' style={{display:props.isFirstY}} tag={props.time.split('-')[0]} /> */}
        <SmallTag className='axis-tag' style={this.state.styleTag} tag={props.time.split('-')[0]} />
        <p>{props.title}</p>
      </div>
    )
  }
  handleScroll(event){
    var sTop = document.documentElement.scrollTop;
    if(sTop>500){
      this.setState({
        styleTag:fixedD
      })
    }else{
      this.setState({
        styleTag:{}
      })
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
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
              return <this.AxisList {...props} key={key} />
            })
          }
        </div>
      </div>
    )
  }
}

export default Axis