import React from 'react';

class ClassType extends React.Component{

  // 처음 객체 만들 때 딱 한번 실행됨 (마운팅)
  constructor(props){
    super(props);
    this.state = {
      startNum: 0, 
      number: 0,
    }
    console.log('constructor() 실행 ');

  }

  // static 키워드가 있는 메서드 안에서 this 사용 할 수 없다. this는 인스턴스 멤버를 가리킬 때 사용하기 때문이다. 
  // newProps는 생성자의 props와 같다.
  // 용도 : props가 갱신될 떄 상태값도 같이 갱신되도록 새로운 상태 리턴  
  static getDerivedStateFromProps(newProps, prevState){
    console.group('getDerivedStateFromProps() 실행');
    console.log('newProps: ', newProps);
    console.log('prevState: ', prevState);
    console.groupEnd(); 
    if(prevState.startNum !== newProps.startNum){
      return {  //  부모가 props를 변경할 때 마다 실행된다. 이 함수가 리턴하는 값이 새로운 상태가 된다. 
        startNum: newProps.startNum,  
        number: newProps.startNum,  
      };
    }
    return null; // prop이 안바뀌면 null 리턴 -> 기존 상태 유지 의미  
  }

  // 용도 : 리랜더링 할지말지 
  shouldComponentUpdate(nextProps, nextState) {
    console.group('shouldComponentUpdate() 실행');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
    console.groupEnd(); 
    return (nextState.number % 2 === 0 && true) || false;
  }

  render(){
    console.log('render() 실행');
    return(
      <div className="card">
        <div className="card-header">
        ClassType
        </div>
        <div className="card-body">
           number: {this.state.number}
        </div>
      </div>
      
    )
  }

  componentDidMount(){
    // 최초실행될땐 실행, 업데이트시 실행 안함 
    console.log('componentDidMount() 실행');
  }

  componentDidUpdate(){
    // 업데이트 완료 후 실행 
    console.log('componentDidUpdate() 실행');
  }

  componentWillUnmount(){
    // 컴포넌트가 제거될 때, 다른 페이지로 이동 
    console.log('componentWillUnmount() 실행');
  }
}

export default ClassType;