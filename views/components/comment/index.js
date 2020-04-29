import React from 'react'
import './index.scss'

class Comment extends React.Component {
  constructor(props){
    super(props)
    this.pushComment = this.pushComment.bind(this)
  }
  pushComment() {
    console.log('bb')
  }
  render() {
    return (
      <div className='comment-wrap'>
        <div className='push-wrap'>
          <textarea></textarea>
          <div className='push'>
            <input />
            <button onClick={this.pushComment}></button>
          </div>
        </div>
        <div className='comment'>
          <div>
            <div className='head'>
              <span>dms,amd</span>
              <span>2019-7-2</span>
            </div>
            <div className='value'>dfdsf</div>
          </div>
          <div>
            <div className='head'>
              <span>打客服</span>
              <span>2019-7-2</span>
            </div>
            <div className='value'>大家疯狂的健身房</div>
          </div>
          <div>
            <div className='head'>
              <span>打客服</span>
              <span>2019-7-2</span>
            </div>
            <div className='value'>大家疯狂的健身房</div>
          </div>
          <div>
            <div className='head'>
              <span>打客服</span>
              <span>2019-7-2</span>
            </div>
            <div className='value'>大家疯狂的健身房</div>
          </div>
          <div>
            <div className='head'>
              <span>打客服</span>
              <span>2019-7-2</span>
            </div>
            <div className='value'>大家疯狂的健身房</div>
          </div>
          <div>
            <div className='head'>
              <span>打客服</span>
              <span>2019-7-2</span>
            </div>
            <div className='value'>大家疯狂的健身房</div>
          </div>
          <div>
            <div className='head'>
              <span>打客服</span>
              <span>2019-7-2</span>
            </div>
            <div className='value'>大家疯狂的健身房</div>
          </div>
          <div>
            <div className='head'>
              <span>打客服</span>
              <span>2019-7-2</span>
            </div>
            <div className='value'>大家疯狂的健身房</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment