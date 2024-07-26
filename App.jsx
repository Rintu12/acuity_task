import 'react-native-gesture-handler';
import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, View ,Text} from 'react-native';
import BottomTabNavigationIndex from './navigation';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {

  return (
<GestureHandlerRootView style={{flex:1}}>
  <NavigationContainer>
  <BottomTabNavigationIndex/>

  </NavigationContainer>
   </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
