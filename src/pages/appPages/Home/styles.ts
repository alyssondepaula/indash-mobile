import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import stats from '../../../assets/stats.png'

export const StatusBar = styled.StatusBar.attrs(props=>({
   animated: true,
   barStyle: props.theme.isDark ? 'light-content' : 'dark-content',
   backgroundColor: props.theme.colors.gray001
}))`
`;

export const Container = styled.View`
   flex: 1;
   flex-direction: column;
   background-color: ${({theme})=> theme.colors.gray001};
   padding: ${RFValue(40)}px ${RFValue(20)}px ${RFValue(0)}px ${RFValue(20)}px;
`;

export const VerticalView = styled.View`
  
  flex-direction: row;
  margin-top: ${RFValue(20)}px;
  align-items: center;
`;


export const HorizontalView = styled.View`
  
  flex-direction: row;
  margin-top: ${RFValue(20)}px;
  align-items: center;
`;

export const HeadingText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: ${({theme})=> theme.colors.gray003};
  
`;

export const Stats = styled.Image.attrs(({
   source: stats,
   resizeMode: 'cover'
}))`
  width: ${RFValue(16)}px;
  height: ${RFValue(16)}px;
  margin-right:${RFValue(16)}px;
`;