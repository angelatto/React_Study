import { useState } from "react";
import { insertBoard } from "./data";

function BoardWriteForm(props){
    const [board, setBoard] = useState({
      btitle: '',
      bcontent: '',
    });

    const handleChange = (e) => {
      setBoard({
        ...board,
        [e.target.name]: e.target.value
      });
    };

    // 추가 버튼 눌렀을 때 - submit
    const handleAdd = (e) => {
      e.preventDefault();
      const newBoard = {...board}; // 상태를 복제해서 넘겨야함. 원본을 넘기면 다른데서 상태를 바꿀 수도 있으니 위험 
      newBoard.bwriter = 'user1';
      insertBoard(newBoard);
      // 리스트로 넘겨줌 
      props.history.goBack();
    };
   
    // 취소 버튼 눌렀을 때 
    const handleCancel = (e) => {
      props.history.goBack();
    };

    return(
      <div className="card">
      <div className="card-header">
        Component: BoardWriteForm
      </div>
      <div className="card-body">
        <form onSubmit={handleAdd}>
          <div className="form-group row">
            <label htmlFor="btitle" className="col-sm-2 col-form-label">btitle</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="btitle" name="btitle" value={board.btitle} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bcontent" className="col-sm-2 col-form-label">bcontent</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="bcontent" name="bcontent" value={board.bcontent} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 d-flex justify-content-center">
              <input type="submit" className="btn btn-primary btn-sm mr-2" value="추가"/>
              <input type="button" className="btn btn-primary btn-sm" value="취소" onClick={handleCancel}/>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
}

export default BoardWriteForm;