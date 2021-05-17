import React from "react";

// 클래스형 컴포넌트 선언 
class ComB extends React.Component{
    render() { // 메소드 재정의 
        return (
            <div className="card">
                <div className="card-header">
                    ComB
                </div>
                <div className="card-body">
                    content...
                </div>
            </div>
        );
    }
}

export default ComB;