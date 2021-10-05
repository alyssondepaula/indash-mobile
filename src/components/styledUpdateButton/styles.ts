import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs(({
    elevation: 4
}))`
  position: absolute;
  bottom: ${RFValue(20)}px;
  right: ${RFValue(20)}px;
  min-width: ${RFValue(80)}px;
  height: ${RFValue(50)}px;
  background-color: ${({theme})=> theme.colors.primary};
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
  padding:  ${RFValue(2)}px  ${RFValue(10)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: bold;
  color: ${({theme})=> theme.colors.white};
`;