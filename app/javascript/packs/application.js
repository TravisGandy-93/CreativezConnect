import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../components/HelloWorld';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<HelloWorld />, root);
});
