import { Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import graphup from '../../assets/graphup.png'
import graphdown from '../../assets/graphdown.png'
import trash from '../../assets/trash.png'



export const Container = styled(Pressable)`

  width:  100%;
  height: ${RFValue(90)}px;
  margin-bottom: ${RFValue(5)}px;
  flex-direction: row;
  justify-content: center;
`;

export const QuoteContainer = styled(Pressable).attrs({
  elevation: 4
})`

flex: 1;
border-radius: ${RFValue(10)}px;
background-color: ${({theme})=> theme.colors.white};
margin-bottom: ${RFValue(10)}px;

flex-direction: row;
padding: ${RFValue(10)}px ${RFValue(20)}px;
justify-content: space-between;
`;

export const VerticalView = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const HorizontalView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const QuoteName = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({theme})=> theme.colors.gray003};
`;

export const QuoteSymbol = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: bold;
  color: ${({theme})=> theme.colors.gray002};
`;

export const Graph = styled.Image.attrs(props=>({
  source: props.source ? graphup : graphdown,
  resizeMode: 'contain'

}))<{source: boolean}>`
 width: ${RFValue(15)}px;
 height: ${RFValue(15)}px;
 z-index: 10;

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