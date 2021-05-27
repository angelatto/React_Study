import React, { useState } from 'react';

const AppContext = React.createContext({
  uid: '',
  setUid: () => {},
  authToken: '',
  setAuthToken: () => {}
});

export function AppContextProvider(props){
  const [uid, setUid] = useState('');
  const [authToken, setAuthToken] = useState('');

  const value = { // uid: uid => 상태 넣어주기 
    uid,
    setUid,
    authToken,
    setAuthToken
  };

  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext;