import { useCallback } from "react";

function BoardListItem(props){
   // 함수 재선언 방지하자 - useCallback 
   // []에 아무것도 값이 없으면 마운트될때 딱 한번만 실행됨 
    const handleChange = useCallback(() => {
      props.changeBoard(props.board.bno);
    },[props]);

    const handleRemove = useCallback(() => {
      props.removeBoard(props.board.bno);
    }, [props]);

    return(
        <div className="d-flex align-items-center justify-content-between border-bottom">
          <div className="d-flex">
            <span style={{width:"80px"}}>{props.board.bno}</span>
            <span>{props.board.btitle}</span>
          </div>
          <div>
            <button className="btn btn-outline-primary btn-sm mr-1" onClick={handleChange}>변경</button>
            <button className="btn btn-outline-danger btn-sm" onClick={handleRemove}>삭제</button>
          </div>
        </div>
    );
}

export default BoardListItem;