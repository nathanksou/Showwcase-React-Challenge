import React, { useState } from 'react';
import Home from './components/Home';

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      { name ? (
        <div>Logged In</div>
      ) : (
        <Home setName={setName} />
      )}
    </div>
  );
}

export default App;
