import React from 'react'
import Md from '../components/md'
import Comment from '../components/comment'
import { MonthDom, ajax, reFormatTime } from '../components/common'
import './index.scss'

class Essay extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      essayId: this.props.match.params.essayId,
      essay: {},
      loadding: false,
      titles: []
    }

    this.getTitle = this.getTitle.bind(this)
  }
  componentDidMount(){
    this.init();
  }
  init(){
    ajax({
      url:'/getEssayDetail',
      method: 'POST',
      data: {
        _id: this.state.essayId
      },
      success: (res)=>{
        this.setState({
          essay: res.data,
          loadding: true
        })
      }
    })
  }

  getTitle(titles) {
    console.log(titles)
    this.setState({
      titles: titles
    })
  }

  render(){
    var main;
    if(this.state.loadding){
      let essay = this.state.essay;
      let titles = this.state.titles;
      let timeArr = reFormatTime(essay.time).split('-');
      main = (
        <div>
          <div className='catalog'>
            <p>------------------------------------------</p>
            {
              titles.map((title, key) => {
                let sp = title.split(':')
                return (
                  <p key={key}>
                    <a data-head={sp[0]} href={`#${sp[1].toLowerCase()}`}>{ sp[1] }</a>
                  </p>
                )
              })
            }
          </div>
          <div className='content'>
            <h2>{essay.title}</h2>
            <p className='content-time'>
              <MonthDom month={timeArr[1]} />
              <span>{reFormatTime(essay.time)}</span>
            </p>
            <Md className='content-d' content={essay.content} getTitle={this.getTitle} />
          </div>
          <Comment essayId={ this.state.essayId }></Comment>
        </div>
      );
    }else{
      main = <h2>loadding...</h2>
    }

    return (
      <div className='essay-detail'>
        {main}
      </div>  
    )
  }
}

export default Essay