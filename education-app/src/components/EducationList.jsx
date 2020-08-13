import React from 'react';
import { EducationListView, EducationEntryView } from './styled-components/MainComponents';

const EducationList = (props) => {
  return (
    <EducationListView>
      {(props.experiences.length > 0) ? (
        props.experiences.map((educationExperience) =>
          <EducationEntryView>Education Experience</EducationEntryView>
        )
      ) : (
        <div>No education experience</div>
      )}
    </EducationListView>
  );
};

export default EducationList;