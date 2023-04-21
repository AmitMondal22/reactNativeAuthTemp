import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from "react-native-vector-icons/FontAwesome5"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"


import Home from './Home';
import Contact from './Contact';
import MyBid from './MyBid';
import Result from './Result';
import Winings from './Winings';


const Tab = createBottomTabNavigator();
const TabView = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          headerShown:false
        }}/>
        <Tab.Screen name="MyBid" component={MyBid} />
        <Tab.Screen name="Result" component={Result} />
        <Tab.Screen name="Contact" component={Contact} ptions={{
                headerShown:false,
                tabBarLabel: 'Contacts',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="contacts" color={color} size={size} />
                ),
            }}/>
        <Tab.Screen name="Winings" component={Winings} />
    </Tab.Navigator>
  )
}

export default TabView

const styles = StyleSheet.create({})