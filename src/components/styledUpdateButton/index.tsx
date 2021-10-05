import React from 'react';
import { View } from 'react-native';

import { ButtonText, Container } from './styles';

interface IStyledUpdateButtonProps {
    buttonText: string;
    onPress(): void;
}

const StyledUpdateButton: React.FC<IStyledUpdateButtonProps> = ({buttonText,onPress}) => {
  return <Container onPress={onPress}>
      <ButtonText>{buttonText}</ButtonText>
  </Container>
}

export default StyledUpdateButton;