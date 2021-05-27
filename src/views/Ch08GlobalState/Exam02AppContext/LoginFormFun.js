import React, { useContext, useState } from 'react';
import AppContext from 'views/AppContext';

const LoginFormFun = () => {
  const [uid, setUid] = useState('');

  const handleChange = (e) => {
    setUid(e.target.value);
  };
  
  const appContext = useContext(AppContext);

  const login = (e) => {
    appContext.setUid(uid);
  }

  const logout = (e) => {
    appContext.setUid('');
  }

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
            {appContext.uid === "" ? (
              <button className="btn btn-success btn-sm" onClick={login}>로그인</button>
            ) : ( 
              <button className="btn btn-success btn-sm" onClick={logout}>로그아웃</button>
            )}
          </div>
      </div>

  );
};

export default LoginFormFun;