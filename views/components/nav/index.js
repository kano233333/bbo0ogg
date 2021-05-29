import React from 'react'
import './index.scss'
import { nav, moreNav } from '../../../public/src/javascripts/const'
import Confirm from '../dialog/confirm.js'
import SmallTag from '../smallTag'
import essay from '../../../public/src/images/essay.svg'
import tag from '../../../public/src/images/tag.svg'
import works from '../../../public/src/images/works.svg'
import github from '../../../public/src/images/github.svg'
import more from '../../../public/src/images/more.svg'
import add from '../../../public/src/images/add.svg'
import revise from '../../../public/src/images/revise.svg'
import cut from '../../../public/src/images/delete.svg'

const navImgs = [essay, add, tag, works, revise, cut];

class Nav extends React.Component {
  constructor(props){
    super(props);
    //------------------------------------
    let _nav = nav;
    let paths = window.location.href.split('/');
    if(paths[paths.length-2] == 'essay'){
      let i = moreNav['essay'];
      _nav = [...nav, ...i];
    }
    //------------------------------------
    this.state = {
      moreState: 'block',
      nav: _nav,
      isAlertShow: false,
    };
    this.shiftMoreNav = this.shiftMoreNav.bind(this);
    this.navJumpPage = this.navJumpPage.bind(this);
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
  navJumpPage(item) {
    if (item.link) {
      const paths = window.location.href.split('/');
      const link = item.link + (item.param ? `?id=${paths[paths.length - 1]}` : '');
      window.location.href = link;
    } else {
      Confirm.info(item.action.text);
    }
  }
  render(){
    var navList = this.state.nav.map((item,index) =>
      <div
        onClick={(e) => { this.navJumpPage(item) }} 
        className="nav_btn" 
        key={index} 
        style={{display:this.state.moreState}}
      >
        <img src={navImgs[index]} />
        <SmallTag className='nav-tag' tag={item.name} />
      </div>
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