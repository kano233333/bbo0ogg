import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

class Dialog extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className={this.props.isAlertShow ? 'mask' : 'unshow'}>
        <div className="alert">
          <div className="cancel ball-img" onClick={this.props.shiftAlert}></div>
          { this.props.children }
          <div className="sure ball-img" onClick={this.props.postEssay}></div>
        </div>
      </div>
    )
  }
}
/* 传入的函数:
 * 是否显示：isAlertShow
 * 关闭(callback)：shiftAlert
 * 提交(callback)：postEssay
*/

export default Dialog