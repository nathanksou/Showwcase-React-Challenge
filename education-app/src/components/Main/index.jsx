import React, { useState } from 'react';
import { MainPage, MainHeader, MainBody, Title } from './styledComponents';
import Button from '@material-ui/core/Button';
import EducationModal from './Education/EducationModal';
import EducationList from './Education/EducationList';
import SidePanel from './SidePanel/SidePanel';

const Main = ({ name }) => {
  const [educations, setEducations] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleEducationsUpdate = (education) => {
    if (education.schoolName !== '') setEducations(educations => [education, ...educations]);
    handleCloseModal();
  };

  return (
    <MainPage>
      <EducationModal isOpen={showModal} handleEducationsUpdate={handleEducationsUpdate} />
      <MainHeader>
        <Title>Welcome to {name}'s education page!</Title>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>Add new education</Button>
      </MainHeader>
      <MainBody>
        <SidePanel educations={educations} />
        <EducationList educations={educations} />
      </MainBody>
    </MainPage>
  );
};

export default Main;
