import { useState } from "react";

function ComCTwoWayBinding(props){
    const [content, setContent] = useState("");

    // 상태값을 바꾼다.
    const handleChange = (event) => {
        console.log(event.target);
        setContent(event.target.value);
    };

    return(
        <div className="card">
            <div className="card-header">
                ComCTwoWayBinding
            </div>
            <div className="card-body">
                <div>
                    입력1: <input type="text" onChange={handleChange} value={content}/>
                </div>
                <div>
                    입력2: <input type="text" onChange={handleChange} value={content}/>
                </div>
            </div>
        </div>
    );
}

export default ComCTwoWayBinding;