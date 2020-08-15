import React from 'react';
import { ListContainer } from './styledComponents';
import EducationEntry from './EducationEntry';

const EducationList = ({ educations }) => {
  return (
    <ListContainer>
      {(educations.length > 0) ? (
        educations.map(education => <EducationEntry education={education} />)
      ) : (
        <div>No education experience</div>
      )}
    </ListContainer>
  );
};

export default EducationList;