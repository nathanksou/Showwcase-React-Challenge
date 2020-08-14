import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Wrapper, Button } from './styled-components/Components';
import { MainPage, MainHeader, MainBody, SidePanel } from './styled-components/MainComponents';
import EducationList from './EducationList';

const Main = ({ name }) => {
  const [educations, setEducations] = useState([{ schoolName: 'UC Irvine', degree: 'Bachelors', fieldOfStudy: 'Computer Science', startYear: 2014, endYear: 2019, grade: 3.8, description: "" }, { schoolName: 'UC San Diego', degree: 'Bachelors', fieldOfStudy: 'Computer Science', startYear: 2014, endYear: 2019, grade: 3.8, description: "" }, { schoolName: 'UCLA', degree: 'Bachelors', fieldOfStudy: 'Computer Science', startYear: 2014, endYear: 2019, grade: 3.8, description: "" }]);
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <MainPage>
      <MainHeader>
        <Wrapper>Welcome to {name}'s education page!</Wrapper>
        <Wrapper><Button>Add new education</Button></Wrapper>
        <div>
          <button onClick={handleOpenModal}>Trigger Modal</button>
          <ReactModal
            isOpen={showModal}
            contentLabel="Minimal Modal Example"
          >
            <button onClick={handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
      </MainHeader>
      <MainBody>
        <SidePanel>Side</SidePanel>
        <EducationList educations={educations} />
      </MainBody>
    </MainPage>
  );
};

export default Main;
