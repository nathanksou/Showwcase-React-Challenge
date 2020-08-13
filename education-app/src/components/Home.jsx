import React, { useState } from 'react';
import { Button, Input } from './styles/Components';
import { HomePage, HomeContainer, HomeHeader, HomeBody } from './styles/HomeComponents';

const Home = (props) => {
  const [text, setText] = useState('');

  const handleEnterButton = () => {
    props.setName(text);
    setText('');
    document.getElementById('inputName').value = '';
  };

  return (
    <HomePage>
      <HomeContainer>
        <HomeHeader>
          <div>Hi there! Welcome to your education showcase.</div>
        </HomeHeader>
        <HomeBody>
          <div>
            <label htmlFor="name">Type your name and click "Enter" below to begin!</label>
          </div>
          <div>
            <Input id='inputName' type="text" placeholder="Your name" onChange={(event) => setText(event.target.value)}/>
          </div>
          <div>
            <Button onClick={handleEnterButton}>Enter</Button>
          </div>
        </HomeBody>
      </HomeContainer>
    </HomePage>
  );
};

export default Home;
