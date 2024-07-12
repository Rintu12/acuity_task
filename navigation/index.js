import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/login';
import Homescreen from '../components/homeScreen';
import { Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Image, View, Text } from 'react-native';
import { baseUrl } from '../apiBaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  const [userDetails, setUserDetails] = React.useState({})
  function getUserDetails() {
    console.log('logee')
    fetch(`${baseUrl}/get-user`, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        'apiKey': 'hidromas-we-app-01~c^Dt0Oc32'
      },
      body: JSON.stringify({
        user_id: 79,
      }),
    }).then((res) => res.json()).then((data) => {
      console.log(data)
      setUserDetails(data.data[0])
    }).catch((er) => {
      console.log(er)
    })
  }
  React.useEffect(() => {
    getUserDetails()
  }, [])
  return (
    <>
      <View style={{
        //  backgroundColor: "red", 
        height: Dimensions.get('screen').height * 0.30,


      }}>
        <ImageBackground source={require('../assets/menu_bg_top.png')}
          style={{
            width: 300,
            flex: 1,
            zIndex: 111,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'

          }}

        >

          <View style={{
            flexDirection: 'row',

          }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={{ uri: `${userDetails.profile_image}` }}
                style={{
                  height: 80,
                  width: 80,
                  // backgroundColor:'red',
                  borderColor: 'white',
                  borderWidth: 3,
                  borderRadius: 10,

                }}
                alt='Photo'
              />
            </View>
            <View style={{ padding: 5 }}>
              <View >
                <Text style={{ color: 'white', fontSize: 20, marginLeft: 10 }}>{userDetails.username}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                {/* <View style={{width:10,height:10}}> */}
                <Image
                  source={require('../assets/Icon-call.png')}
                  style={{
                    // position:'relative',
                    width: 35,
                    height: 35

                  }}
                />
                <Text style={{
                  color: 'white', fontSize: 16, padding: 0,
                  // backgroundColor:'red',
                  // height:40,justifyContent:'flex-start',display:'flex'


                }}>{userDetails.phone}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                {/* <View style={{width:10,height:10}}> */}
                <Image
                  source={require('../assets/Icon-mail.png')}
                  style={{
                    // position:'relative',
                    width: 35,
                    height: 35

                  }}
                />
                <Text style={{
                  color: 'white', fontSize: 16, padding: 0,
                  // backgroundColor:'red'
                  // height:40,justifyContent:'flex-start',display:'flex'


                }}>{userDetails.email}</Text>
              </View>

            </View>
            {/* <View style={{
              borderColor:'white',borderWidth:2,borderRadius:2,
              height:100,width:100
              }}>

            </View> */}

          </View>

        </ImageBackground>

      </View>
      <View>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: "flex-start",
          marginTop: 10,
          borderBottomColor: '#d6d1cb',
          borderBottomWidth: 3
          // justifyContent:,

        }}>
          <Image source={require('../assets/settings.png')} />
          <Text style={{ marginLeft: 15, fontSize: 20, fontWeight: '700', color: 'gray' }}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: "flex-start",
          marginTop: 10,
          borderBottomColor: '#d6d1cb',
          borderBottomWidth: 3
          // justifyContent:,

        }}>
          <Image source={require('../assets/check-ins.png')} />
          <Text style={{ marginLeft: 15, fontSize: 20, fontWeight: '700', color: 'gray' }}>Check-Ins</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: "flex-start",
          marginTop: 10,
          borderBottomColor: '#d6d1cb',
          borderBottomWidth: 3
          // justifyContent:,

        }}>
          <Image source={require('../assets/my-expenses.png')} />
          <Text style={{ marginLeft: 15, fontSize: 20, fontWeight: '700', color: 'gray' }}>My Expenses</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
        marginTop: 100
        // marginTop:300
        // left:0,
        // right:0,
        // margin:100


      }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => {
            AsyncStorage.removeItem('user_id');
            navigation.navigate('Login')
          }}
        >
          <Image source={require('../assets/logout.png')} />
          <Text>Log Out</Text>
        </TouchableOpacity>
        <Image source={require('../assets/we_app_logo.png')}
          style={{ width: 50, height: 50, padding: 4 }}
        />
      </View>
    </>
  )

}
function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerStyle: {
          // display: 'none',
          flex: 1
        },
        drawerStyle: {
          // display:'none',
          // height:100,
          width: 300
        }
      }}
      initialRouteName='Homescreen'
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Homescreen" component={Homescreen} />
    </Drawer.Navigator>
  );
}
export default function NavigationIndex({ user_id }) {
  console.log(user_id, 'iddd')
  const [user, setuser] = React.useState(false)


  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: Platform.OS === "android" ? false : true,
          gestureEnabled: Platform.OS === "android" ? false : true,
          detachInactiveScreens: true,
        }}
        initialRouteName={user_id !== null ? 'Dashboard' : 'Login'}
      >
        <Stack.Screen name="Dashboard" component={DrawerNavigation} />

        <Stack.Screen name="Login" component={Login}

        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

