import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


export const ExitIcon = styled(MaterialCommunityIcons).attrs(props=>({
    name: "exit-to-app",
    size: 24,
    color: props.theme.colors.gray002
}))`
`;

export const IconText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 100;
  color: ${({theme})=> theme.colors.gray002};
`;