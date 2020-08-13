import React, { useState } from 'react';
import { Wrapper, Button } from './styled-components/Components';
import { MainPage, MainHeader, MainBody, SidePanel } from './styled-components/MainComponents';
import EducationList from './EducationList';

const Main = ({ name }) => {
  const [educations, setEducations] = useState([{ schoolName: 'UC Irvine', degree: 'Bachelors', fieldOfStudy: 'Computer Science', startYear: 2014, endYear: 2019, grade: 3.8, description: "" }, { schoolName: 'UC San Diego', degree: 'Bachelors', fieldOfStudy: 'Computer Science', startYear: 2014, endYear: 2019, grade: 3.8, description: "" }, { schoolName: 'UCLA', degree: 'Bachelors', fieldOfStudy: 'Computer Science', startYear: 2014, endYear: 2019, grade: 3.8, description: "" }]);
  return (
    <MainPage>
      <MainHeader>
        <Wrapper>Welcome to {name}'s education page!</Wrapper>
        <Wrapper><Button>Add new education</Button></Wrapper>
      </MainHeader>
      <MainBody>
        <SidePanel>Side</SidePanel>
        <EducationList educations={educations} />
      </MainBody>
    </MainPage>
  );
};

export default Main;
