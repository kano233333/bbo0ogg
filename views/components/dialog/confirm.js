import React from 'react';
import ReactDOM from 'react-dom';
import InputBox from '../inputBox';
import { ajax } from '../../components/common'
import { staticPassword } from '../../../public/src/javascripts/setting';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.getRef = this.getRef.bind(this);
    this.onConfim = this.onConfim.bind(this);
  }

  getRef(key, value){
    this.state[key] = value;
  }

  onConfim() {
    const paths = window.location.href.split('/');
    // TODO: 密码加密/登陆态/storage
    // TODO: 校验失败处理 样式
    console.log(staticPassword)
    if (this.state['passwordRef'].value !== staticPassword) {
      return;
    }

    if (this.props.callback) {
      this.props.callback(true);
      ev.hidden.call(ev);
      return;
    }
  
    ajax({
      url: '/deleteEssay',
      data: {_id: paths[paths.length - 1]},
      method: 'POST',
      success: res => window.location.href = '/main/essayTimeList'
    });
  }

  render() {
    // TODO: 样式
    return (
      <div className='mask fixed-center'>
        <div className="confirm">
          <div className="confirm-main">
            <p>{ this.props.confirm }</p>
            <InputBox
              placeholder="输密码巴啦啦"
              inputKey="passwordRef"
              getRef={this.getRef}
              title='🔑'
              type="password"></InputBox>
            <div class="confirm-footer">
              <button onClick={ev.hidden.bind(ev)}>取消</button>
              <button onClick={this.onConfim}>确认</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


var ev = {
  div: {},
  info(confirm, callback) {
    this.div = document.createElement('div');
    document.body.appendChild(this.div);
    ReactDOM.render(React.createElement(
      Confirm,
      { confirm, callback }
    ), this.div);
  },

  hidden() {
    ReactDOM.unmountComponentAtNode(this.div);
    document.body.removeChild(this.div);
  }
};
export default ev;