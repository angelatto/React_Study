import { Redirect, Route, Switch } from "react-router-dom";
import Ch01ComponentDeclaration from "views/Ch01ComponentDeclaration";
import Ch02JSX from "views/Ch02JSX";
import Ch03PropsAndState from "views/Ch03PropsAndState";
import Ch04LifeCycle from "views/Ch04LifeCycle";
import Ch05Style from "views/Ch05Style";
import Ch06Route from "views/Ch06Route";
import Ch07PerformanceImprovement from "views/Ch07PerformanceImprovement";
import Home from "views/Home";


function AppRoute() {
    return ( 
        // 라우트 순서 중요, 필터처럼 걸러짐 , exact는 부분경로가 아니라 정확하게 일치하는 경로 의미 
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/ch01" component={Ch01ComponentDeclaration}/>
            <Route path="/ch02" component={Ch02JSX}/>
            <Route path="/ch03" component={Ch03PropsAndState}/>
            <Route path="/ch04" component={Ch04LifeCycle}/>
            <Route path="/ch05" component={Ch05Style}/>
            <Route path="/ch06" component={Ch06Route}/>
            <Route path="/ch07" component={Ch07PerformanceImprovement}/>
            
            <Redirect to="/"/> 
        </Switch>
    );
}

export default AppRoute;