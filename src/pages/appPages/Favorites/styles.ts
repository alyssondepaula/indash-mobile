import { Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import trash from '../../../assets/trash.png'


export const StatusBar = styled.StatusBar.attrs(props=>({
    animated: true,
    barStyle: props.theme.isDark ? 'light-content' : 'dark-content',
    backgroundColor: props.theme.colors.gray001
}))`
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.gray001};
  padding: ${RFValue(40)}px ${RFValue(20)}px;
`;

export const HeadingText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: ${({theme})=> theme.colors.gray003};
`;

export const SubHeading = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  color: ${({theme})=> theme.colors.gray002};
`;

export const RemoveIconContainer = styled(Pressable)`
   align-items: center;
   justify-content: center;
`;

export const RemoveIcon = styled.Image.attrs(({
  source: trash,
  resizeMode: 'contain'

}))`
 width: ${RFValue(25)}px;
 height: ${RFValue(25)}px;
 align-self: center;
 margin-left:  ${RFValue(4)}px;

`;

export const HorizontalView = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;

`;