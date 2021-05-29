import React, { useState } from 'react';

function delayPromise(time){
  /**
   * resolve : 작업을 성공했을 때 사용할 함수 
   * reject : 작업 실패 시 사용할 함수 
   */
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, time);
  });
  return promise;
}


const Exam01AsyncControl = () => {

  const [loading, setLoading] = useState(false);

  // 방법1 - Promise
  const handleRequest = (e) => {
    // 로딩중이니까 네트워크 작업 시작 직전에 true 
    setLoading(true);

    // 네트워크 작업하는 코드 -> 비동기 작업 
    delayPromise(3000)
      .then(result => {}) // success
      .catch(error => {})
      .finally(() => {
        // 작업이 성공했건 실패했건 일단 작업이 끝나면 로딩완료해야하니까 여기서!
        setLoading(false);
      })
  };

  // 방법2 - Async Await 
  const handleRequestAsyncAwait = async (e) => {
    setLoading(true);
    try{
      const result = await delayPromise(3000); // success
    }catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
          Exam01AsyncControl
      </div>
      <div className="card-body">
        <button className="btn btn-primary btn-sm mr-2"
                onClick={handleRequest}>데이터 요청</button>
        <div className="mt-3">
          {loading? 
            <div class="spinner-border text-info" >
              <span class="sr-only">로딩 중...</span>
            </div>
              :
            <div>로딩 완료</div>
          }
        </div>
      </div>
    </div>
    
  );
};

export default Exam01AsyncControl;