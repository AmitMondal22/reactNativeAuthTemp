import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert } from 'react-native'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    
    const registeruser = async (name, email, mobile, password) => {
        setIsLoading(true);

        await axios.post(`${BASE_URL}/create-account`, {
            name, email, mobile, password
        }).then(res => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            // navigation.navigate('TabView');
            setIsLoading(false);

        }).catch(er => {
            console.log(er);
            setIsLoading(false);
        });
    }


    const loginUser = async (email, password) => {
        setIsLoading(true);
        await axios.post(`${BASE_URL}/login`, {
            email, password
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(userInfo);
            console.log("login Statue ",userInfo);
        }).catch(er => {
            console.log("login Network ",er);
            setIsLoading(false);
        });

    }

    const logout = () => {
        setIsLoading(true);
    
        axios.post(`${BASE_URL}/logout`,
            {},
            {
              headers: {Authorization: `Bearer ${userInfo.token}`},
            },
          ).then(res => {
            console.log(res.data);
            AsyncStorage.removeItem('userInfo');
            setUserInfo({});
            setIsLoading(false);
          }).catch(e => {
            console.log(`logout error ${e}`);
            setIsLoading(false);
          });
      };



    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
    
          let userInfo = await AsyncStorage.getItem('userInfo');
          userInfo = JSON.parse(userInfo);
          //console.log(`is logged Data${userInfo}`);
          if (userInfo) {
            setUserInfo(userInfo);
          }
    
          setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
            console.log(`is logged in error ${e}`);
        }
      };


      
  useEffect(() => {
    isLoggedIn();
  }, []);

    return (
        <AuthContext.Provider value={{ isLoading, userInfo, registeruser, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
}
