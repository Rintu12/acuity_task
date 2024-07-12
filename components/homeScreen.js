import * as React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { baseUrl } from '../apiBaseUrl';

export default function Homescreen({ navigation }) {

  const [mettingList, setMeetingList] = React.useState([])
  // function getUserDetails( ) {
  //   console.log('logee')
  //   fetch(`${baseUrl}/get-user`, {
  //     method: 'POST',
  //     headers: {
  //       "Accept": 'application/json',
  //       'Content-Type': 'application/json',
  //       'apiKey': 'hidromas-we-app-01~c^Dt0Oc32'
  //     },
  //     body: JSON.stringify({
  //       user_id: 79,
  //     }),
  //   }).then((res) => res.json()).then((data) => {
  //     console.log(data)
  //   }).catch((er) => {
  //     console.log(er)
  //   })
  // }

  function getmettingList() {
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
      console.log('metting list', data)
      setMeetingList(data.data)
    }).catch((er) => {
      console.log(er)
    })
  }


  React.useEffect(() => {
    // getUserDetails()
    getmettingList()

  }, [])

  return (
    <>
      <SafeAreaView>
        <View style={{
          // backgroundColor:'red' ,
          marginTop: Dimensions.get('screen').height * 0.05,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 60,
          width: Dimensions.get('screen').width,
          padding: 5
        }}

        >
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
          >
            <Image source={require('../assets/icon-menu.png')}
              style={{ resizeMode: 'contain' }}
            />
          </TouchableOpacity>
          <View style={{
            flexDirection: 'column',
            // justifyContent: 'flex-end',
            justifyContent: 'center',
            alignItems: 'center',
            width: '70%',
            // marginTop:20,       
            position: 'relative',
            //  backgroundColor:'green'
          }}>
            <Image source={require('../assets/Logo.png')}
              style={{ resizeMode: 'contain', width: '60%', position: 'absolute', marginTop: 20 }}
            />
          </View>
        </View>
        <View style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
          // backgroundColor:'red',
          height: 210

        }}>
          <View style={{ width: 100 }}>
            <Image source={require('../assets/checkin-bg1.png')}
              style={{
                width: '150%',
                resizeMode: 'contain'
              }}
            />
          </View>
          <View style={{ width: 150 }}>
            <Image source={require('../assets/expense-bg.png')}
              style={{
                resizeMode: 'contain',
                width: '100%'
              }}
            />
          </View>
        </View>

        <View style={{ marginLeft: 5 }}>
          <Text style={{ color: '#2592bd', fontStyle: 'italic', fontSize: 25, fontWeight: '700' }}>Meeting List</Text>
          <FlatList
            data={mettingList}
            renderItem={({ item }) => {
              return (
                <>
                  <View style={{
                    // backgroundColor: 'red'
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: '#137eb4',
                    borderRadius: 5,
                    padding: 3
                  }}>
                    <View style={{ justifyContent: "center", alignItems: 'center' }}>
                      <Image source={{uri:`${item.profile_image}`}}
                        style={{
                          height: 60,
                          width: 60,
                          // backgroundColor:'red',
                          borderColor: 'white',
                          borderWidth: 3,
                          borderRadius: 10

                        }}
                        alt='Photo'
                      />
                    </View>
                    <View>
                      <Text style={{ color: 'white' }}>UserName : {item.username}</Text>
                      <Text style={{ color: 'white' }}>Phone : {item.phone}</Text>
                      <Text style={{ color: 'white' }}>Email : {item.email}</Text>
                      <Text style={{ color: 'white' }}>Role : {item.role}</Text>

                    </View>

                  </View>
                </>
              )
            }}
            // keyExtractor={(item) => item._id}
            keyExtractor={(item, index) => String(index)}
            style={{ padding: 5 }}
            numColumns={1}
            showsVerticalScrollIndicator={false}
          />

        </View>
      </SafeAreaView>
    </>);
}