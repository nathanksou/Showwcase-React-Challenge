import React from 'react';
import { Wrapper } from './styled-components/Components';
import { SidePanelView } from './styled-components/MainComponents';
import SidePanelEntry from './SidePanelEntry';

const SidePanel = ({ educations }) => {
  return (
    <SidePanelView>
      {(educations.length > 0) ? (
        educations.map(education => <SidePanelEntry education={education} />)
      ) : (
        <Wrapper>No education experience</Wrapper>
      )}
    </SidePanelView>
  );
};

export default SidePanel;