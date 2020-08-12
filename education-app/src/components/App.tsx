import React from 'react';
import { AppDiv, AppHeader, Title, RotateAppLogo, AppLink } from './AppComponents';
import logo from '../logo.svg';

function App() {
  return (
    <AppDiv>
      <AppHeader>
        <RotateAppLogo src={logo} alt="logo"/>
        <Title>Hello</Title>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
      </AppHeader>
    </AppDiv>
  );
}

export default App;
