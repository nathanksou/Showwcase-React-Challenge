import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import Select from 'react-select';
import { Wrapper, Button } from './styled-components/Components';
import { MainPage, MainHeader, MainBody, SidePanel } from './styled-components/MainComponents';
import EducationModal from './EducationModal';
import EducationList from './EducationList';

const Main = ({ name }) => {
  const [educations, setEducations] = useState([{ schoolName: 'UC Irvine', degree: 'Bachelors', fieldOfStudy: 'Computer Science', startYear: 2014, endYear: 2019, grade: 3.8, description: "" }, { schoolName: 'UC San Diego', degree: 'Bachelors', fieldOfStudy: 'Computer Science', startYear: 2014, endYear: 2019, grade: 3.8, description: "" }, { schoolName: 'UCLA', degree: 'Bachelors', fieldOfStudy: 'Computer Science', startYear: 2014, endYear: 2019, grade: 3.8, description: "" }]);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [schools, setSchools] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  const handleEducationsUpdate = (education) => {
    if (education.schoolName !== '') {
      setEducations(educations => [education, ...educations]);
    }
    handleCloseModal();
  };

  return (
    <MainPage>
      <MainHeader>
        <Wrapper>Welcome to {name}'s education page!</Wrapper>
        <Wrapper>
          <Button onClick={handleOpenModal}>Add new education</Button>
        </Wrapper>
        <ReactModal
          isOpen={showModal}
          contentLabel="Add Education Experience"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)'
            },
            content: {
              top: '100px',
              left: '100px',
              right: '100px',
              bottom: '100px'
            }
          }}
        >
          <EducationModal handleEducationsUpdate={handleEducationsUpdate} />
          <Select options={options} />
        </ReactModal>
      </MainHeader>
      <MainBody>
        <SidePanel>Side</SidePanel>
        <EducationList educations={educations} />
      </MainBody>
    </MainPage>
  );
};

export default Main;
