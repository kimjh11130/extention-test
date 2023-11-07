import {
  Router,
  getComponentStack,
  getCurrent,
} from 'react-chrome-extension-router';
import FirstPage from './page/FirstPage';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const { component, props } = getCurrent();
    console.log(
      component
        ? `There is a component on the stack! ${component} with ${props}`
        : `The current stack is empty so Router's direct children will be rendered`
    );
    const components = getComponentStack();
    console.log(`The stack has ${components.length} components on the stack`);
  });
  return (
    <Router>
      <FirstPage />
    </Router>
  );
}

export default App;
