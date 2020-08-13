import React from 'react';
import { Button, Input } from './styles/Components';
import { HomePage, HomeContainer, HomeHeader, HomeBody } from './styles/HomeComponents';

const Home = (props) => {
  return (
    <HomePage>
      <HomeContainer>
        <HomeHeader>
          <div>Hi there! Welcome to your education showcase.</div>
        </HomeHeader>
        <HomeBody>
          <div>
            <label for="name">Type your name and click "Enter" below to begin!</label>
          </div>
          <div>
            <Input type="text" placeholder="Your name" required />
          </div>
          <div>
            <Button>Enter</Button>
          </div>
        </HomeBody>
      </HomeContainer>
    </HomePage>
  );
};

export default Home;
