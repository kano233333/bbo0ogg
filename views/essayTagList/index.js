import React from 'react'
import Axis from '../components/axis'
import { ajax } from '../components/common'

class EssayTagList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      essays: [],
      loadding: false
    }
  }
  componentDidMount(){
    let _this = this;
    ajax({
      url: '/getEssayTag',
      method: 'POST',
      data: {
        page: 1
      },
      success: function(res){
        let _data = res.data;
        if(res.static == 1){
          _this.setState({
            essays: _data,
            loadding: true
          }, ()=>{
            /*
             * 搞死人的锚点 ->_->
             * 路由不同，直接跳(url + 锚点)不行 ===> 手动滚
             * 数据没获取到前，获取不到节点
             * setState回调之后，获取不到节点【一定得加个定时器?.?】
             * 节点的offset scroll都为0（虚拟dom的问题?.?）
             * getBoundingClientRect()可以获取
             * 
             * 1.锚点解析vue里面也是得在mounted里面异步location.href设置　emmm它是个问题
             * 2.react里面获取节点太不优雅了，先这样吧
             * 3.虚拟dom
             * 
             */
            setTimeout(()=>{
              if (location.hash) {
                let anchorElement = document.querySelector(location.hash);
                if (anchorElement) {
                  window.scrollTo({ 
                    top: anchorElement.getBoundingClientRect().y,
                    behavior: "smooth"
                  });
                }
              }
            }, 0)
          })
        }
      }
    })
  }
  render(){
    let main;
    if(this.state.loadding){
      main = <Axis essays={this.state.essays} />
    }else{
      main = <h2>loadding...</h2>
    }
    return (
      <div>
        <div>
          {main}
        </div>
      </div>
    )
  }
}

export default EssayTagList