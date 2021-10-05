import React from 'react';
import { View } from 'react-native';

import { ButtonText, ChevronRight, Container } from './styles';

interface IStyledButtonProps {
    buttonText: string;
    onPress(): void;
}

const StyledButton: React.FC<IStyledButtonProps> = ({buttonText, onPress}) => {
  return <Container onPress={onPress}>
      <ButtonText>{buttonText}</ButtonText>
      <ChevronRight/>
  </Container>;
}

export default StyledButton;