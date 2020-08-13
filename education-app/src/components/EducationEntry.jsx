import React from 'react';
import { EducationEntryView } from './styled-components/MainComponents';

const EducationEntry = ({ education }) => {
  return (
    <EducationEntryView>{education.schoolName}</EducationEntryView>
  );
};

export default EducationEntry;