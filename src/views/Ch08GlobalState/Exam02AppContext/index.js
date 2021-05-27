import React from 'react';
import LoginFormFun from './LoginFormFun';
import LoginFormClass from './LoginFormClass';

const Exam02AppContext = () => {
  return (
    <div className="card">
      <div className="card-header">
        Exam02AppContext
      </div>
      <div className="card-body">
           <LoginFormClass/>
           <LoginFormFun/>
      </div>
    </div>
  );
};
/*
  <AppContextProvider>
    <App />
  </AppContextProvider>
*/
export default Exam02AppContext;