import React from 'react';
import ReactDOM from 'react-dom';
import InputBox from '../inputBox';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.getPassword = this.getPassword.bind(this);
  }
  getPassword(value) {
    console.log(value);
  }
  render() {
    return (
      <div className='mask fixed-center'>
        <div className="confirm">
          <div className="confirm-main">
            <p>{ this.props.confirm }</p>
            <InputBox placeholder="输密码巴啦啦" input={this.getPassword} title='🔑' type="password"></InputBox>
            <div>
              <button onClick={ev.hidden}>取消</button>
              <button>确认</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const div = document.createElement('div');
document.body.appendChild(div);
var ev = {
  info(confirm) {
    ReactDOM.render(React.createElement(
      Confirm,
      { confirm }
    ), div);
  },
  hidden() {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  }
};
export default ev;