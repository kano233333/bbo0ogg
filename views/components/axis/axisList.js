import React from 'react'
import SmallTag from '../smallTag'
import { MonthDom, ColorUnderline, reFormatTime } from '../common/index'

const fixedD = {
  top: '20px',
  right: '85.6%',
  position: 'fixed'
}
class AxisList extends React.Component {
  constructor(props){
    super(props)
    this.state ={ 
      props,
      styleTag: {}
    };
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
  jumpTag(id, e){
    e.stopPropagation()
    window.location.href = `/main/essayTagList#${id}`
  }
  render(){
    var smallTagDom, 
        timeArr = reFormatTime(this.props.time).split('-'),
        tagSm = this.props.nav;
    if(this.props.isFirstY=='block'){
      smallTagDom = <SmallTag className='axis-tag' style={this.state.styleTag} tag={tagSm} />
    }
    return (
      <div className='list' ref='list' onClick={this.props.onClick}>
        {smallTagDom}
        <div className='list-head'>
          <div className='title over_slh'>
            <h2>
              {this.props.title}
              <ColorUnderline month={timeArr[1]} />
            </h2>
          </div>
          <p>
            <MonthDom month={timeArr[1]} />
            <span className='time'>{reFormatTime(this.props.time)}</span>
          </p>
        </div>
        <div className='excerpt'>
          <p>{this.props.content.substr(0,30)}</p>
        </div>
        <div className='tag'>
        {
          this.props.tag.map((value,key)=>{
            return <span onClick={this.jumpTag.bind(this, value)} key={key}>{value}</span>
          })
        }
        </div>
      </div>
    )
    return <div></div>
  }
}

export default AxisList