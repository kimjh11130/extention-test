import React from 'react';
import { popToTop } from 'react-chrome-extension-router';

const ThirdPage = ({ message }: any) => (
  <div onClick={() => popToTop()}>
    <h1>{message}</h1>
    <p>Click me to pop to the top</p>
  </div>
);

export default ThirdPage;
