import { render, screen } from '@testing-library/react';
import App from './App';

// 테스트 이름 , 마음대로 작성 가능 
// 함수는 테스트 내용 
test('renders learn react link', () => {
  render(<App />); // App이라는 컴포넌트를 실행해봐 
  const linkElement = screen.getByText(/learn react/i); // 결과 T/F
  expect(linkElement).toBeInTheDocument();
});
