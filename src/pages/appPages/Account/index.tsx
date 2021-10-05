import React from 'react';
import { Alert } from 'react-native';
import StyledButton from '../../../components/StyledButton'
import IconCamera from './components/IconCamera';

import { Avatar, AvatarContainer, Camera, Container, HeadingText, OptionContainer } from './styles';

const Account: React.FC = () => {
  return <Container>
      <AvatarContainer>
          <Avatar/>
          <IconCamera/>
      </AvatarContainer>
      <HeadingText>João da Silva Almeida Magalhães</HeadingText>
      <OptionContainer>
      <StyledButton buttonText={'Perfil'} onPress={()=> Alert.alert('Perfil')}/>
      <StyledButton buttonText={'Notificações'}onPress={()=> Alert.alert('Notificações')}/>
      <StyledButton buttonText={'Privacidade e segurança'} onPress={()=> Alert.alert('Privacidade e segurança')}/>
      <StyledButton buttonText={'Suporte'}onPress={()=> Alert.alert('Suporte')}/>
      <StyledButton buttonText={'Configuações Gerais'} onPress={()=> Alert.alert('Configuações Gerais')}/>
      </OptionContainer>
  </Container>;
}

export default Account;