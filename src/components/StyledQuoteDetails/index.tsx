import React from 'react';
import { View } from 'react-native';

import { Container, QuoteName, QuoteSymbol } from './styles';

interface IStyledQuoteDetails {
    quoteName: string | undefined
    quoteSymbol: string | undefined
}

const StyledQuoteDetails: React.FC<IStyledQuoteDetails> = ({quoteName,quoteSymbol}) => {
  return <Container>
      <QuoteName>{quoteName}</QuoteName>
      <QuoteSymbol>{quoteSymbol}</QuoteSymbol>
  </Container>
}

export default StyledQuoteDetails;