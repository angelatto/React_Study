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


  // 재연산을 방지하자 => useMemo 
  const getLength = useMemo(() => { // 매번 입력할때마다 실행될 필요 없음 -> 성능 향상 시키기 
    console.log('getLength() 실행 ');
    return boards.length;
  }, [boards]); // 콜백함수와 배열(실행조건)

  const handleBtitleChange = (e) => {
    setBtitle(e.target.value);
  };

  const addBoard = useCallback((e) => {
    const newBoard = {bno, btitle}; // 상태값 가져오기 
    const newBoards = boards.concat(newBoard);
    newBoards.sort((a, b) => (b.bno - a.bno)); // 내림차순
    setBoards(newBoards);
    setBno(bno + 1);
    setBtitle('');
  }, [bno, btitle, boards]); // props이 바뀌면 실행되지 않음 

  const changeBoard = useCallback((bno) => {
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
    }, [boards]); // boards가 변경되었을 때만 선언된다. 

  const removeBoard = useCallback((bno) => {
    const newBoards = boards.filter(board => board.bno !== bno);
    setBoards(newBoards);
  }, [boards]);

  
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
            {/* 리스트에서 하나의 행 컴포넌트는 자식으로 따로 만들기 
                리스트에서 한 행만 변경이 일어나면 남은 행들을 리랜더링될 필요 없다. 
            */}
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