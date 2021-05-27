import React, { Component } from 'react';
import ComBFun from './ComBFun';
import ColorContext from './ColorContext';

class ComAClass extends Component {
  // 1. 정적 속성 
  static contextType = ColorContext;// 클래스의 예약어 속성. 이름 그대로써야 this.context로 참조 가능해진다.

  // 2. 생성자
  constructor(props){
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.context.setColor('red'); // index.js에서 이 컴포넌트에 Provider가 제공되어야만이 상태를 변경할 수 있다.!!!  
  };

  // 3. 인스턴스 메소드 
  render() {
    return (
      <div className="card">
        <div className="card-header">
            ComAClass
        </div>
        <div className="card-body">
          <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔 변경</button>
          <div style={{backgroundColor: this.context.color}}>
            내용 
          </div>
          <ComBFun/>
        </div>
      </div>
    );
  }
}

export default ComAClass;