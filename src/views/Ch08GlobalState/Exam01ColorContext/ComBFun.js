import React, { useContext } from 'react';
import ColorContext from './ColorContext';

const ComBFun = () => {
  const colorContext = useContext(ColorContext); // HOOK 이용 
  // const authContext = useContext(AuthContext);
  // 클래스형 컴포넌트는 컨텍스트 하나만 가능, 함수형은 컨텍스트 여러개 가능 
  const handleChange = (e) => {
    colorContext.setColor('blue');
  };

  return (
    <div className="card">
        <div className="card-header">
            ComBFun
        </div>
        <div className="card-body">
          <button className="btn btn-info btn-sm mb-3" onClick={handleChange}>색깔 변경</button>
          <div style={{backgroundColor: colorContext.color}}>
              내용 
          </div>
      </div>
    </div>
  );
};

export default ComBFun;