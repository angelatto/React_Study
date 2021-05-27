import { combineReducers } from 'redux';
import colorReducer from 'redux/color-reducer'; // 절대경로 
import authReducer from './auth-reducer';

/*
  combineReducers()는 여러 리듀서들을 모두 결합하겠다!!! 
 */
const rootReducer = combineReducers({
  colorReducer,
  authReducer
});

export default rootReducer;