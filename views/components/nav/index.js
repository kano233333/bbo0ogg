import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { nav } from '../../../public/src/javascripts/const'
import SmallTag from '../smallTag'
import essay from '../../../public/src/images/essay.svg'
import tag from '../../../public/src/images/tag.svg'
import works from '../../../public/src/images/works.svg'
import github from '../../../public/src/images/github.svg'
import more from '../../../public/src/images/more.svg'
import add from '../../../public/src/images/add.svg'

const navImgs = [essay, add, tag, works, github];

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      moreState: 'none'
    };
    this.shiftMoreNav = this.shiftMoreNav.bind(this);
  }
  shiftMoreNav(){
    var moreState = this.state.moreState;
    if(moreState=='none'){
      moreState = 'block';
    }else{
      moreState = 'none';
    }
    this.setState({
      moreState: moreState
    })
  }
  render(){
    var navList = nav.map((item,index) =>
      <a href={`${item.link}`} className="nav_btn" key={index} style={{display:this.state.moreState}}>
        <img src={navImgs[index]} />
        <SmallTag className='nav-tag' tag={item.name} />
      </a>
    )
    return (
      <div id="nav">
        <div className="nav_btn" onClick={this.shiftMoreNav}>
          <img src={more} />
        </div>
        {navList}
      </div>
    )
  }
}

export default Nav