import React from 'react'
import { default as markdown } from 'markdown-it'
import * as hljs from 'highlightjs'
import './index.scss'
import anchor from 'markdown-it-anchor'
import emoji from 'markdown-it-emoji'
import { Watcher } from '../common'

let wt = new Watcher();
wt.addSub('arr', []);
wt.addEvent('arr', function(val){
  console.log(val)
})

class Md extends React.Component {
  constructor(props){
    super(props)
    let _this = this
    let getTitle = props.getTitle || function(){}

    /*
     * markdown 加了一个use提取出标题
     * Watcher 发布订阅模式，对提取出的标题进行监听
     */
    let wt = new Watcher()
    wt.addSub('titleArr', [])
    wt.addEvent('titleArr', function(val){
      getTitle(val)
    })
    this.wt = wt

    this.md = new markdown({
      breaks: true,
      html: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) {}
        }
        return '';
      }
    })
    .use(anchor)
    .use(emoji)
    .use((plugin) => {
      // 提取标题，再次吹爆markdown-it
      plugin.core.ruler.push('getHeads', function(md){
        let tokens = md.tokens;
        let arr = [];
        for(let i = 0; i < tokens.length ; i++) {
          if(tokens[i].type == 'heading_open') {
            arr.push(tokens[i++].tag + ':' + tokens[i++].content)
          }
        }
        _this.wt.setSub('titleArr', arr);
      })
    })

    let content = `${props.content}`
    this.state = {
      content: this.md.render(content),
    }
  }
  resetContent(content){
    this.setState({
      content: this.md.render(content)
    })
  }
  scrollTo(r){
    let t = this.refs.box;
    t.scrollTop = r * (t.scrollHeight - t.offsetHeight);
  }
  render(){
    return (
      <div ref="box" className={`${this.props.className} md`} dangerouslySetInnerHTML={{__html: this.state.content}}></div>
    )
  }
}

export default Md