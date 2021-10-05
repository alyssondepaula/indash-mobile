import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(35)}px;
   height: ${RFValue(35)}px;
   position: absolute;
   bottom:  ${RFValue(0)}px;
   right:  ${RFValue(1)}px;
   border-radius: ${RFValue(30)}px;
   background-color: ${({theme})=> theme.colors.gray002};
   border: ${RFValue(2)}px;
   border-color: ${({theme})=> theme.colors.white};
   z-index: 10;
   align-items: center;
   justify-content: center;
`;

export const Camera = styled(FontAwesome5).attrs(props=>({
    name: "camera",
    size: 18,
    color: props.theme.colors.white
}))`
`;