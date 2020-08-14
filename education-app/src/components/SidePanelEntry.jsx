import React from 'react';
import { EducationEntryView } from './styled-components/MainComponents';

const SidePanelEntry = ({ education }) => {
  return (
    <EducationEntryView>{education.schoolName}</EducationEntryView>
  );
};

export default SidePanelEntry;