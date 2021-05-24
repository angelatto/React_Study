import { useState } from "react";
import Child from "./Child";

function Exam05StateToProp(){
  // 1. 부모쪽에서 상태를 만든다.
  // 2. 자식에세 state를 props로 전달한다. 
  // 3. 자식에게 함수를 props로 전달한다. 이 함수는 자식이 부모에게 props 변경 요청을 보낼 수 있도록 함 
    const [img, setImg] = useState("photo1.jpg");

    const changeImage = () => { // 상태 변경 
      img === 'photo1.jpg'? setImg("photo2.jpg"): setImg("photo1.jpg");
    };

    return(
        <div className="card">
            <div className="card-header">
              Exam05StateToProp
            </div>
            <div className="card-body">
              <Child img={img} changeImage={changeImage}/>
              <Child img={img} changeImage={changeImage}/>
            </div>
        </div>
    );
}

export default Exam05StateToProp;