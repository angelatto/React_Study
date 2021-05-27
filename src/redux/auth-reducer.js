// 1.상태 초기값 선언 
const initialState = {
  uid: '',
  authToken: ''
};

// 2.액션 타입 선언 
const SET_UID = "auth/setUid";
const SET_AUTH_TOKEN = "auth/setAuthToken"; // 파일들 늘어나면 중복가능성 있으니까..


// 3."액션 생성" 함수 선언 
export const createSetUidAction = (uid) => {
  return {type:SET_UID, uid}
};

export const createSetAuthTokenAction = (authToken) => {
  return {type:SET_AUTH_TOKEN, authToken}
};

// 4.리듀스 선언 <---------dispatch로 상태 변경이 통보되면 여기로 호출된다. 
const authReducer = (state=initialState, action) => {
  if(action.type === SET_UID){
    return {...state, uid: action.uid}; // uid만 상태 변경 
  }else if(action.type === SET_AUTH_TOKEN){
    return {...state, authToken: action.authToken}; // authToken만 상태 변경 
  }else{
    return state; // 아무것도 안바뀜 
  }
};

// reducer는 여러 컴포넌트에서 재사용 가능함 
// 상태를 변경하는 함수이다. 
export default authReducer;