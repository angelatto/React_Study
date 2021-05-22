import { useState } from "react";

function getRandomColor(){
    // parseInt("ffffff", 16) == 255 
    return "#" + Math.floor(Math.random() * parseInt("ffffff", 16)).toString();
}
/*
어떤 상태가 바뀌면 컴포넌트인 ComAFun 함수 전체가 재실행된다. 
반면에 클래스형은 render() 메소드만 재실행됨.
따라서 두 모듈을 동작 방식이 아에 다르다. 
*/
/*
prop이 바뀌거나 상태가 바껴야만이 function이 재실행된다. 
*/
function ComAFun(props){
    // hook - 중간에 어떤 기능을 삽입시켜준다. 
    const [state, setState] = useState({
        // 함수형에서 새로운 상태를 만드는 코드이다. 
        number: 0,
        color: "black"
    });

    const addNumber = (event) => {
        setState({
            ...state,
            number: state.number + 1
        });
    };

    const changeColor = (event) => {
        setState({
            ...state,
            color: getRandomColor()
        });
    };

    console.log("ComAFun() 실행 ");

    return(
        <div className="card">
            <div className="card-header">
                ComAFun
            </div>
            <div className="card-body">
                <h3 style={{color:state.color}}>{state.number}</h3>
                <button className="btn btn-info btn-sm mr-2" onClick={addNumber}>숫자 증가</button>
                <button className="btn btn-info btn-sm mr-2" onClick={changeColor}>색깔 변경</button>
            </div>
        </div>
    );
}

export default ComAFun;