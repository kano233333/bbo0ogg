import React from 'react'
import './index.scss'
import Md from '../components/md'
import { ajax, formatTime } from '../components/common'

const styleTop = {top: '-20px', zIndex:3};
const styleBottom =  {top: '20px'};
class Edit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isAlertShow: false,
      styleRight: styleTop,
      styleLeft: styleBottom,
      content:''
    }
    this.shiftAlert = this.shiftAlert.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
    this.getInputVal = this.getInputVal.bind(this);
    this.postEssay = this.postEssay.bind(this);
  }
  shiftAlert(){
    this.setState({
      isAlertShow: !this.state.isAlertShow
    })
  }
  clickLeft(){
    this.setState({
      styleLeft: styleTop,
      styleRight: styleBottom
    })
  }
  clickRight(){
    this.setState({
      styleLeft: styleBottom,
      styleRight: styleTop
    })
  }
  getInputVal(e){
    e.persist()
    this.setState({
      content: e.target.value
    })
    this.refs.edit.resetContent(e.target.value)
  }

  postEssay(){
    var _this = this;
    ajax({
      url:'/addEssay',
      method: 'POST',
      data: {
        title: this.refs.title.value,
        content: _this.state.content,
        time: formatTime(new Date),
        tag:[]
      },
      success: function(res){
        console.log(res)
      }
    })
  }

  render(){
    return (
    <div id="container">
      <div className="edit-header">
        <p></p>
        <button onClick={this.shiftAlert.bind(this)}>添加</button>
      </div>
      <div className="edit-wrap">
        <div className="edit-box edit-box-left" style={this.state.styleLeft} onClick={this.clickLeft}>
          <Md ref='edit' className='box' content={this.state.content} />
        </div>
        <div className="edit-box edit-box-right" style={this.state.styleRight} onClick={this.clickRight}>
          <textarea onChange={this.getInputVal}></textarea>
        </div>
      </div>
      <div className={this.state.isAlertShow ? 'mask' : 'unshow'}>
        <div className="alert">
          <div className="cancel ball-img" onClick={this.shiftAlert}></div>
          <div>
            <span>标题</span>
            <input ref="title" />
          </div>
          <div>
            <span>标签</span>
            <input />
          </div>
          <div className="sure ball-img" onClick={this.postEssay}></div>
        </div>
      </div>
    </div>
    )
  }
}

export default Edit