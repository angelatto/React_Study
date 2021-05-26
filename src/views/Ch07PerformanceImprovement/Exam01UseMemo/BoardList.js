import { useCallback, useMemo, useState } from "react";
import BoardListItem from "./BoardListItem";

function getBoards(){
  const boards = [];
  for(var i=5; i>=1; i--){
    boards.push({bno: i, btitle: '제목'+i});
  }
  return boards;
}

function BoardList(props){
  const [btitle, setBtitle] = useState('');
  const [boards, setBoards] = useState(getBoards);
  // getBoards : 상태 초기값을 함수로 준것이다. 이때 함수는 호출 아니고 그 자체이다. 
  const [bno, setBno] = useState(6);

  // 매번 입력할때마다 실행될 필요 없음 -> useMemo()
  const getLength = useMemo(() => { 
    console.log('getLength() 실행 ');
    return boards.length;
  }, [boards]); // 콜백함수와 배열(실행조건)


  // 이 함수 선언이 재선언되는 것을 막아보자 -> useCallback() 
  const handleBtitleChange = useCallback((e) => {
    setBtitle(e.target.value);
  }, []); // 배열의 관심 state가 "변경되었을 때만" 함수가 "재선언"된다. 

  const addBoard = (e) => {
    const newBoard = {bno, btitle}; // 상태값 가져오기 
    const newBoards = boards.concat(newBoard);
    newBoards.sort((a, b) => (b.bno - a.bno)); // 내림차순
    setBoards(newBoards);
    setBno(bno + 1);
    setBtitle('');
  };

  const changeBoard = (bno) => {
    const newBoards = boards.map(board => {
      if(board.bno === bno){
        const newBoard = {...board, btitle: board.btitle + "(변경)"};
        return newBoard;
      }else{
        return board;
      }
    }); 
    // 저 뉴보드에 들어간 값이 수정된 보드 또는 그냥 보드 ?? (그럼 그냥 마지막 보드? 의미없다)
    setBoards(newBoards); // 상태 갱신 
  };

  const removeBoard = (bno) => {
    const newBoards = boards.filter(board => board.bno !== bno);
    setBoards(newBoards);
  };

  
  return(
      <div className="card">
          <div className="card-header">
            BoardList
          </div>
          <div className="card-body">
            <div>
              <span className="mr-2">게시물 수:</span>               
              <span className="text-danger">{getLength}</span>
              
              <div className="d-flex align-items-center mt-2 mb-3">
                <span className="mr-2">제목:</span>
                <input type="text" value={btitle} onChange={handleBtitleChange}/>
                <button className="btn btn-info btn-sm ml-3" onClick={addBoard}>추가</button>
              </div>
            </div>

            <div className="d-flex bg-info">
              <span className="border" style={{width:"80px"}}>번호</span>
              <span className="border flex-fill">제목</span>
            </div>
            {/* 리스트에서 하나의 행 컴포넌트는 자식으로 따로 만들기 */}
            {boards.map(board => {
              return ( 
                <BoardListItem key={board.bno} board={board} 
                        changeBoard={changeBoard}
                        removeBoard={removeBoard}/>
              );
            })}

          </div>
      </div>
  );
}

export default BoardList;