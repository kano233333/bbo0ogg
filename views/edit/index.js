import React from 'react'
import './index.scss'
import Md from '../components/md'
import Dialog from '../components/dialog'
import InputBox from '../components/inputBox'
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
    this.getRef = this.getRef.bind(this);
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
  getRef(key, value){
    this.state[key] = value;
  }

  postEssay(){
    if(!this.state['titleRef'].value){
      return;
    }
    ajax({
      url:'/addEssay',
      method: 'POST',
      data: {
        title: this.state['titleRef'].value,
        content: this.state.content,
        time: formatTime(new Date),
        tag: this.state.tags
      },
      success: function(res){
        if(res.static == 1){
          window.location.href = '/main/essayTimeList'
        }
      }
    })
  }
  addTag(){
    var val = this.state['tagRef'].value;
    if(val == ''){
      return;
    }
    this.state.tags.push(val);
    this.setState({
      tags: this.state.tags
    })
    this.state['tagRef'].value = '';
  }
  delTag(index){
    this.state.tags.splice(index,1);
    this.setState({
      tags: this.state.tags
    })
  }
  getRef(key, ref){
    this.state[key] = ref;
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
      <Dialog isAlertShow={this.state.isAlertShow} shiftAlert={this.shiftAlert} postEssay={this.postEssay}>
        <InputBox title="标题" inputKey="titleRef" getRef={this.getRef}></InputBox>
        <InputBox title="标签" getRef={this.getRef} inputKey="tagRef">
          <i className="add" onClick={this.addTag}></i>
        </InputBox>
        {tags}
      </Dialog>
    </div>
    )
  }
}

export default Edit