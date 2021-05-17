import "App.css";
import AppHeader from "AppHeader";
import AppMenu from "AppMenu";
import AppRoute from "AppRoute";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <AppHeader />

      <div className="flex-grow-1 container-fluid">
        <div className="row h-100">
          <div className="col-md-6 col-lg-4 p-3 bg-dark">
            <div className=" h-100 d-flex flex-column">
              <div className="flex-grow-1" style={{ height: "0px", overflowY: "auto", overflowX: "hidden" }}>
                <AppMenu />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-8 p-3">
            <div className=" h-100 d-flex flex-column">
              <div className="flex-grow-1 overflow-auto pr-3" style={{ height: "0px" }}>
                <AppRoute />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// commonJS 모듈이 아니라 ES6모듈 방식 사용
// 하나의 컴포넌트는 모듈로 만들어진다.
// 모듈은 클래스 또는 함수형 타입으로 만들 수 있다.
export default App;
