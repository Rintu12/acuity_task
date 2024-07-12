import 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Image, StyleSheet, View } from 'react-native';
import config from './config';
import Background from './assets/bg2.png';
import Background2 from './assets/Wallpaper2.png';
import NavigationIndex from './navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
 const [user_id , setuserid] =  useState(null)
  //  let KEY = config.API_KEY
  function checkUserLoggedin(){
 AsyncStorage.getItem('user_id').then((data) =>{
  if(data !== null) {
    console.log(data,'loggg')
  setuserid(data)
  }else{
    setuserid(null)
  }
 })
  }


  useEffect(() =>{
 checkUserLoggedin()
  },[])
  return (
<GestureHandlerRootView style={{flex:1}}>
   <NavigationIndex  user_id={user_id} />
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
