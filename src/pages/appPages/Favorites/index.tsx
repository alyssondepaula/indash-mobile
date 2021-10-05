import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import StyledButton from '../../../components/StyledButton';
import StyledQuoteBox from '../../../components/StyledQuoteBox';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { RootState } from '../../../store/reducers';
import { IFavorite, IQuote } from '../../../store/reducers/favorites';
import { useWindowDimensions } from 'react-native';




import { Container, HeadingText, HorizontalView, RemoveIcon, RemoveIconContainer, StatusBar, SubHeading } from './styles';
import StyledUpdateButton from '../../../components/styledUpdateButton';
import { delFavorite, updateLastPrice } from '../../../store/actions/favorites';


const Favorites: React.FC = () => {

  const windowWidth = useWindowDimensions().width;

  const favorites: IFavorite = useAppSelector((state: RootState) => state.favorites);

  const dispatch = useAppDispatch();

  const updatePrice = () => {
    dispatch(updateLastPrice())
  }

  const removeFavorite = (symbol: string) => {
    dispatch(delFavorite(symbol))
  }

  useEffect(()=>{
    updatePrice()
  },[])



  return <Container>
      <HeadingText>Minhas Ações Favoritas:</HeadingText>
      <SubHeading>Ultima atualização: {favorites.lastUpdate}</SubHeading>
      <FlatList
       contentContainerStyle={{
           width: windowWidth-50,
           alignItems: 'center',
           marginTop: '10%'
       }}
       data={favorites.data}
       keyExtractor={item => item.symbol}
       renderItem={({ item }) => {
           return <HorizontalView>
           
           <StyledQuoteBox 
           symbol={item.symbol} 
           onPress={()=>removeFavorite(item.symbol)}
           />
           <RemoveIconContainer onPress={()=>removeFavorite(item.symbol)}>
           <RemoveIcon />
           </RemoveIconContainer>
           </HorizontalView>
       }}

      
      />

      <StyledUpdateButton buttonText={'Atualizar ações'} onPress={()=> updatePrice()} />
      <StatusBar/>
  </Container>
}

export default Favorites;