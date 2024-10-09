import React, { useEffect } from 'react'
import { Stack } from 'expo-router/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text } from 'react-native';

const RootLayout = () => {
  SplashScreen.preventAutoHideAsync();
  
  const [loaded, error] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf")
  });

  useEffect(()=>{
    if(loaded || error ){
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if(loaded){
    return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      </Stack>
      
    )
  }
  return(<View><Text>Thrive</Text></View>)
  
}

export default RootLayout