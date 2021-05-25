import { Link, useHistory } from "react-router-dom";
import {getBoard, deleteBoard} from './data'; // 모듈 
import qs from 'qs';

function BoardRead(props){
    console.log(props); 

    const params = props.match.params; // pathvariable 값 뽑아오기 
    const bno = parseInt(params.bno); // 형변환 잊지말기 

    const board = getBoard(bno);
    console.log('hitcount1: ', board.bhitcount);

    const queryString = qs.parse(props.location.search, {ignoreQueryPrefix:true});
    const pageNo = parseInt(queryString.pageNo);

    const history = useHistory(); // HOOK 
    // history는 URL을 보관하는 곳인데 여기에 URL을 추가하면 페이지 이동 효과가 나타난다. 

    // 삭제버튼 누르면 
    const handleRemove = (e) => {
      deleteBoard(bno);
      // 삭제하고 목록으로 이동 
      // location.href 쓸 수 없다. 
     // history.push('/ch06?pageNo=' + pageNo); // 새로운 히스토리로 추가 -> 페이지 변경 효과 
      history.goBack();
    };

    const hh =  board.bhitcount;
    console.log('hh: ', hh);

    return(
      <div className="card">
      <div className="card-header">
        BoardRead
      </div>
      <div className="card-body">
        <div>
          <p>bno: {board.bno}</p>
          <p>btitle: {board.btitle}</p>
          <p>bcontent: {board.bcontent}</p>
          <p>bwriter: {board.bwriter}</p>
          <p>bdate: {board.bdate}</p>
          <p>bhitcount: {board.bhitcount}</p>
        </div>
        <div>
          <Link to={"/ch06?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
          <Link to={`/ch06/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
          <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
        </div>
      </div>
    </div>
    );
}

export default BoardRead;