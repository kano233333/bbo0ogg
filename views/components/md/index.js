import React from 'react'
import { default as markdown } from 'markdown-it'
import * as hljs from 'highlightjs'
let md = new markdown({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    return '';
  }
})

class Md extends React.Component {
  constructor(props){
    super(props)
    // console.log(props)
    this.state = {
      content: md.render(props.content)
    }
  }
  resetContent(content){
    this.setState({
      content:md.render(content)
    })
  }
  render(){
    return (
      <div className={this.props.className} dangerouslySetInnerHTML={{__html: this.state.content}}></div>
    )
  }
}

export default Md