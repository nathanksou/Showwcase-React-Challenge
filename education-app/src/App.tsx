import React, { useState } from 'react';
import Home from './components/Home';
import Main from './components/Main';

function App() {
  const [name, setName] = useState('nate');

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
