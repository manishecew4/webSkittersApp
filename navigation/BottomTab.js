import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native'
import Home from '../screens/Home'
import Products from '../screens/Products'
import Header from '../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomTab = () => {

    const Tab = createBottomTabNavigator();




    return (
        <>
            <Header />
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Products" component={Products} options={{   // needs to be options, not Options
                    tabBarIcon: ({ focused, color }) => (
                        <MaterialIcons name="dashboard" size={focused ? 29 : 24} color={color} />
                    ),
                    tabBarLabel: "Dashboard",
                    tabBarActiveTintColor: "#664FA4",
                    tabBarInactiveTintColor: "black",
                }} />
                <Tab.Screen name="Home" component={Home}
                    options={{   // needs to be options, not Options
                        tabBarIcon: ({ focused, color }) => (
                            <Icon name="home" size={focused ? 29 : 24} color={color} />
                        ),
                        tabBarLabel: "Products",
                        tabBarActiveTintColor: "#664FA4",
                        tabBarInactiveTintColor: "black",
                    }}
                />
            </Tab.Navigator>
        </>
    )
}

export default BottomTab

const styles = StyleSheet.create({})