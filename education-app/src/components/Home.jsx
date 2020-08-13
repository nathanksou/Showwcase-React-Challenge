import React from 'react';
import { Button, Input } from './styles/Components';
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
          <Input defaultValue="Your name" type="text" inputColor="rebeccapurple" />
        </div>
        <Button>Enter</Button>
      </div>
    </HomePage>
  );
};

export default Home;
