import React from 'react'
import SmallTag from '../smallTag'

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
    window.addEventListener('scroll', this.handleScroll)
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
    var smallTagDom;
    if(this.props.isFirstY=='block'){
      smallTagDom = <SmallTag className='axis-tag' style={this.state.styleTag} tag={this.props.time.split('-')[0]} />
    }
    return (
      <div className='list' ref='list'>
        {smallTagDom}
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default AxisList