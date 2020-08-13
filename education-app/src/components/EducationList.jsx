import React from 'react';
import { EducationListView } from './styled-components/MainComponents';
import EducationEntry from './EducationEntry';

const EducationList = ({ educations }) => {
  return (
    <EducationListView>
      {(educations.length > 0) ? (
        educations.map(education => <EducationEntry education={education} />)
      ) : (
        <div>No education experience</div>
      )}
    </EducationListView>
  );
};

export default EducationList;