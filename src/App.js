import React from 'react';

import Router from './Router';
import UpdateApp from './components/UpdateApp';

export default function App() {
  return (
    <header className='App'>
      <Router />
      <UpdateApp />
    </header>
  );
}
