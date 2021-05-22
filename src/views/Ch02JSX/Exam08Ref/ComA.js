import {useRef} from "react";

function ComA(props){
    const inputRef = useRef();
    const divRef = useRef();

    const handleBtn = (event) => {
        /*
            current는 반드시 넣어야 한다
            왜???? 
        */
        inputRef.current.style.backgroundColor = "orange";
        inputRef.current.focus(); 
        divRef.current.innerHTML = "<img src='/resources/img/photo1.jpg' width='200'>"; // 리액트는 상태를 변경하고 상태를 바인딩해야하지,, 이 코드는 리액트 답지 못하다. 
    };

    return(
        <div className="card">
        <div className="card-header">
            ComA
        </div>
        <div className="card-body">
            <div className="form-row align-items-center">
                <input type="text" ref={inputRef}/>
                <button className="ml-2 btn btn-primary btn-sm" onClick={handleBtn}>DOM 변화주기 </button>
            </div>
            <div ref={divRef}></div>
        </div>
    </div>
      
    );
  }
  
  export default ComA;