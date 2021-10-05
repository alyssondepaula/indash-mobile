import React from 'react';
import { View } from 'react-native';

import { Container, ExitIcon, IconText } from './styles';

interface IStyledExitIcon {
    onPress(): void
}

const StyledExitIcon: React.FC<IStyledExitIcon> = ({onPress}) => {
  return <Container onPress={onPress}>
      <IconText>Sair</IconText>
      <ExitIcon/>
  </Container>;
}

export default StyledExitIcon;