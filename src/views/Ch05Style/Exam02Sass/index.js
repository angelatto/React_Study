import React, { useState } from 'react';
import style from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Exam02Sass = () => {
  // 상태에 따라서 CSS를 바꾸고 싶을 때 classnames 유용하다. 
  /**
   * 
   * {[style.inverted]: state.userId === null}
      뒤에 조건이 true일 떄 앞의 css가 적용된다. 
   */
  const [state, setState] = useState({
    userId: null 
  });


  return (
    <div className="card">
      <div className="card-header">
      Exam02Sass
      </div>
      <div className="card-body">
        <div className={style.wrapper}>
          Hello, React1 - 이렇게 하면 클래스네임이 유일한 식별값으로 바뀜 
        </div>
        <div className={style.wrapper + " " + style.inverted + " mt-3"}>
          Hello, React2
        </div>
        <div className={`${style.wrapper} ${style.inverted} mt-3`}>
          Hello, React3
        </div>
        {state.userId?
          <div className={cx("wrapper", "mt-3")}>
            Hello, React4
          </div>
           :
           <div className={classNames(style.wrapper, style.inverted, "mt-3")}>
            Hello, React4
          </div>
        }
        <div className={classNames(style.wrapper, {[style.inverted]: state.userId === null}, "mt-3")}>
            Hello, React5
        </div>
        <div className={cx("wrapper", {inverted: state.userId === null}, "mt-3")}>
            Hello, React6
        </div>

      </div>
    </div>
  );
};

export default Exam02Sass;