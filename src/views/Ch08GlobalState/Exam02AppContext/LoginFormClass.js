import React, { Component } from 'react';
import AppContext from 'views/AppContext';

class LoginFormClass extends Component {
  // 1. 정적 속성 
  static contextType = AppContext;

  // 2. 생성자
  constructor(props){
    super(props);
    this.state = {
      uid: ''
    };
  }

  // 화살표함수로 속성으로 선언. (메소드로 할거면 this 바인딩 해줘야함.)
  handleChange = (e) => {
    this.setState({
      uid: e.target.value
    });
  };

  login = (e) => {
    this.context.setUid(this.state.uid);
  }

  logout = (e) => {
    this.context.setUid('');
  }

  // 3. 인스턴스 메소드 
  render() {
    return (
      <div className="card">
        <div className="card-header">
          LoginFormClass
        </div>
        <div className="card-body">
            <div className="form-group row">
                <label htmlFor="uid" className="col-sm-2 col-form-label">User ID</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="uid" name="uid" value={this.state.uid} onChange={this.handleChange}/>
                </div>
            </div>
            {this.context.uid === "" ? (
              <button className="btn btn-success btn-sm" onClick={this.login}>로그인</button>
            ) : ( 
              <button className="btn btn-success btn-sm" onClick={this.logout}>로그아웃</button>
            )}
          </div>
      </div>
    );
  }
}

export default LoginFormClass;