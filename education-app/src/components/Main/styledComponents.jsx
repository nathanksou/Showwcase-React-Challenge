import styled from 'styled-components';

export const MainPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  color: black;
  font-size: calc(10px + 2vmin);
`;

export const MainHeader = styled.div`
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #aaa;
`;

export const MainBody = styled.div`
  width: 100%;
  flex: 9;
  display: flex;
`;

export const SidePanelView = styled.div`
  flex: 1;
  margin: 1em;
  border: 2px dashed #2a9d8f;
  border-radius: 5px;
`;
