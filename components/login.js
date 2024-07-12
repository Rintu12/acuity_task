import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
// import {useRef,useMemo} from 'react';
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';
// import { baseurl } from "../apiBaseUrl"
// import Background from '../assets/bg2.png';
import { ImageBackground, StyleSheet, View, Text, Dimensions, SafeAreaView, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { baseUrl } from '../apiBaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Login({navigation}) {
  const bottomSheetRef = React.useRef < BottomSheet > (null);
  const [loginData, setLoginData] = useState({
    "email": '',
    "password": ''


  })
  const [checkValidation, setCheckvalidation] = useState(false)
  const [loading, setLoading] = useState(false)
  function loginUser() {
    console.log(JSON.stringify(loginData))
    setLoading(true)
    if (loginData.email === '' && loginData.password === '') {
      setCheckvalidation(true)
      setLoading(false)
      return
    }
    fetch(`${baseUrl}/user-login`, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        'apiKey': 'hidromas-we-app-01~c^Dt0Oc32'
      },
      body: JSON.stringify(loginData),
    }).then((res) => res.json()).then((data) => {
      setLoading(false)
      if(data.msg === 'Success'){
        console.log(data.data.msg,'message..')
        AsyncStorage.setItem('user_id',data.data.user_id.toString())
        navigation.navigate('Dashboard')
        
      }
      console.log(data)
    }).catch((er) => {
      setLoading(false)
      

      console.log(er)
    })
  }


  // variables
  const snapPoints = React.useMemo(() => ['25%', '60%'], []);
  return (
    <>

      <SafeAreaView style={{ height: Dimensions.get('screen').height }}>
        <ImageBackground blurRadius={30} source={require('../assets/bg2.png')} style={styles.background}>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: Dimensions.get('screen').height * 0.1 }}>
            <Image source={require('../assets/Logo.png')} style={{
              resizeMode: 'contain',
              width: '70%',
            }}

            />
          </View>

          <BottomSheet
            // ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            keyboardBehavior="fillParent"
          >
            {
              loading ? <ActivityIndicator size='large' color='#0000ff' /> : null

            }

            <View style={{ display: "flex", flexDirection: 'column', padding: 10 }}>
              <Text>UserName</Text>
              <TextInput
                placeholder='UserName'
                value={loginData.email}
                onChangeText={(e) => setLoginData({ ...loginData, email: e })}
                style={{
                  color: "#111",
                  borderColor: 'gray',
                  borderWidth: 2,
                  // opacity:'70%',
                  padding: 0,
                  // fontFamily: fonts.primaryBold,
                  fontSize: 15,
                  fontWeight: "600",
                  width: '100%',
                  borderRadius: 4,
                  // textAlign:'center'
                  // backgroundColor:'green',
                  padding: 10,
                  // paddingLeft: 5,
                  height: 50

                }}
              >

              </TextInput>
              <Text style={{ color: 'red' }}>{checkValidation && loginData.email === '' ? 'Email is Required' : null}</Text>
            </View>
            <View style={{ padding: 10 }}>
              <Text>Password</Text>
              <TextInput

                placeholder='Password'
                value={loginData.password}
                onChangeText={(e) => setLoginData({ ...loginData, password: e })}
                style={{
                  color: "#111",
                  borderColor: 'gray',
                  borderWidth: 2,
                  padding: 0,
                  // fontFamily: fonts.primaryBold,
                  fontSize: 15,
                  fontWeight: "600",
                  width: '100%',
                  borderRadius: 4,
                  // textAlign:'center'
                  // backgroundColor:'green',
                  padding: 10,
                  // paddingLeft: 5,
                  height: 50

                }}>

              </TextInput>
              <Text style={{ color: 'red' }}>{checkValidation && loginData.password === '' ? 'Password is Required' : null}</Text>

            </View>
            <View style={{ padding: 10 }}>
              <TouchableOpacity
                style={{ width: '100%', height: 50, backgroundColor: '#0b73aa', justifyContent: 'center', alignItems: 'center', borderRadius: 3 }}
                onPress={loginUser}
              >
                <View><Text>SIGN IN </Text></View>
              </TouchableOpacity>
            </View>


          </BottomSheet>
          {/* <View style={{ marginTop: Dimensions.get('screen').height * 0.3 }}>
            <View style={{ display: "flex", flexDirection: 'column', padding: 10 }}>
              <Text>UserName</Text>
              <TextInput
                placeholder='UserName'
                style={{
                  color: "#111",
                  borderColor: 'green',
                  borderWidth: 1,
                  padding: 0,
                  // fontFamily: fonts.primaryBold,
                  fontSize: 15,
                  fontWeight: "600",
                  width: '100%',
                  borderRadius: 4,
                  // textAlign:'center'
                  // backgroundColor:'green',
                  padding: 10,
                  // paddingLeft: 5,
                  height: 50

                }}
              >

              </TextInput>
            </View>
            <View style={{ padding: 10 }}>
              <Text>Password</Text>
              <TextInput

                placeholder='Password'
                style={{
                  color: "#111",
                  borderColor: 'green',
                  borderWidth: 1,
                  padding: 0,
                  // fontFamily: fonts.primaryBold,
                  fontSize: 15,
                  fontWeight: "600",
                  width: '100%',
                  borderRadius: 4,
                  // textAlign:'center'
                  // backgroundColor:'green',
                  padding: 10,
                  // paddingLeft: 5,
                  height: 50

                }}>

              </TextInput>
            </View>
            <View style={{ padding: 10 }}>
              <TouchableOpacity
                style={{ width: '100%', height: 50, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 3 }}
              >
                <View><Text>SIGN IN </Text></View>
              </TouchableOpacity>
            </View>
          </View> */}

        </ImageBackground>
      </SafeAreaView>
    </>
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
    display: "flex",
    // justifyContent:'center',
    // alignItems:'center'

    // backgroundColor: 'red'
  },
});