import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import homePage from './screens/homePage';
import settings from './screens/settings';
import gameScreen from './screens/gameScreen';
import Provider from './context/provider';
import { legacy_createStore } from 'redux';
import reducers from './context/reducers';
import store from './context/store';

const Stack = createNativeStackNavigator();

export default Router=()=>{
  return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName = "HomePage">
        <Stack.Screen 
          name='HomePage'
          component={homePage} 
          options={{headerShown : false}} 
        />
        <Stack.Screen
          name='Settings'
          component={settings}
          options = {{headerShown:false}}
        />
        <Stack.Screen
          name='GameScreen'
          component={gameScreen}
          options = {{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}