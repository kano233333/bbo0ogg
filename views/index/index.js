import React from 'react'
import './index.scss'
import { homeNav } from '../../public/src/javascripts/const'
import Github from '../../public/src/images/github2.svg'
import blog from '../../public/src/images/blog.svg'
import qq from '../../public/src/images/qq.svg'
import email from '../../public/src/images/email.svg'

const navImgs = [Github, blog, qq, email];
class Index extends React.Component {
  erCode(code){
    if(code){
      return (
        <div className="er-code">
          <img src={code} />
        </div>
      )
    }
  }

  linkTo(link){
    if(link!=='' && link!==undefined){
      window.location.href = link;
    }
  }

  render(){
    return (<div id="index">
      <div className="main">
        <div className="head-img">
          <img />
        </div>
        <div className="other">
          { homeNav.map((item, index)=>{
            return (
              <div key={index} onClick={this.linkTo.bind(this, item.link)}>
                <img src={navImgs[index]} />
                { this.erCode(item.code) }
              </div>
            )
          }) }
        </div>
      </div>
      <div className='icp'>
        <a href='http://www.beian.miit.gov.cn' target='_blank'>渝ICP备20000448号-1</a>
      </div>
    </div>)
  }
}
export default Index