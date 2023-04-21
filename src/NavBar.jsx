import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext, useEffect,useState } from 'react'

import TabView from '../screen/TabView';
import Register from '../screen/Register';
import Login from '../screen/Login';
import { AuthContext } from './context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const LodPage=()=>{
  return(
            <View>
              <Text>Loading......</Text>
            </View>
  )
}
const NavBar = () => {
  const { userInfo,isLoading } = useContext(AuthContext);
  console.log("navbar token",isLoading);
  return (
      <NavigationContainer>
        <Stack.Navigator>
        {isLoading ? (
            <Stack.Screen name="LodPage" component={LodPage} options={{
              headerShown:false
            }} />
        ) :userInfo.token ? (
            <Stack.Screen name="TabView" component={TabView} options={{
              headerShown: false
            }} />
          ) : (
            <>
            <Stack.Screen name="Login" component={Login} options={{
                headerShown:false,
                animation: 'none'
              }} />
               
             <Stack.Screen name="Register" component={Register} options={{
                    headerShown:false,
                    animation: 'none'
              }} />
              
              </>
          )}
        </Stack.Navigator>

      </NavigationContainer>
  )
}

export default NavBar

const styles = StyleSheet.create({})