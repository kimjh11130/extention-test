import React from 'react';
import { popToTop } from 'react-chrome-extension-router';

const ThirdPage = ({ message }: any) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '60px',
      width: '300px',
      height: '600px',
    }}
    onClick={() => popToTop()}
  >
    <h1>{message}</h1>
    <p>Click me to pop to the top</p>
  </div>
);

export default ThirdPage;
