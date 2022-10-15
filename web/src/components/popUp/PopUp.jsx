import React from 'react';
import { Form } from '../Form';
import { ContainerPopUp, Content } from './styles';

export const PopUp = () => {
  return (
    <ContainerPopUp>
      <Content>
        <Form />
      </Content>
    </ContainerPopUp>
  );
};

export default PopUp;
