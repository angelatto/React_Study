import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSetColorAction } from 'redux/color-reducer';

class ComAClass extends Component {
  constructor(props){
    // 여기 props로 color와 setColor가 연결됨 - connect() 함수
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  // 속성 아니고 메소드 형태 
  handleChange(e){
    this.props.setColor('red');
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
        ComAClass
        </div>
        <div className="card-body">
          <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔 변경</button>
          <div style={{backgroundColor: this.props.color}}>
            내용 
          </div>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => (
  {color: state.colorReducer.color}
);

const mapDispatchToProps = (dispatch) => {
  return {setColor: (color) => dispatch(createSetColorAction(color))}
}

/*
  1. react-redux에서 제공하는 connect() 함수는 
    store가 가진 내용(redux)을 component에서 참조할 수 있도록 연결시켜줌. 
  connect() 함수 실행시:  mapStateToProps()매개변수로 store 객체가 가진 state가 넘어온다. 

  ***** store객체에는 state 내장속성과 dispatch라고하는 내장 함수가 들어있음. 

  mapStateToProps : "state"와 props 연결 
  mapDispatchToProps : "dispatch"와 props 연결 
  
  2. 위의 두 메소드들이 "리턴"하는 것 ComAClass 컴포넌트에서 사용하는 props로 들어간다. 
     즉, 우리는 props를 통해서 color, setColor(리턴에서 정의해줌)를 사용할 수 있다. 
 */
export default connect(mapStateToProps, mapDispatchToProps)(ComAClass);