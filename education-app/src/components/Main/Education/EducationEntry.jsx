import React from 'react';
import { EntryContainer, Title, YearGrade, Description} from './styledComponents';

const EducationEntry = ({ education: { schoolName, degree, fieldOfStudy, startYear, endYear, grade, description }}) => {
  return (
    <EntryContainer>
      <Title>{`${degree} ${fieldOfStudy} @ ${schoolName}`}</Title>
      <YearGrade>
        <div>{`${startYear} - ${endYear}`}</div>
        <div>{`${grade} GPA`}</div>
      </YearGrade>
      <Description>{`${description}`}</Description>
    </EntryContainer>
  );
};

export default EducationEntry;