import React from "react";
import PropTypes from "prop-types";

function FunTypeProps(props){
    console.log("props11: ", props);
    return (
        <div className="card">
            <div className="card-header">
            FunTypeProps
            </div>
            <div className="card-body">
                <div>name: {props.name}</div>
                <div>version: {props.version}</div>
                {props.children}
            </div>
        </div>
    );
}

// 디폴트 속성값 설정 
FunTypeProps.defaultProps = {
    version: 17
};

// 타입과 필수 설정 
FunTypeProps.propTypes = {
    name: PropTypes.string.isRequired,
    version: PropTypes.number
};


export default FunTypeProps;