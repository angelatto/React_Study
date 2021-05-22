import React from "react";
import { useState } from "react";

function ComCFun(props){
    const [joinForm, setJoinForm] = useState({
        uid:"",
        uname: "",
        upassword: "",
        ujob: "developer",
        uskill: []
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(joinForm);
    };

    const handleChange = (event) => { // 상태 변경 
        console.log(event.target.name); // 양식의 이름, 뭐가 바뀐건지 
        console.log(event.target.value); // 바뀐 값 

        if(event.target.name !== "uskill"){
            setJoinForm({
                ...joinForm,
                [event.target.name]: event.target.value
                // 주의: 배열아님주의, 변수의 이름이 속성으로 들어가려면 대괄호가 필요하다... 
                // 자바스크립트 문법임 . 
            })
        }else{
            if(event.target.checked){ // 체크를 했을 때 
                // setJoinForm({
                //     ...joinForm,
                //     uskill: joinForm.uskill.concat(event.target.value)
                //     // concat은 원본 배열은 냅두고, 새로운 배열을 리턴한다. 
                // });
                setJoinForm(prevJoinForm => ({
                    // 여기에 ({}) <- ()로 감싸줘야 return 문임을 알 수 있다. 
                    // 그렇지 않으면 화살표 함수 시작 괄호로 인식될 수 있다. 
                    ...prevJoinForm,
                    uskill: prevJoinForm.uskill.concat(event.target.value)
                }));
            }else{ // 체크를 해지했을 때 
                // setJoinForm({
                //     ...joinForm,
                //     uskill: joinForm.uskill.filter(item => item !== event.target.value)
                //      // 삭제 - filter도 새로운 배열을 리턴한다. 함수에서 true인것만 넣음 
                // });
                setJoinForm(prevJoinForm => ({
                    ...prevJoinForm,
                    uskill: prevJoinForm.uskill.filter(item => item !== event.target.value)
                }));
                // 성능향상 측면에서 이렇게 작성해야 하는 이유가 있다. 
            }
        }
    };

    return(
        <div className="card">
        <div className="card-header">
            ComCFun
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">ID</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="uid" onChange={handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="uname" onChange={handleChange} autoComplete="username"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" name="upassword" onChange={handleChange} autoComplete="current-password"/>
              </div>
            </div>
            <fieldset className="form-group row">
              <legend className="col-form-label col-sm-2 float-sm-left pt-0">Job</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="ujob" value="developer" onChange={handleChange} checked={joinForm.ujob === "developer"} />
                  <label className="form-check-label">
                    개발자
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="ujob" value="designer" onChange={handleChange} checked={joinForm.ujob === "designer"} />
                  <label className="form-check-label">
                    디자이너
                  </label>
                </div>
                <div className="form-check disabled">
                  <input className="form-check-input" type="radio" name="ujob" value="pm" onChange={handleChange} checked={joinForm.ujob === "pm"} />
                  <label className="form-check-label">
                    프로젝트 관리자
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="form-group row">
              <legend className="col-form-label col-sm-2 float-sm-left pt-0">Skill</legend>
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="uskill" value="java" onChange={handleChange}/>
                  <label className="form-check-label">
                    자바
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="uskill" value="spring" onChange={handleChange}/>
                  <label className="form-check-label">
                    스프링
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="uskill" value="react" onChange={handleChange}/>
                  <label className="form-check-label">
                    리액트
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary btn-sm">가입</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}


export default ComCFun;