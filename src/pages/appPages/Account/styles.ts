import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import avatar from '../../../assets/avatar.png'


export const StatusBar = styled.StatusBar.attrs(props=>({
    animated: true,
    barStyle: props.theme.isDark ? 'light-content' : 'dark-content',
    backgroundColor: props.theme.colors.white
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
  align-self: center;
`;

export const AvatarContainer = styled.View`
   width: ${RFValue(120)}px;
   height: ${RFValue(120)}px;
   background-color: ${({theme})=> theme.colors.primary};
   border-radius: ${RFValue(60)}px;

   align-self: center;

   border:  ${RFValue(4)}px;
   
   border-color: ${({theme})=> theme.colors.gray002};
   margin-bottom:  ${RFValue(20)}px;
   align-items: center;
   justify-content: center;
`;

export const Avatar = styled.Image.attrs(({
    source: avatar,
    resizeMode: 'cover'
}))`
   width: ${RFValue(120)}px;
   height: ${RFValue(120)}px;
`;

export const Camera = styled.Image.attrs(({
    source: avatar,
    resizeMode: 'contain'

}))`
   width: ${RFValue(30)}px;
   height: ${RFValue(30)}px;
   position: absolute;
   bottom:  ${RFValue(0)}px;
   right:  ${RFValue(1)}px;
   z-index: 10;
`;

export const OptionContainer = styled.View`
   flex: 1;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;