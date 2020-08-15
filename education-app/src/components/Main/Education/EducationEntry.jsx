import React from 'react';
import { EntryContainer, Title, YearGrade, Description} from './styledComponents';

const EducationEntry = ({ education: { schoolName, degree, fieldOfStudy, startYear, endYear, grade, description }}) => {
  return (
    <EntryContainer>
      <Title>{`${degree} ${fieldOfStudy} @ ${schoolName}`}</Title>
      <YearGrade>
        {startYear ? (<div>{`${startYear} - ${endYear}`}</div>) : (<div></div>)}
        {grade ? (<div>{`${grade} GPA`}</div>) : (<div></div>)}
      </YearGrade>
      <Description>{`${description}`}</Description>
    </EntryContainer>
  );
};

export default EducationEntry;