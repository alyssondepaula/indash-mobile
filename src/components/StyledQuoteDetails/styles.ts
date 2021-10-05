import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex-direction: column;
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