import { goBack, goTo } from 'react-chrome-extension-router';
import ThirdPage from './ThirdPage';

const SecondPage = ({ message }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '60px',
        width: '300px',
        height: '600px',
      }}
    >
      This is component SecondPage. I was passed a message:
      <p>{message}</p>
      <button onClick={() => goBack()}>
        Click me to go back to component One
      </button>
      <button onClick={() => goTo(ThirdPage, { message })}>
        Click me to go to component Three!
      </button>
    </div>
  );
};

export default SecondPage;
