import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native'
import Home from '../screens/Home'
import Products from '../screens/Products'
import Header from '../components/Header'

const BottomTab = () => {

    const Tab = createBottomTabNavigator();

    return (
        <>
            <Header />
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Products" component={Products} />
                <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>
        </>
    )
}

export default BottomTab

const styles = StyleSheet.create({})