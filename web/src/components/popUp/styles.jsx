import styled from 'styled-components';

export const ContainerPopUp = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  align-items: center;
  padding: 4%;
  height: auto;
  border: 10px solid #52b591;
  border-radius: 8px;
`;
