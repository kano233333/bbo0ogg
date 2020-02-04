import React from 'react'
import './index.scss'
class InputBox extends React.Component {
  componentDidMount(){
    if(this.props.getRef){
      this.props.getRef(this.props.inputKey, this.refs.inputRef); 
    }
  }
  render(){
    console.log(this.props)
    return (
      <div className="input-box">
        <p>{ this.props.title }</p>
        <input type="text" ref="inputRef" />
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