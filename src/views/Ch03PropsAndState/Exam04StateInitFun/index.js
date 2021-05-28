import { useState } from "react";

function getBoardList() {
  console.log('상태를 초기화하는 이 함수가 한번만 호출되어야 하는데 계속 호출댐');
  // 근데 여기가 디비에서 불러오면 네트워크 작업할텐데 불필요하게 계속 호출하면 성능 떨어짐. 
  return(
    [
      {bno:1, btitle:'제목1', bcontent: '내용1'},
      {bno:2, btitle:'제목2', bcontent: '내용2'},
      {bno:3, btitle:'제목3', bcontent: '내용3'},
    ]
  )
}

/*
  함수형 컴포넌트 전체가 """재실행"""되는 2가지 경우 
  1. props의 값이 바뀔때 
  2. state 상태가 바뀔때 - setter 실행 
  => 상태 초기값은 딱 한번만 실행되기때문에 초기화되지 않는다. 
*/
function Exam04StateInitFun(){
  /* 
    신기방기!!!!!!
    getBoardList() 호출코드를 넣으면 리랜더링 할때마다 호출되는데,
    getBoardList 함수 그자체를 집어넣으면 딱 한번만 실행된다. 
  */
    const [boardList, setBoardList] = useState(getBoardList);
    const [newBno, setNewBno] = useState(4);

    // 추가 버튼 누르면 
    const addBoard = (event) => {
      setBoardList(boardList.concat({
        bno: newBno,
        btitle: '제목'+newBno,
        bcontent: '내용'+newBno,
      }))
      setNewBno(newBno + 1);
    }

    return(
            <div className="card">
            <div className="card-header">
              Exam04StateInitFun
            </div>
            <div className="card-body">
              <button className="btn btn-success btn-sm" onClick={addBoard}>추가</button>
              <table className="table table-hover">
                <thead>
                  <tr className="text-center">
                    <th>bno</th>
                    <th>btitle</th>
                    <th>bcontent</th>
                  </tr>
                </thead>
                <tbody>
                  {/*원래는 보드리스트를 일회성으로 만들어도 됨. 그냥 보여주기만 한다면.. */}
                  {boardList.map(board=>(
                    <tr className="text-center" key={board.bno}>
                      <th>{board.bno}</th>
                      <td>{board.btitle}</td>
                      <td>{board.bcontent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
    );
}

export default Exam04StateInitFun;