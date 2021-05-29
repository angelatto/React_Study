import axios from 'axios';

export function login(user){
  const promise = axios.post('/auth/login', user);
  return promise; // axios.post() 결과가 프로미스인것을 알아야 한다. 
}

export function join(user){
  const promise = axios.post('/auth/join', user);
  return promise;
}