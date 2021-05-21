// 함수형 컴포넌트 선언 
function ComA(props){
    return (
        /*
          html 태그 처럼 작성이 되어있는데
          이 부분은 나중에 webpack이 다 자바스크립트로 바꿔버린다. 
          이 부분은 JSX(JavaScript XML) 문법으로 작성되어야 한다. 

          특징 - JSX 문법에서 표현식은 중괄호 {} 이다. 
          이 중괄호 안에는 자바스크립트가 들어간다. 

          주의 - 최상위 엘리먼트 태그는 하나여야 한다. 
          Link도 컴포넌트이다. 
        */
        <div className="card">
            <div className="card-header">
                ComA
            </div>
            <div className="card-body">
                content...
            </div>
        </div>
    );
}

export default ComA;