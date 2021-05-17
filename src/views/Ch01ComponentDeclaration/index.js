import {  Route, Switch } from "react-router-dom";
import ComA from "./ComA";
import ComB from "./ComB";

function Ch01ComponentDeclaration(){
    return (
        <div className="card">
            <div className="card-header">
                Ch01ComponentDeclaration
            </div>
            <div className="card-body">
                <Switch>
                    <Route path="/ch01/coma" exact component={ComA}/>
                    <Route path="/ch01/comb" exact component={ComB}/>
                </Switch>
            </div>
        </div>
    );
}

export default Ch01ComponentDeclaration;

/*
 폴더 자체가 컴포넌트이고,, index.js가 자동으로 그 역할을 한다. 
 이렇게 만드는 이유는 폴더안에 서브 컴포넌트를 만들 수 있기 때문이다. 
*/