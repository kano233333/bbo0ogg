import React from 'react'
import './index.scss'
import AxisList from './axisList.js'

class Axis extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      essays: []
    };
  }
  componentDidMount(){
    this.init();
  }
  init(){
    var essays = [];
    this.props.essays.map((item)=>{
      essays.push({
        _id: item._id,
        time: item.time,
        title: item.title,
        tags: item.tag,
        excerpt: item.content.substr(0,30)
      })
    })
    this.setState({
      essays: essays
    })
  }
  toEssayDetail(_id){
    window.location.href = `/main/essay/${_id}`
  }
  render(){
    var t;
    return (
      <div className='axis'>
        <div className='axis-wrap'>
          {
            this.state.essays.map((value,key)=>{
              var props = value;
              var year = value.time.split('-')[0];
              if(t==year){
                props.isFirstY = 'none';
              }else{
                props.isFirstY = 'block';
              }
              props.year = year;
              t = year;
              return <AxisList onClick={this.toEssayDetail.bind(this, value._id)} {...props} key={key} />
            })
          }
        </div>
      </div>
    )
  }
}

export default Axis