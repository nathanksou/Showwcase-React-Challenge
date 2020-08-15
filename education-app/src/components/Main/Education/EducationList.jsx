import React from 'react';
import { ListContainer } from './styledComponents';
import EducationEntry from './EducationEntry';

const EducationList = ({ educations }) => {
  return (
    <ListContainer>
      {(educations.length > 0) ? (
        educations.map(education => <EducationEntry education={education} />)
      ) : (
        <div style={{color: "#2a9d8f", marginTop: "1em"}}>No education experience</div>
      )}
    </ListContainer>
  );
};

export default EducationList;