import React from 'react'
import './index.scss'
import AxisList from './axisList.js'

class Axis extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      essays: {}
    };
  }
  componentDidMount(){
    this.init();
  }
  init(){
    var essays = this.props.essays;
    this.setState({
      essays: essays
    })
  }
  toEssayDetail(_id){
    window.location.href = `/main/essay/${_id}`
  }
  render(){
    var essays = this.state.essays;
    var essayIndex = Object.keys(essays);
    return (
      <div className='axis'>
        <div className='axis-wrap'>
          {
            essayIndex.map((value,key)=>{
              if(!Array.isArray(essays[value])){
                return;
              }
              return essays[value].map((item,key2)=>{
                var props = item;
                if(key2 == 0){
                  props.isFirstY = 'block';
                }else{
                  props.isFirstY = 'none';
                }
                props.nav = value;
                return <AxisList onClick={this.toEssayDetail.bind(this, item._id)} {...props} key={key2} />
              })
            })
          }
        </div>
      </div>
    )
  }
}

export default Axis