import React from 'react'
import './index.scss'
class InputBox extends React.Component {
  componentDidMount(){
    if(this.props.getRef){
      this.props.getRef(this.props.inputKey, this.refs.inputRef); 
    } 
  }
  render(){
    return (
      <div className="input-box">
        <input type="text" ref="inputRef" />
        <p>{ this.props.title }</p>
        { this.props.children }
        <br className="clear" />
      </div>
    )
  }
}
/* 
 * 父节点传入　参数的键、函数
 * componentDidMount
 * 调父节点传入函数: getRef(参数的键, ref)
 */
export default InputBox