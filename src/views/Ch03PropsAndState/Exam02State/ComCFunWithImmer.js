import React from "react";
import { useState } from "react";
import produce from "immer";

function ComCFunWithImmer(props){
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
            // 여기가 immer 이다. 
            // 원본을 바꾸는게 아니라 복제된걸 바꾸는 것은 상관없다. 
            // draft는 이전 상태를 ""복제한 객체""이다. 
            setJoinForm(produce((draft) => { // 콜백함수
                draft[event.target.name] = event.target.value;
            }))
        }else{
            if(event.target.checked){ // 체크를 했을 때 
                setJoinForm(produce((draft) => {
                    draft.uskill.push(event.target.value);
                    // push도 원본에 추가하는 것. 
                    // 어차피 draft는 원본 복제한거라서 상관없음 
                }));
            }else{ // 체크를 해지했을 때 
                setJoinForm(produce((draft) => {
                    var index = draft.uskill.findIndex(item => item === event.target.value);
                    draft.uskill.splice(index, 1);
                    // splice도 원본을 바꾸는 것. 
                }));
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


export default ComCFunWithImmer;