import React, { useState } from 'react';
import { MainPage, MainHeader, MainBody } from './styled-components/MainComponents';

const Main = (props) => {

  return (
    <MainPage>
      <MainHeader>
        <div>{props.name}</div>
      </MainHeader>
      <MainBody>
        <div>Body</div>
      </MainBody>
    </MainPage>
  );
};

export default Main;
