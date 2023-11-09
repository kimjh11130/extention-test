import { Link } from 'react-chrome-extension-router';
import SecondPage from './SecondPage';
import { useState } from 'react';

const FirstPage = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const getCurrentTabUrl = () => {
    var queryInfo = {
      active: true,
      currentWindow: true,
    };

    chrome.tabs.query(queryInfo, function (tabs) {
      var tab = tabs[0];
      var url = tab.url;
      setCurrentUrl(url ?? '');
    });
  };

  document.addEventListener('DOMContentLoaded', () => getCurrentTabUrl());
  // when click, get current page link

  console.log(currentUrl);
  return (
    <div
      className='flex flex-col gap-5'
      style={{
        width: '300px',
        height: '600px',
      }}
    >
      <div>
        <Link
          component={SecondPage}
          props={{ message: 'I came from component one!' }}
        >
          This is component One. Click me to route to component Two
        </Link>
      </div>
      <div style={{ fontSize: '20px', color: 'blue' }}>{currentUrl}</div>
    </div>
  );
};

export default FirstPage;
