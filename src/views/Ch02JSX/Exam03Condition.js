function Exam03Condition(props){
    const var1 = "리액트";
    const var2 = false;
    const var3 = "";
    const var4 = undefined;
    let var5;
    let var6 = 0; // 부정의미, && 앞에서 쓰이면 그대로 출력됨 

    return(
        <div className="card">
            <div className="card-header">
            Exam03Condition
            </div>
            <div className="card-body">
                <h6 className = "text-info" // 이건 주석 가능 
                >삼항 연산식을 이용한 선택 렌더링</h6>
                <div>
                    <div>{var1 === "리액트"? <p>내용1</p> : <p>내용xxx</p>}</div>
                    <div>{var1 !== "리액트"? <p>내용2</p> : null}</div>
                </div>
                    {/*
                      && 앞에가 트루이면 뒤에 내용이 출력 
                      && 앞에가 부정이면 ->  그 부정의 의미가 출력 또는 아무것도 출력되지 않음 

                      출력-----------
                      내용3 내용4 0
                    */}     
                <h6 className = "mt-4 text-info">&&을 이용한 선택 렌더링</h6>
                <div>  
                    <div>{var1 === "리액트" && <p>내용3</p>}</div> 
                    <div>{var1 && <p>내용4</p>}</div>
                    <div>{var2 && <p>내용5</p>}</div>
                    <div>{var3 && <p>내용6</p>}</div>
                    <div>{var4 && <p>내용7</p>}</div>
                    <div>{var5 && <p>내용8</p>}</div>
                    <div>{var6 && <p>내용9-1</p>}</div>
                    <div>{var6 !== 0 && <p>내용9-2</p>}</div>
                </div>
                {/*
                    앞에가 트루이면 앞에출력,, 앞에가 펄스이면 뒤에꺼 출력 
                      출력-----------
                      리액트 내용 11 12 13 14 15
                */}     
                <h6 className = "mt-4 text-info">||을 이용한 선택 렌더링</h6>
                <div>  
                    <div>{var1 || <p>내용10</p>}</div>
                    <div>{var2 || <p>내용11</p>}</div>
                    <div>{var3 || <p>내용12</p>}</div>
                    <div>{var4 || <p>내용13</p>}</div>
                    <div>{var5 || <p>내용14</p>}</div>
                    <div>{var6 || <p>내용15</p>}</div>
                </div>
            </div>
        </div>
    );
}

export default Exam03Condition;