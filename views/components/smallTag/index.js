import React from 'react'
import './index.scss'

class Axis extends React.Component {
  constructor(props){
    super(props)
    this.props = props;
  }
  render(){
    return (
      <div className={`small-tag ${this.props.className}`} style={this.props.style}>
        <span>{this.props.tag}</span>
        <div className="jt"></div>
      </div>
    )
  }
}

export default Axis