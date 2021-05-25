import { Link } from "react-router-dom";
import qs from 'qs';
import { getBoardList } from './data';

function BoardTable(props){
    let pageNo = 1;

    const queryString = qs.parse(props.location.search, {ignoreQueryPrefix: true});
    console.log('location.search: ', props.location.search); // 파싱전: 쿼리스트링 물음표까지 같이 나옴 
    console.log('queryString: ', queryString); // 파싱 후에는 자바스크립트 객체가 얻어진다.(문자열 주의 -> 숫자는 형변환필요 )
    if(queryString.pageNo){
      pageNo = parseInt(queryString.pageNo);
    }

    const boardList = getBoardList(pageNo);

    return(
      <div className="card">
      <div className="card-header">
        Component: BoardTable
      </div>
      <div className="card-body">
        <Link to="/ch06/writeForm" className="btn btn-info btn-sm mb-2">추가</Link>
        <table className="table table-hover">
          <thead>
            <tr className="text-center">
              <th>bno</th>
              <th>btitle</th>
              <th>bwriter</th>
              <th>bdate</th>
              <th>bhitcount</th>
            </tr>
          </thead>
          <tbody>
            {boardList.map(board=>(
              <tr className="text-center" key={board.bno}>
                <th>{board.bno}</th>
                <td><Link to={`/ch06/${board.bno}/read?pageNo=${pageNo}`}>{board.btitle}</Link></td>
                <td>{board.bwriter}</td>
                <td>{board.bdate}</td>
                <td>{board.bhitcount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <Link to="/ch06?pageNo=1" className={`btn ${pageNo===1?"btn-danger":"btn-outline-success"} btn-sm mr-1`}>1</Link>
          <Link to="/ch06?pageNo=2" className={`btn ${pageNo===2?"btn-danger":"btn-outline-success"} btn-sm mr-1`}>2</Link>
          <Link to="/ch06?pageNo=3" className={`btn ${pageNo===3?"btn-danger":"btn-outline-success"} btn-sm mr-1`}>3</Link>
        </div>
      </div>
    </div>
    );
}

export default BoardTable;