import styled from 'styled-components';

export const HomePage = styled.div`
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

export const HomeContainer = styled.div`
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
`;

export const HomeHeader = styled.div`
  flex: 1;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HomeBody = styled.div`
  flex: 1;
  width: 50%;
  display: flex;
  flex-direction: column;
`;