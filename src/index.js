import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter} from "react-router-dom"
import { AppContextProvider } from 'views/AppContext';
import { createStore } from 'redux';
import rootReducer from 'redux/root-reducer';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// composeWithDevTools는 크롬 확장 프로그램 
/*
 루트 리듀서에 결합된 여러 리듀서들을 총괄하는 객체가 store이다. 
 store를 전역 상태로 관리하겠다. 
 ---------- ---------- ---------- ---------- ----------
 App이라는 컴포넌트를 <Provider> 컴포넌트로 감싸주면 된다. 
 Provider는 context로 만들어짐 !!! 
 react-redux는 리덕스가 리액트에서 쓰이도록 하는 모듈임.
 Context는 결국 전에서 배운 그 전역 상태를 정의하는 그것임 !! re 
*/
const store = createStore(rootReducer, composeWithDevTools());
// state는 store의 내장 속성이다. 
// dispatch는 store의 내장 메소드 -> 리듀서를 호출한다. 
// store.state.colorReducer
// store.dispatch()

/* 
  render() : 첫번째 매개값(컴포넌트)을 두번째 매개값으로 랜더링한다. 
*/
ReactDOM.render(
  // <React.StrictMode> 
    <BrowserRouter>
      <Provider store={store}>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </Provider>
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
