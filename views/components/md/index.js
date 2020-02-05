import React from 'react'
import { default as markdown } from 'markdown-it'
import * as hljs from 'highlightjs'
import './index.scss'
import anchor from 'markdown-it-anchor'
import toc from 'markdown-it-table-of-contents'

const slugify = (s) => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-'));
const defaults = {
  includeLevel: [ 1, 2 ],
  containerClass: 'table-of-contents',
  slugify,
  markerPattern: /^\[\[toc\]\]/im,
  listType: 'ul',
  format: undefined,
  forceFullToc: false,
  containerHeaderHtml: undefined,
  containerFooterHtml: undefined,
  transformLink: undefined,
};

let md = new markdown({
  breaks: true,
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
// .use(toc, {
//   format: function(header){
//     return header
//   },
//   transformLink:function(link){
//     return '';
//   },
//   // slugify,
//   containerHeaderHtml: `<div class="header">Contents</div>`,
//   containerFooterHtml: `<div class="footer">Footer</div>`, 
// })
.use((md) => {
  console.log(md.block.ruler)
})

class Md extends React.Component {
  constructor(props){
    super(props)
    // console.log(props)
    var content = `${props.content}`
    this.state = {
      content: md.render(content)
    }
  }
  resetContent(content){
    this.setState({
      content:md.render(content)
    })
  }
  scrollTo(r){
    // console.log(rate)
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