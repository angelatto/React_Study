import { useReducer, useState } from "react";

function reducer(prevState, action){
  // boards의 상태가 앞으로 어떻게 변경될건지 미리 정의해놔야한다. 
  // 가능한 boards 상태변경 이벤트: 추가, 삭제, 수정 
  if(action.type === 'ADD'){
    // action = {type: "ADD", board: {추가할 하나의 보드}}
    return prevState.concat(action.board)
  }else if(action.type === 'DELETE'){
    // action = {type: "DELETE", bno: 삭제할 bno}
    return prevState.filter((board) => (board.bno !== action.bno))
  }else if(action.type === 'UPDATE'){
    // action = {type: "UPDATE", board: {수정할 보드}}
    // 수정할 보드 찾기 : action.board.bno
    return prevState.map((board) => ( 
        // if board.bno === action.board.bno : 수정할 보드 리턴하기 
        // else : board 원본 보드 리턴 
       (board.bno === action.board.bno && action.board) || board
      ))
  }else{
    return null
  }
}

function ComBFun(props){
  const [boards, dispatch] = useReducer(reducer, [
    {bno:1, btitle:'제목1', bcontent: '내용1'},
    {bno:2, btitle:'제목2', bcontent: '내용2'},
    {bno:3, btitle:'제목3', bcontent: '내용3'},
  ]); // DB 느낌 

  const [newBno, setNewBno] = useState(4);
  const [newBoard, setNewBoard] = useState({ // 새로 추가할 떄 양식 
    btitle: "",
    bcontent: ""
  });

  const [updateBoard, setUpdateBoard] = useState({ // 수정할 때 양식 
    bno: "",
    btitle: "",
    bcontent: ""
  });

  // 키보드 입력한 값이 value에 적용되서 사용자가 보이도록 
  const changeNewBoard = (event) => {
    setNewBoard({
      ...newBoard,
      [event.target.name]: event.target.value
    });
  };

  const changeUpdateBoard = (event) => {
    setUpdateBoard({
      ...updateBoard,
      [event.target.name]: event.target.value
    });
  };

  // 추가 버튼 눌렀을 때 
  const addBoard = (event) => {
    console.log(newBoard);
    // dispatch를 이용해서 boards에 추가해달라고 통보해줘야 한다. 
    dispatch({type:'ADD', board: {
        ...newBoard, // 상태 
        bno: newBno,
    }})
    setNewBno(newBno + 1); // 상태 업데이트 
    // input 창 초기화 
    setNewBoard({
      btitle: '',
      bcontent: ''
    })
  };

  // 삭제 버튼 클릭 
  const removeBoard = (bno) => {
    dispatch({type:'DELETE', bno: bno})
  }
  
  // 선택 버튼 클릭 
  const selectBoard = (bno) => {
    // bno로 보드 정보 뽑아오기 - 반복문 써도되지만 find 함수 이용해보기 
    // array.find((배열의 요소) => {return true}) true인 요소가 find된다. 
    const selectedBoard = boards.find(board => (board.bno === bno));
    setUpdateBoard({...selectedBoard}); // 업데이트 보드에 input에 값 보여주기 
  }
  
  // 수정 버튼 클릭 시 
  const handleUpdate = (event) => {
    //너는 왜 깊은 복사 안하고 바로 넣는지 궁금....????
    dispatch({type:'UPDATE', board: updateBoard}); // 수정하기 

    // input 창 초기화 
    setUpdateBoard({
      bno: '',
      btitle: '',
      bcontent: ''
    })

  }

  return(
    <div className="card">
    <div className="card-header">
      Component: ComBFun
    </div>
    <div className="card-body">
      <div className="alert alert-primary">
        <table style={{width:"100%"}}>
          <tbody>
            <tr>
              <td style={{width:"100px"}}>btitle</td>
              <td><input type="text" name="btitle" style={{width:"100%"}} 
                    value={newBoard.btitle} onChange={changeNewBoard}/></td>
            </tr>
            <tr>
              <td>bcontent</td>
              <td><input type="text" name="bcontent" style={{width:"100%"}} 
                    value={newBoard.bcontent} onChange={changeNewBoard}/></td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-success btn-sm" onClick={addBoard}>추가</button>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>bno</th>
              <th>btitle</th>
              <th>bcontent</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {boards.map(board => ( // 괄호는 리턴값을 의미한다. 
            // key 잊지 말기 주의 ---------------- 
                <tr key={board.bno}>
                  <td>{board.bno}</td>
                  <td>{board.btitle}</td>
                  <td>{board.bcontent}</td>
                  <td style={{width: '150px'}}>
                    <button className="btn btn-info btn-sm mr-1" onClick={(event) => selectBoard(board.bno)}>선택</button>
                    <button className="btn btn-danger btn-sm" onClick={(event) => removeBoard(board.bno)}>삭제</button>
                 
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="alert alert-primary">
        <table style={{width:"100%"}}>
          <tbody>
            <tr>
              <td style={{width:"100px"}}>bno</td>
              <td><input type="text" name="bno" style={{width:"100%"}}  readOnly value={updateBoard.bno}/></td>
            </tr>          
            <tr>
              <td style={{width:"100px"}}>btitle</td>
              <td><input type="text" name="btitle" style={{width:"100%"}} 
                  value={updateBoard.btitle} onChange={changeUpdateBoard} /></td>
            </tr>
            <tr>
              <td>bcontent</td>
              <td><input type="text" name="bcontent" style={{width:"100%"}}
                   value={updateBoard.bcontent} onChange={changeUpdateBoard}/></td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-success btn-sm" onClick={handleUpdate}>수정</button>
      </div>      
    </div>
  </div>
    
  )
}

export default ComBFun;