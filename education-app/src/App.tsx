import React, { useState } from 'react';
import Home from './components/Home/Home';
import Main from './components/Main/Main';

function App() {
  const [name, setName] = useState('');

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
