import React, { useContext, useEffect, useState } from 'react';
import { Alert, Image, View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { useAppSelector } from '../../hooks/redux';
import useQuote from '../../hooks/useQuote';
import api from '../../services/api';
import { getQuote } from '../../services/getQuote';
import { RootState } from '../../store/reducers';
import { IFavorite } from '../../store/reducers/favorites';
import StyledQuoteDetails from '../StyledQuoteDetails';

import { Container, Graph, HorizontalView, QuoteContainer, QuoteName, QuoteSymbol, RemoveIcon, RemoveIconContainer, VerticalView } from './styles';

interface IStyledQuoteBox {
   quote: IFavorite
}

interface IQuote {
   symbol: string
   companyName: string
   changePercent: number
   latestPrice: number
 }
 

const StyledQuoteBox: React.FC<{symbol: string, onPress(): void}> = ({symbol, onPress}) => {

  
   const [quoteData, setQuoteData] = useState<IQuote>()

   
   
   
   const lastUpdate: IFavorite = useAppSelector((state: RootState) => state.favorites);

   const theme = useContext(ThemeContext)


   useEffect(()=> {


      async function getData() {
        console.log('call')
          try {
              const response = await getQuote(symbol)

              setQuoteData(response)
          } catch (error) {
              Alert.alert('Houve um erro Interno, Que tal tomar uma café e voltar daqui a pouco')
          }
      }


      getData()
   },[lastUpdate.lastUpdate])


   let isUp = true;
   if(quoteData?.changePercent >= 0) {
    isUp = true
   }else {
    isUp = false
   }



  return <Container>
  
     <QuoteContainer>
       <VerticalView>
         <StyledQuoteDetails
         quoteName={quoteData?.companyName}
         quoteSymbol={quoteData?.symbol}
         />
       </VerticalView>
       
       
        <HorizontalView style={{ justifyContent: 'flex-end'}}>
         <QuoteSymbol 
         style={{
           color: isUp ? theme.colors.sucess : theme.colors.danger
         }}>{isUp && '+'}{quoteData?.changePercent.toFixed(3)}%</QuoteSymbol>
         <Graph source={isUp}/>
         </HorizontalView>
     </QuoteContainer>
  </Container>
}

export default StyledQuoteBox;