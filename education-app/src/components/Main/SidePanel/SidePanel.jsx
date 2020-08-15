import React from 'react';
import { ListContainer } from './styledComponents';
import SidePanelEntry from './SidePanelEntry';

const SidePanel = ({ educations }) => {
  return (
    <ListContainer>
      {(educations.length > 0) ? (
        educations.map(education => <SidePanelEntry education={education} />)
      ) : (
        <div></div>
      )}
    </ListContainer>
  );
};

export default SidePanel;