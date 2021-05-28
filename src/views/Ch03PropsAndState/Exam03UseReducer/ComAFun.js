import { useReducer } from "react";
import reducer from './number-reducer';

function ComAFun(){
  const [state, dispatch] = useReducer(reducer, {
    number : 0 // 초기 상태 
  });
  console.log('최신 state: ', state);

  const incrementCounter = () => {
    dispatch({type: 'INCREMENT'}); // 상태 변경을 요청하는 함수 -> reducer 호출 
  };

  const decrementCounter = () => {
    dispatch({type: 'DECREMENT'});
    console.log('이후 state2: ', state);
  };

  return(
    <div className="card">
      <div className="card-header">
        Component: ComAFun
      </div>
      <div className="card-body">
        <p>현재 카운트 값: {state.number}</p>
        <button className="btn btn-primary btn-sm mr-2" onClick={incrementCounter}>증가</button>
        <button className="btn btn-primary btn-sm" onClick={decrementCounter}>감소</button>
      </div>
    </div>
    
  )
}

export default ComAFun;