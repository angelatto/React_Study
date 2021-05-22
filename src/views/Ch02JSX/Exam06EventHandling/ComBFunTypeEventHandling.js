function ComBFunTypeEventHandling(props){
    const handleBtn1 = (event) => {  
        console.log("버튼1 클릭");
        console.log(event.target.name); // btn1
        console.log(event.type); // click

    };

    const handleBtn2 = (event, x, y) => {  
        console.log("버튼2 클릭 : ", x+y);
        console.log(event.target.name); // btn1
        console.log(event.type); // click
    };
    /*
        **********주의 (중요!!)**********
        리액트에서는 태그의 속성으로 id를 쓰지 말아야한다. 
        id는 전체 DOM에서 특정 돔을 찾기 위해서 쓰기 때문에 유일해야 한다. 
        그러나 여러 컴포넌트를 다른 사람이 작성하거나,, 또는 컴포넌트를 재사용시에
        id가 중복으로 쓰일 가능성이 있기 때문에 쓰지말아야 한다. 

        만약 꼭 식별하고 싶다면 name을 사용한다거나 DOM 참조를 이용해서 원하는 곳에 접근한다. 

        아래 3가지를 사용하지 말라 !!!! 
        document.getElementByUd()
        document.querySelector("#id")
        $("#id")
        ********************

    */

    return(
        <div className="card">
            <div className="card-header">
                ComBFunTypeEventHandling
            </div>
            <div className="card-body">
                <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={handleBtn1}>버튼1</button>
                <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event) => handleBtn2(event, 3, 5)}>버튼2</button>

            </div>
        </div>
    );
}

export default ComBFunTypeEventHandling;