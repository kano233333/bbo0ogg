import React from 'react'
import { formatTime, ajax, reFormatTime } from '../../components/common'
import './index.scss'

class Comment extends React.Component {
  constructor(props){
    super(props)
    this.pushComment = this.pushComment.bind(this)
    this.state = {
      comments: props.comment.reverse()
    }
  }

  pushComment() {
    if(this.refs.inputComment.value == '') return;

    let obj = {
      _id: this.props.essayId,
      comment: this.refs.inputComment.value,
      name: this.refs.inputName.value || '壮士不留名',
      time: formatTime(new Date)
    };

    ajax({
      url: '/pushComment',
      data: obj,
      method: 'POST',
      success: (res) => {
        if (res.state === 1) {
          this.state.comments.unshift(obj);
          this.setState({
            comments: this.state.comments
          });
          this.refs.inputComment.value = '';
          this.refs.inputName.value = '';
        }
      }
    })
  }
  render() {
    return (
      <div className='comment-wrap'>
        <div className='sticky'></div>
        <div className='push-wrap'>
          <textarea ref='inputComment'></textarea>
          <div className='push'>
            <input placeholder='壮士留名' ref='inputName' />
            <button onClick={this.pushComment}></button>
          </div>
        </div>
        <div className='comment'>
          {
            /*
             * 【 留坑 】
             * react 数组从前插入节点
             * diff是将数组内容进行替换，在最后插入一个真实的dom
             * 新添加的评论就不会触发动画
             * 现在没有加动动画，后面再去研究
             */ 
            this.state.comments.map((item, index) => {
              return (
                <div key={index}>
                  <div className='head'>
                    <span className='head-name'>{ item.name }</span>
                    <span>{ reFormatTime(item.time) }</span>
                  </div>
                  <div className='value'>{ item.comment }</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Comment