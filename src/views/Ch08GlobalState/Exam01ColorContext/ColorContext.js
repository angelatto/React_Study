import React, { useState } from 'react';

// 기계적으로 작성하기 
const ColorContext = React.createContext({ // 너는 컴포넌트 아님 
  color: 'blue',
  setColor: () => {}
});

// 1. 데이터 변경 통보를 위한 Provider 컴포넌트 선언 
export function ColorContextProvider(props){ // 너는 컴포넌트임 
  const [color, setColor] = useState('yellow');
  const value = {
    color: color,
    setColor: setColor
  };

  return( // UI 
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  );
}

// 2. 데이터를 이용하는 컴포넌트를 위해 Context 내보내기 
export default ColorContext; 