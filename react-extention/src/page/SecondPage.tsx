import { goBack, goTo } from 'react-chrome-extension-router';
import ThirdPage from './ThirdPage';

const SecondPage = ({ message }: any) => {
  console.log(window.location.href);
  return (
    <div>
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
