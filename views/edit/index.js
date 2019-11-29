import React from 'react'
import './index.scss'
import Md from '../components/md'
import { ajax, formatTime } from '../components/common'

const styleTop = {top: '-20px', zIndex:3};
const styleBottom =  {top: '20px'};
class Edit extends React.Component {
  constructor(props){
    super(props)
    this.textDom = React.createRef();
    this.state = {
      isAlertShow: false,
      styleRight: styleTop,
      styleLeft: styleBottom,
      content: '',
      tags: []
    }
    this.shiftAlert = this.shiftAlert.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
    this.getInputVal = this.getInputVal.bind(this);
    this.postEssay = this.postEssay.bind(this);
    this.shiftClear = this.shiftClear.bind(this);
    this.addTag = this.addTag.bind(this);
    this.delTag = this.delTag.bind(this);
  }
  shiftAlert(){
    this.setState({
      isAlertShow: !this.state.isAlertShow
    })
  }
  shiftClear(){
    this.textDom.current.value = '';
    this.setState({
      content: ''
    })
    this.refs.edit.resetContent('');
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
    if(this.refs.title.value == ''){
      return;
    }
    ajax({
      url:'/addEssay',
      method: 'POST',
      data: {
        title: this.refs.title.value,
        content: _this.state.content,
        time: formatTime(new Date),
        tag: _this.state.tags
      },
      success: function(res){
        console.log(res)
      }
    })
  }
  addTag(){
    var val = this.refs.tag.value;
    if(val == ''){
      return;
    }
    this.state.tags.push(val);
    this.setState({
      tags: this.state.tags
    })
    this.refs.tag.value = '';
  }
  delTag(index){
    this.state.tags.splice(index,1);
    this.setState({
      tags: this.state.tags
    })
  }

  render(){
    let tagMap = this.state.tags.map((val,index)=> 
      <p key={index}>
        <span>{val}</span>
        <span onClick={this.delTag.bind(this, index)}>×</span>
      </p>
    );
    let tags = (
      <div className="tags">
        {tagMap}
      </div>
    );
    return (
    <div id="container">
      <div className="edit-header">
        <i onClick={this.shiftAlert.bind(this)}></i>
        <i onClick={this.shiftClear.bind(this)}></i>
        <i></i>
        <i></i>
      </div>
      <div className="edit-wrap">
        <div className="edit-box edit-box-left" style={this.state.styleLeft} onClick={this.clickLeft}>
          <Md ref='edit' className='box' content={this.state.content} />
        </div>
        <div className="edit-box edit-box-right" style={this.state.styleRight} onClick={this.clickRight}>
          <textarea ref={this.textDom} onChange={this.getInputVal}></textarea>
        </div>
      </div>
      <div className={this.state.isAlertShow ? 'mask' : 'unshow'}>
        <div className="alert">
          <div className="cancel ball-img" onClick={this.shiftAlert}></div>
          <div className="input-wrap">
            <span>标题</span>
            <div>
              <input ref="title" />
            </div>
          </div>
          <div className="input-wrap">
            <span>标签</span>
            <div>
              <input ref='tag' />
              <i className="add" onClick={this.addTag}></i>
            </div>
          </div>
          {tags}
          <div className="sure ball-img" onClick={this.postEssay}></div>
        </div>
      </div>
    </div>
    )
  }
}

export default Edit