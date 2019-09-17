import React from 'react'
import SmallTag from '../smallTag'
import {monthData} from '../../../public/src/javascripts/const.js'

const fixedD = {
  position: 'fixed',
  top: '20px',
  left:'33px'
}
class AxisList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      styleTag:{}
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount(){
    if(this.props.isFirstY=='block'){
      window.addEventListener('scroll', this.handleScroll)
    }
  }
  handleScroll(e){
    var domTop = this.refs.list.getBoundingClientRect().top
    if(domTop<35){
      this.setState({
        styleTag:fixedD
      })
    }else{
      this.setState({
        styleTag:{}
      })
    }
  }
  render(){
    var smallTagDom, timeArr = this.props.time.split('-');
    var m = monthData[timeArr[1]-1];
    var monthStyle = {
      backgroundColor: m.color,
      color: m.font_color
    };
    if(this.props.isFirstY=='block'){
      smallTagDom = <SmallTag className='axis-tag' style={this.state.styleTag} tag={timeArr[0]} />
    }
    return (
      <div className='list' ref='list'>
        {smallTagDom}
        <div className='list-head'>
          <div className='title over_slh'>
            <h2>
              {this.props.title}
              <span className='underline' style={{backgroundColor:m.color}}></span>
            </h2>
          </div>
          <p>
            <span className='month' style={monthStyle}>{m.zh}</span>
            <span className='time'>{this.props.time}</span>
          </p>
        </div>
        <div className='excerpt'>
          <p>{this.props.excerpt}</p>
        </div>
        <div className='tag'>
        {
          this.props.tags.map((value,key)=>{
            return <span key={key}>{value}</span>
          })
        }
        </div>
      </div>
    )
  }
}

export default AxisList