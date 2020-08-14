import React from 'react';
import { Wrapper } from '../../Components';
import { SidePanelView } from '../MainComponents';
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