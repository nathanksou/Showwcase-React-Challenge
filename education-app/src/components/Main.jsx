import React, { useState } from 'react';
import { Wrapper, Button } from './styled-components/Components';
import { MainPage, MainHeader, MainBody, SidePanel, EducationList, EducationEntry } from './styled-components/MainComponents';

const Main = (props) => {
  const [educationExperiences, setEducationExperiences] = useState(['Education Experience 1', 'Education Experience 2', 'Education Experience 3']);

  return (
    <MainPage>
      <MainHeader>
        <Wrapper>Welcome to {props.name}'s education page!</Wrapper>
        <Wrapper><Button>Add new education</Button></Wrapper>
      </MainHeader>
      <MainBody>
        <SidePanel>Side</SidePanel>
        <EducationList>
          {educationExperiences.map((educationExperience) => {
            return <EducationEntry>Education Experience</EducationEntry>
          })}
        </EducationList>
      </MainBody>
    </MainPage>
  );
};

export default Main;
