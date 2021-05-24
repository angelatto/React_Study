// reducer는 여러 컴포넌트에서 재사용 가능함 
// 상태를 변경하는 함수이다. 
function reducer(prevState, action){
  console.log('이전 state: ', prevState);
  if(action.type === 'INCREMENT'){
    return {number : prevState.number + 1}
  }else if(action.type === 'DECREMENT'){
    return {number : prevState.number - 1}
  }
  return null
}

export default reducer;