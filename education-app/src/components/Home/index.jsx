import React, { useState } from 'react';
import './home.css';

const Home = ({ setName }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(input);
    resetForm();
  };

  const resetForm = () => {
    setInput('');
    document.getElementById('name-form').reset();
  }

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-title">Hi there! Welcome to your education showcase.</div>
        <form id="name-form" onSubmit={handleSubmit}>
          <label>Type your name and click "Enter" below to begin!</label>
          <input type="text" name="name" required onChange={(event) => setInput(event.target.value)} />
          <input type="submit" value="Enter" />
        </form>
      </div>
    </div>
  );
};

export default Home;
