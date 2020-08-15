import React from 'react';
import { EntryContainer } from './styledComponents';

const SidePanelEntry = ({ education: {schoolName}}) => {
  return (
    <EntryContainer>{schoolName}</EntryContainer>
  );
};

export default SidePanelEntry;