import React from 'react';
import { EducationEntryView } from '../MainComponents';

const EducationEntry = ({ education }) => {
  return (
    <EducationEntryView>{education.schoolName}</EducationEntryView>
  );
};

export default EducationEntry;