import { Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity.attrs({
   
})`
  width: 100%;
  height: ${RFValue(60)}px;
  flex-direction: row;
  
  border-bottom-width: ${RFValue(2)}px;
  border-bottom-color: #d3d3d3;
  border-radius: ${RFValue(2)}px;
  margin-top: ${RFValue(4)}px;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(4)}px ${RFValue(10)}px ${RFValue(4)}px ${RFValue(20)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 100;
  color: ${({theme})=> theme.colors.gray002};
`;

export const ChevronRight = styled(Feather).attrs(props=>({
    name: "chevron-right",
    size: 24,
    color: props.theme.colors.gray002
}))`
`;
