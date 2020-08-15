import React from 'react';
import { SidePanelView } from '../styledComponents';
import SidePanelEntry from './SidePanelEntry';

const SidePanel = ({ educations }) => {
  return (
    <SidePanelView>
      {(educations.length > 0) ? (
        educations.map(education => <SidePanelEntry education={education} />)
      ) : (
        <div></div>
      )}
    </SidePanelView>
  );
};

export default SidePanel;