import React from 'react';
import { Wrapper } from '../../Components';
import { EducationListView } from '../MainComponents';
import EducationEntry from './EducationEntry';

const EducationList = ({ educations }) => {
  return (
    <EducationListView>
      {(educations.length > 0) ? (
        educations.map(education => <EducationEntry education={education} />)
      ) : (
        <Wrapper>No education experience</Wrapper>
      )}
    </EducationListView>
  );
};

export default EducationList;