// 1.상태 초기값 선언 
const initialState = {
  color: "yellow"
};

// 2.액션 타입 선언 
const SET_COLOR = "color/setColor";

// 3.액션 생성 함수 선언 
export const createSetColorAction = (color) => {
  return {type:SET_COLOR, color}
};

// 4.리듀스 선언 
const colorReducer = (state=initialState, action) => {
  if(action.type === SET_COLOR){
    return {color: action.color};
  }else{
    return state; // 원래 상태 리턴 
  }
};
// reducer는 여러 컴포넌트에서 재사용 가능함 
// 상태를 변경하는 함수이다. 

export default colorReducer;