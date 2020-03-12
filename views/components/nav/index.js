import React from 'react'
import './index.scss'
import { nav, moreNav } from '../../../public/src/javascripts/const'
import SmallTag from '../smallTag'
import essay from '../../../public/src/images/essay.svg'
import tag from '../../../public/src/images/tag.svg'
import works from '../../../public/src/images/works.svg'
import github from '../../../public/src/images/github.svg'
import more from '../../../public/src/images/more.svg'
import add from '../../../public/src/images/add.svg'
import revise from '../../../public/src/images/revise.svg'

const navImgs = [essay, add, tag, works, revise];

class Nav extends React.Component {
  constructor(props){
    super(props);
    //------------------------------------
    let _nav = nav;
    let paths = window.location.href.split('/');
    if(paths[paths.length-2] == 'essay'){
      let i = moreNav['essay'];
      i.link = i.link + `?id=${paths[paths.length-1]}`
      _nav.push(i);
    }
    //------------------------------------
    this.state = {
      moreState: 'block',
      nav: _nav
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
    var navList = this.state.nav.map((item,index) =>
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