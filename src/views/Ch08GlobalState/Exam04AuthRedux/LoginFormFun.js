import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSetUidAction } from 'redux/auth-reducer';

const LoginFormFun = () => {
  const [uid, setUid] = useState(''); // 여기 컴포넌트에만 있는 상태값 
  const globalUid = useSelector((state) => (state.authReducer.uid)); // 전역 uid, 리듀서에 있음 
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUid(e.target.value);
  };

  const login = (e) => {
    dispatch(createSetUidAction(uid));
  };

  const logout = (e) => {
    dispatch(createSetUidAction(''));
  };


  return (
    <div className="card">
        <div className="card-header">
            LoginFormFun
        </div>
        <div className="card-body">
            <div className="form-group row">
                  <label htmlFor="uid" className="col-sm-2 col-form-label">User ID</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="uid" name="uid" value={uid} onChange={handleChange}/>
                  </div>
            </div>
            {globalUid === "" ? (
              <button className="btn btn-success btn-sm" onClick={login}>로그인</button>
            ) : ( 
              <button className="btn btn-success btn-sm" onClick={logout}>로그아웃</button>
            )}
        </div>
      </div>
  );
};

export default LoginFormFun;