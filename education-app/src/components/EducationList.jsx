import React from 'react';
import { Wrapper } from './styled-components/Components';
import { EducationListView } from './styled-components/MainComponents';
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