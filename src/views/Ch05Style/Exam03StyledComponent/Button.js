import styled, {css} from 'styled-components';

/*
  클래스형도 아니고 함수형도 아니다. 
  button 가지고 컴포넌트를 만들겠다. 
 */
  const Button = styled.button`
    background-color: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
      background-color: rgba(255,255,255,0.9);
    }

    // props에 inverted가 들어가있으면 -> css 적용 
    ${props => props.inverted &&
      css`
        background-color: transparent;
        border: 2px solid white;
        color: white;
        &:hover {
          background: white;
          color: black;
        }
      `
    }

// 연달아서 버튼을 작성했을 때 (Sass 문법)
    &+button {
      margin-left: 1rem;
    }
  `;

export default Button;