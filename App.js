import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Home from './screens/Home';
import BottomTab from './navigation/BottomTab';
import { StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header'

const App = () => {

  const Stack = createNativeStackNavigator();

  const [isUserLoggedin, setIsUserLoggedin] = useState(false);

  auth().onAuthStateChanged(user => {
    if (user !== null) {
      setIsUserLoggedin(true)
    }
  })

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="BottomTab">
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Header" component={Header} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})