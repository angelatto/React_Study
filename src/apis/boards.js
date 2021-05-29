import axios from 'axios';
import qs from 'qs';

export function getBoardList(pageNo=1){
  // get은 url과 config로 매개값 이루어짐 
  const promise = axios.get('/boards', {params: {pageNo}});
  return promise;
}

// 첨부 파일 없는 버전 
export function createBoardNoAttach(board){
  // {'btitle': '제목1', 'bcontent': '내용1', ...} ----JSON 
  // Spring => @RequestBody,  Node는 노상관 
  const promise = axios.post('/boards', board);
  // btitle=제목&bcontent-내용&... -----Query String 
  // Spring => 파라미터로 받는다,  Node는 노상관 
  // const promise2 = axios.post('/boards', qs.stringify(board));
  return promise;
}

// 첨부 파일 있는 버전 
export function createBoard(multipartFormData) {
  return axios.post("/boards", multipartFormData); 
}

export function readBoard(bno) {
  return axios.get("/boards/" + bno);
}

export function deleteBoard(bno) {
  return axios.delete("/boards/" + bno);
}

export function updateBoard(board) {
  return axios.put("/boards", board); //{"btitle":"xxx", "bcontent":"yyy", "bwriter":"zzz"}
}

export function downloadAttach(bno) {
  return axios.get("/boards/battach/" + bno, {responseType: "blob"});
}