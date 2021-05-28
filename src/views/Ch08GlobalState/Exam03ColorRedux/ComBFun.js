import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { createSetColorAction } from 'redux/color-reducer';

const ComBFun = () => {
  /*
    state: store가 가지고 있는 내장 속성인데,, 루트리덕스가 가진 특정 리덕스를 뽑아옴 
    dispatch : store가 가지고옴 
    const store = useStore(); 스토어에 대한 참조를 아예 가져와도댐 
  */
  const color = useSelector((state) => (state.colorReducer.color));
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(createSetColorAction('green')); // 색깔 변경해달라고 통보하기 
    // 이 크리에이트 함수는 color-reducer에서 선언. 액션 객체 쉽게 만드려고 이용하는거임 
  };

  return (
    <div className="card">
      <div className="card-header">
          ComBFun
      </div>
      <div className="card-body">
          <button className="btn btn-info btn-sm mb-3" onClick={handleChange}>색깔 변경</button>
          <div style={{backgroundColor: color}}>
              내용 
          </div>
      </div>
    </div>
    
  );
};

export default ComBFun;