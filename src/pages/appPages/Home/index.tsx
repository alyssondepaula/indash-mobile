import React, { useContext, useEffect, useState } from 'react';
import { Alert, FlatList, useWindowDimensions } from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import { ThemeContext } from 'styled-components/native';
import StyledQuoteBox from '../../../components/StyledQuoteBox';
import StyledQuoteDetails from '../../../components/StyledQuoteDetails';
import { useAppSelector } from '../../../hooks/redux';
import api from '../../../services/api';
import { getQuote } from '../../../services/getQuote';
import { getQuoteChart } from '../../../services/getQuoteChart';
import { RootState } from '../../../store/reducers';
import { IFavorite } from '../../../store/reducers/favorites';
import { IQuoteRecents, IRecentsCompanies } from '../../../store/reducers/recentsCompanies';
import { renameKey } from '../../../utils/renameKey';
 import { Container, HeadingText, HorizontalView, Stats, StatusBar } from './styles';


 interface IQuote {
  symbol: string
  companyName: string
  changePercent: number
  latestPrice: number
}

interface IQuoteChart{

  minute: string
  close: string
  date: string

}

interface IQuoteChartFormated{

  x: string
  y: string
  date: string

}

const Home: React.FC = () => {

  const [quoteData, setQuoteData] = useState<IQuote>()

  const [quoteChartData, setQuoteChartData] = useState<IQuoteChart[]>()

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const recents: IQuoteRecents[] = useAppSelector((state: RootState) => state.recentsCompanies.data);


  const theme = useContext(ThemeContext);

  useEffect(()=> {


    async function getData() {
      console.log('call')
        try {
            const response = await getQuote('msft')

            setQuoteData(response)

            const responseChart = await getQuoteChart('msft', 30, '20211005')

           let objone = await renameKey(responseChart, 'minute', 'x')
           objone = await renameKey(responseChart, 'close', 'y')

           
           setQuoteChartData(responseChart);

        } catch (error) {
            Alert.alert('Houve um erro Interno, Que tal tomar uma café e voltar daqui a pouco')
        }
    }


    getData()
 },[])
  return <Container>
    <HorizontalView>
     <StyledQuoteDetails
     
      quoteName={quoteData?.companyName}
      quoteSymbol={quoteData?.symbol}
     />
     </HorizontalView>

<Chart
  style={{ height: windowHeight/4, width: windowWidth-50, alignSelf: 'center' }}
  data={[
    { x: -2, y: 15 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 1, y: 7 },
    { x: 2, y: 6 },
    { x: 3, y: 8 },
    { x: 4, y: 10 },
    { x: 5, y: 8 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 },
  ]}
  padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  xDomain={{ min: -2, max: 10 }}
  yDomain={{ min: 0, max: 20 }}
>
  <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
  <HorizontalAxis tickCount={5} />
  <Area theme={{ gradient: { from: { color: theme.colors.primary }, 
    to: { color: theme.colors.primary, opacity: 0.2 } }}} />

  <Line theme={{ stroke: { color: theme.colors.primary, width: 5 }, 
  
  scatter: { default: { width: 2, height: 2, rx: 2 }} }} />
</Chart>
<HorizontalView>
  <Stats/>
 <HeadingText>
   Empresas Recentes
 </HeadingText>
 </HorizontalView>
 <FlatList
       contentContainerStyle={{
           width: windowWidth-50,
           alignItems: 'center',
           marginTop: '10%',
       }}
       data={recents}
       keyExtractor={item => item.symbol}
       renderItem={({ item }) => {
           return <StyledQuoteBox 
           symbol={item.symbol} 
           onPress={()=>{}}
           />
       }}

      
      />
  <StatusBar/>
  </Container>;
}

export default Home;