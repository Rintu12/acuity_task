

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from '@expo/vector-icons/Ionicons';

import BrandsList from '../components/brands';
import SeriesDetails from '../components/seriesDetail';
import SeriesList from '../components/seriesList';
import { View ,Text} from 'react-native';
import QuestionTab from '../components/questiontab';
import AccountTab from '../components/accounttab';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function BottomTabNavigationIndex(){

    return(
        <>
          <BottomTab.Navigator 
                  initialRouteName="Home"
           screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarActiveTintColor: '#0000',
            tabBarInactiveTintColor: '#1111',
            tabBarShowLabel: false,
  
            tabBarStyle: {
              height: 66,
              margin: 0,
              padding: 6,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 9,
              },
              shadowOpacity: 0.5,
              shadowRadius: 12.35,
              elevation: 19,
              borderTopWidth: 1,
              // borderTopColor: "#e6e6e6",
              // borderTopEndRadius:12,
              // borderTopStartRadius:10
              borderTopLeftRadius: 12,
              borderTopRightRadius: 10
            },
            
          }}
          >
      <BottomTab.Screen name="Home" component={StackNavigationIndex} 
      options={{
        tabBarIcon:() =>{
          return(
            <Ionicons name="home-outline" color="#000" size={32} />
          )
        }
      }}
      />
      <BottomTab.Screen name="FAQ" component={QuestionTab}
      options={{
        tabBarIcon:() =>{
          return(
            <Ionicons name="document-outline" color="#000" size={32} />
          )
        }
      }}
      />
      <BottomTab.Screen name="Account" component={AccountTab}  
      options={{
        tabBarIcon:() =>{
          return(
            <Ionicons name='person-outline' color="#000" size={32} />
          )
        }
      }}
      />

    </BottomTab.Navigator>
        </>
    )
}

 export function StackNavigationIndex(){
    return(
        
         <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: Platform.OS === "android" ? false : true,
        gestureEnabled: Platform.OS === "android" ? false : true,
        detachInactiveScreens: true,
      }}
      initialRouteName='Brand'

    >

      <Stack.Group>

        <Stack.Screen
          options={{ headerShown: false }}
          name="Brand"
          component={BrandsList}
        />
           <Stack.Screen
          options={{ headerShown: false }}
          name="seriesList"
          component={SeriesList}
        />
           <Stack.Screen
          options={{ headerShown: false }}
          name="SeriesDetails"
          component={SeriesDetails}
        />
        
        </Stack.Group>
        </Stack.Navigator>
    )
}

export default BottomTabNavigationIndex