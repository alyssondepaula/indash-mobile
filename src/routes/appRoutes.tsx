import React, { useContext } from 'react';
import { Alert, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>App Screen</Text>
    </View>
  );
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/appPages/Home';
import Favorites from '../pages/appPages/Favorites';
import Account from '../pages/appPages/Account';
import { ThemeContext } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import StyledExitIcon from '../components/StyledExitIcon';
import { Entypo, Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const Tabs: React.FC = () => {

  const theme = useContext(ThemeContext);


  return  <Tab.Navigator 
              screenOptions={{ 
                  headerShown: false,
                  tabBarHideOnKeyboard: true,
                  tabBarStyle: {
                      backgroundColor: theme.colors.white,
                      height: RFValue(60),
                      paddingBottom: RFValue(10),
                      paddingTop: RFValue(10),
                  },
                  tabBarActiveTintColor: theme.colors.primary,
                  tabBarInactiveTintColor: theme.colors.gray002,
                  
                }} 
              initialRouteName='home'>
            <Tab.Screen 
            name='Home' 
            component={Home} 
            options={{
                title: 'Dashboard',
                tabBarIcon: ({color,size}) => {
                  return <Entypo name="line-graph" size={size} color={color} />
                }
            }}

            
            />
            <Tab.Screen name="Favorites" 
            component={Favorites} 
            options={{
              title: 'Favoritas',
              tabBarIcon: ({color,size}) => {
                return <Feather name="star" size={size} color={color} />
              }
          }}
            
            />
            <Tab.Screen 
            name="Account" 
            component={Account} 
            options={{
                headerTitle: '',
                title: 'Configurações',
                headerShown: true,
                tabBarIcon: ({color,size}) => {
                  return <Feather name="settings" size={size} color={color} />
                },
                headerRight: () => {
                    return <StyledExitIcon onPress={()=>Alert.alert('Deslogar')}/>
                },
                headerRightContainerStyle: {
                    alignItems: 'flex-end',
                    paddingRight: RFValue(20),
                }
            }}
            />
          </Tab.Navigator>
}

const AppRoutes: React.FC = () => {
  return <Stack.Navigator initialRouteName='tabs'>
  <Stack.Screen 
  name='tabs' 
  component={Tabs} 
  options={{
    headerShown: false
  }}
  />
</Stack.Navigator>
}

export default AppRoutes;