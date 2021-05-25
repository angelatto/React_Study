import { useEffect, useState } from "react";

/*
  실행하고 -> 상태 변경 -> 또 함수 실행 -> 또 상태 변경 -> 또 함수실행.. 무한 굴레 
*/
function FunType(props){

  const [state, setState] = useState({
    startNum: 0,
    number: 0
  });

  useEffect(() => {
    console.log('마운트 또는 업데이트 후에 실행 ');
    return (() => {
      console.log('업데이트전 또는 언마운트시에 실행 ');
    });
  });
  // 여기서 상태 변경하면 너무 많은 리랜더링 일어남 - 왜?? 
  // useEffect()는 랜더링 이후 
  
  useEffect(() => {
    console.log('마운트 실행');
    return(() => {
        console.log('언마운트시 실행');
    })
  }, []);

  useEffect(() => {
    console.log('마운트/props 변경 실행');
    setState({  // 여기서 부모가 props를 바꾸면 전달받아서 상태값으로 설정 
      startNum: props.startNum,
      number: props.startNum
    });
    return(() => {
        console.log('언마운트시 실행');
    })
  }, [props]);

  useEffect(() => {
    console.log('마운트/state 변경 실행');
    return(() => {
        console.log('언마운트시 실행');
    })
  }, [state]);

  const handleIncrement = (e) => {
      setState({
        ...state,
        number: state.number + 1
      })
  };

  return(
    <div className="card">
    <div className="card-header">
      FunType
    </div>
    <div className="card-body">
       <div>number: {state.number}</div>
       <button className="btn btn-info btn-sm mt-2" onClick={handleIncrement}>증가</button>
    </div>
    </div>

  )
}

export default FunType;