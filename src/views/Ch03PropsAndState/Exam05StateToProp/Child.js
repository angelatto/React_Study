function Child(props){
  /*
    부모가 자식에게 전달하는 props는 읽기 전용이기 때문에 
    props를 변경하고 싶다면 
    부모에게 다시 props를 전달해달라고 요청을 하면 된다.
  */
    // props를 왜 온클릭에ㅐ서 바로 호출ㅇ하면 에러나지??/ 질문 !! 
    function handle(){
      props.changeImage()
    }
    return(
        <div className="card">
            <div className="card-header">
              Child
            </div>
            <div className="card-body">
              <button className="btn btn-info btn-sm" onClick={handle}>이미지 변경</button>
              <div>
                <img src={"/resources/img/"+props.img} alt="" width="150"/>
              </div>
            </div>
        </div>
    );
}

export default Child;