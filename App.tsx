import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Home, Onboarding } from './src/pages';


const Stack = createNativeStackNavigator();

function App() {

  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@alreadyLaunched')
  //     if(value === null) {
  //       AsyncStorage.setItem('@alreadyLaunched', 'true')
  //       setIsFirstLaunch(true)
  //     } else {
  //       setIsFirstLaunch(false)
  //     }
  //   } catch(e) {
  //     console.log(e)
  //   }
  // }

  useEffect(() => {

    async function firstLaunched() {
      await AsyncStorage.getItem('@alreadyLaunched').then((value) => {
        if(value === null) {
          AsyncStorage.setItem('@alreadyLaunched', 'true')
          setIsFirstLaunch(true)
        } else {
          setIsFirstLaunch(false)
        }
      });
    }
    
  },[]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isFirstLaunch && (
          <Stack.Screen 
            options={{headerShown: false}} 
            name="Onboarding" 
            component={Onboarding} 
          />
        )}
        <Stack.Screen 
          options={{headerShown: false}} 
          name="Home" 
          component={Home} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;