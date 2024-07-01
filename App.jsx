import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Image, StyleSheet, View } from 'react-native';
import CurrentWeather from './components/CurrentWeather';
import SearchWeather from './components/SearchWeather';
import config from './config';
import Background from './assets/Wallpaper.png';
import Background2 from './assets/Wallpaper2.png';

export default function App() {
  const [toggleSearch, setToggleSearch] = useState('city');
  const [city, setCity] = useState('');
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [weather, setWeather] = useState({});
//  let KEY = config.API_KEY
  
  const fetchWeatherByCity = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.API_KEY.replace(/[',]/g, '')}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data)
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data by city:", error);
      });
  };

  

  return (
    <ImageBackground blurRadius={30} source={Background} style={styles.background}>
    <View style={styles.container}>
      {/* Pass props to SearchWeather */}
      <SearchWeather
        city={city}
        setCity={setCity}
        toggleSearch={toggleSearch}
        setToggleSearch={setToggleSearch}
        fetchWeatherByCity={fetchWeatherByCity}
        
      />
      {/* Pass props to CurrentWeather */}
      <CurrentWeather currentWeather={weather} timezone={weather.timezone} />
      {/* Status bar */}
      <StatusBar style="light" />
    </View>
    </ImageBackground>
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
