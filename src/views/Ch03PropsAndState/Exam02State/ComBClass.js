import React from "react";

class ComBClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number : 0
        };
    }

    // 화살표 함수 
    addNumber1 = (event) => {
        /* 
           setState는 비동기로 실행 
           결과는 +1 한번만 
         */
        this.setState({ 
            number: this.state.number + 1
        });
        this.setState({ 
            number: this.state.number + 1
        });
    };
    
    addNumber2 = (event) => { 
        /*
            결과는 +2 
            함수를 매개변수로 주면 두번 모두 실행  
        */
        this.setState((prevState) => {  // 콜백 함수, 매개변수로 최신 값이 제공되는게 포인트 
            return {
                number: prevState.number + 1
                // 주의 prevState 대신에 this.state를 넣으면 안된다. 
                // this.state를 직접 접근하면 '콜백'의 의미가 없어진다. 
            }
        });
        this.setState((prevState) => {  // 콜백 함수, 매개변수로 최신 값이 제공되는게 포인트
            return {
                number: prevState.number + 1
            }
        });
    };

    render(){
        return (
            <div className="card">
              <div className="card-header">
                ComBClass
              </div>
              <div className="card-body">
                <h3>{this.state.number}</h3>
                <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber1}>숫자 증가</button>
                <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber2}>숫자 증가</button>


              </div>
            </div>
        );
    }
}

export default ComBClass;