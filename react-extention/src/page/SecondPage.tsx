import { goBack, goTo } from 'react-chrome-extension-router';
import ThirdPage from './ThirdPage';
import styled from 'styled-components';

const SecondPage = ({ message }: any) => {
  return (
    <Container>
      This is component SecondPage. I was passed a message:
      <P>{message}</P>
      <button onClick={() => goBack()}>
        Click me to go back to component One
      </button>
      <button onClick={() => goTo(ThirdPage, { message })}>
        Click me to go to component Three!
      </button>
    </Container>
  );
};

export default SecondPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  width: 300px;
  height: 600px;
`;

const P = styled.p`
  color: blue;
`;
