import React from 'react';
import { EntryContainer } from '../Education/styledComponents';

const SidePanelEntry = ({ education }) => {
  return (
    <EntryContainer>{education.schoolName}</EntryContainer>
  );
};

export default SidePanelEntry;