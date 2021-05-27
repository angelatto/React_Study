import { Route, Switch } from "react-router";
import Exam01UseMemo from "./Exam01UseMemo";
import Exam02UseCallback from "./Exam02UseCallback";
import Exam03SetterFunArg from "./Exam03SetterFunArg";
import Exam04ReactMemo from "./Exam04ReactMemo";
// import Exam05ListWIthScroll from "./Exam05ListWIthScroll";
import loadable from '@loadable/component';
const Exam05ListWIthScroll = loadable(() => import('./Exam05ListWIthScroll'));

function Ch07PerformanceImprovement(props){
    return(
        <div className="card">
            <div className="card-header">
              Ch07PerformanceImprovement
            </div>
            <div className="card-body">
              <Switch>
                <Route path={`${props.match.url}/exam01`} exact component={Exam01UseMemo}/>
                <Route path={`${props.match.url}/exam02`} exact component={Exam02UseCallback}/>
                <Route path={`${props.match.url}/exam03`} exact component={Exam03SetterFunArg}/>
                <Route path={`${props.match.url}/exam04`} exact component={Exam04ReactMemo}/>
                <Route path={`${props.match.url}/exam05`} exact component={Exam05ListWIthScroll}/>
              </Switch>
            </div>
        </div>
    );
}

export default Ch07PerformanceImprovement;