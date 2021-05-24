import React from "react";
import { useState } from "react";

function ComBFun(props){
    const [number, setNumber] = useState(0);

    // 화살표 함수 
    const addNumber1 = () => { // 비동기 
        setNumber(number + 1);
        setNumber(number + 1);
    };
     
    const addNumber2 = () => { // 동기 
        setNumber(prevState => prevState + 1);
        setNumber(prevState => prevState + 1);
    };

    return (
        <div className="card">
          <div className="card-header">
            ComBFun
          </div>
          <div className="card-body">
            <h3>{number}</h3>
            <button className="btn btn-info btn-sm mr-2" onClick={addNumber1}>숫자 증가</button>
            <button className="btn btn-info btn-sm mr-2" onClick={addNumber2}>숫자 증가</button>
          </div>
        </div>
    );   
}

export default ComBFun;