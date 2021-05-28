import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { createSetUidAction } from "redux/auth-reducer";
import AppContext from "views/AppContext";

function AppHeader() {
    const appContext = useContext(AppContext);

    const globalUid = useSelector((state) => state.authReducer.uid); // global uid 뽑아오기 
    const dispatch = useDispatch();

    const logout = (e) => {
        appContext.setUid('');
        dispatch(createSetUidAction(''));
    };

    return (
        /*   
            다 자바스크립트로 바뀐다. 
            {' '} 표현식안에 공간을 두어야만이 자바스크립트가 들어간다. 
        */
        <nav className="navbar bg-dark navbar-dark text-white font-weight-bold 
                        justify-content-between">
        <Link to="/" className="navbar-brand">
            <img src="/logo512.png" alt="" width="30" height="30" 
                className="align-top"/>
            {' '} React
        </Link>
        <div>
            {appContext.uid === '' && globalUid === ''? 
                <Link to="/" className="btn btn-success btn-sm">로그인</Link>
                :
                <div className="d-flex align-items-center">
                    <span className="mr-2">User ID : {appContext.uid || globalUid}</span>
                    <button className="btn btn-success btn-sm" onClick={logout}>로그아웃</button>
                </div>
            }
        </div>
        </nav>
    );
}

export default AppHeader;