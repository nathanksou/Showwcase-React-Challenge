import React from 'react';
import { Button } from './styles/Components';
import { HomePage } from './styles/HomeComponents';

const Home = (props) => {

  return (
    <HomePage>
      <div>Hi there! Welcome to your education showcase.</div>
      <div>
        <div>
          <label for="name">Type your name and click "Enter" below to begin!</label>
        </div>
        <div>
          <input type="text" id="name" name="name" required
        minlength="4"  size="30"></input>
        </div>
        <Button>Enter</Button>
      </div>
    </HomePage>
  );
};

export default Home;