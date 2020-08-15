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
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: #2a9d8f;
`;

export const MainBody = styled.div`
  width: 100%;
  flex: 9;
  display: flex;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
`;
