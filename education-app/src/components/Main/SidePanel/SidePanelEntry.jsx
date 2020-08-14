import React from 'react';
import { EducationEntryView } from '../MainComponents';

const SidePanelEntry = ({ education }) => {
  return (
    <EducationEntryView>{education.schoolName}</EducationEntryView>
  );
};

export default SidePanelEntry;