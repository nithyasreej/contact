import React from 'react';
import Form from './components/Form';
import Org from './components/Org'
import Logo from './Logo';
const App = () => {
  return (
    <div>
      <Logo />
      <div className='container'>
      <Org/>
      <Form/>
      </div>
     
    </div>
  );
};

export default App;

