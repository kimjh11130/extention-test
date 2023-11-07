import { Link } from 'react-chrome-extension-router';
import SecondPage from './SecondPage';

const FirstPage = () => {
  return (
    <Link
      component={SecondPage}
      props={{ message: 'I came from component one!' }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '60px',
        width: '300px',
        height: '600px',
      }}
    >
      This is component One. Click me to route to component Two
    </Link>
  );
};

export default FirstPage;
