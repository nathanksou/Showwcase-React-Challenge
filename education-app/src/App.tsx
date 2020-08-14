import React, { useState } from 'react';
import Home from './components/Home/index';
import Main from './components/Main/index';

function App() {
  const [name, setName] = useState('Nate');

  return (
    <div>
      {name ? (
        <Main name={name} />
      ) : (
        <Home setName={setName} />
      )}
    </div>
  );
}

export default App;
