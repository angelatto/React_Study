import React from "react";

function getRandomColor(){
    // parseInt("ffffff", 16) == 255 
    return "#" + Math.floor(Math.random() * parseInt("ffffff", 16));
}
/* 
 새로운 객체가 만들어지는 것이 아니고, 
 상태가 바뀌면 render()만 재실행 
*/
class ComAClass extends React.Component {
    constructor(props){
        super(props);
        // 클래스형 컴포넌트의 상태는 반드시 객체 타입이어야 한다. 
        // state는 인스턴스 속성이다.
        this.state = {
            number: 0,
            color: "black"
        };
        this.addNumber = this.addNumber.bind(this);
    }

    // 1. 메소드 방식 : bind 꼭 해줘야 한다. , 메소드는 클래스에 종속적이다. 
    addNumber(event){
        // 리액트는 원본 불변 !! 원본 데이터는 건들지 말고,, 변화를 일으키기만 한다. -> 그래야 리랜더링 
        // 내가 원본을 바꾸는게 아니라 리액트가 가상돔과 원본 비교해서 일부 돔 교체함 
        this.setState({ // setState() 함수는 비동기적으로 실행 : 내부적으로 할일이 많으니까,, 랜더링, 비교 , 돔 교체 등 
            ...this.state, // 현재 state가 가진 내용을 그대로 넣어주겠다. deep copy 
            number: this.state.number + 1 // number만 수정하겠다.
            // 주의 - 순서 위치가 변경되면안됨!! ... 이게 앞에 있고, 변경되는거 뒤에 있어야함 
            }, () => {console.log("이후: ", this.number)});
        console.log("이전: ", this.number); // 이 값은 바뀐값이 아니라 이전값이 출력됨 ,비동기 
        /*
            여기서 직접 상태값을 바꾸면 안된다. 
            리액트는 이전 상태값과 이후 상태값을 비교해서 
            변경사항이 있으면 리렌더링을 한다. 
            즉, render() 함수가 재실행된다. 
            이전 상태를 내버려두고 새로운 상태값을 주어야 차이가 발생하는데
            이전 상태를 곧바로 바꿔버리면 변경사항(정확히 말하면 변화, mutation!!)이 없어져 버리는 것이다. 
            곧바로 바꿔버리면 render() 함수를 재실행하지 않음 
        */
    }

    // 2. 화살표 함수 방식 : 함수는 독립적 존재 
    changeColor = (event) => {
        console.log("changeColor() 실행");
        this.setState({
            ...this.state,
            color: getRandomColor()
        })
    };

    render(){
        // console.log("render() 실행");
        // console.log(this.state.color);
        return(
            <div className="card">
              <div className="card-header">
                   ComAClass
              </div>
              <div className="card-body">
                   <h3 style={{color:this.state.color}}>{this.state.number}</h3>
                   <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber}>숫자 증가</button>
                   <button className="btn btn-info btn-sm mr-2" onClick={this.changeColor}>색깔 변경</button>
              </div>
            </div>
        );
    }

}

export default ComAClass;