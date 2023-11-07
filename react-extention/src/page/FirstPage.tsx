import { Link } from 'react-chrome-extension-router';
import SecondPage from './SecondPage';

const FirstPage = () => {
  return (
    <Link
      component={SecondPage}
      props={{ message: 'I came from component one!' }}
    >
      This is component One. Click me to route to component Two
    </Link>
  );
};

export default FirstPage;
