import {
  SafeAreaView, View,
  Text,
  TextInput,
  TouchableOpacity, Image, StyleSheet, Picker, KeyboardAvoidingView, Platform
} from 'react-native'
import React, { useContext, useState } from 'react'
import Lottie from 'lottie-react-native';
import { AuthContext } from '../src/context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';


const Register = ({ navigation }) => {
  const [mobileNo, setMobileno] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleMobNO = (text) => {
    const regex = /^[0-9]{0,10}$/;
    if (regex.test(text)) {
      setMobileno(text);
    }
  };



  const {isLoading,registeruser}=useContext(AuthContext);

  return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <Spinner visible={isLoading}/>
          <View style={styles.img_container}>
            <Lottie style={styles.image} source={require('../assets/lottie/119220-create-account-letim.json')} autoPlay loop />
          </View>
          <View style={styles.content} >
            <View style={styles.textcontent} >
              <Text style={styles.login}>Create Account</Text>
            </View>
            <View style={styles.inpcontent}>
              <View style={styles.inpcon}>
                <TextInput
                  style={styles.inpfil}
                  placeholder='Full Name'
                  onChangeText={(text) => {
                    setUserName(text)
                  }}
                  value={userName}

                />
                <TextInput
                  style={styles.inpfil}
                  placeholder='Email'
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCompleteType="email"
                  textContentType="emailAddress"
                  onChangeText={(text) => {
                    setUserEmail(text)
                  }}
                  value={userEmail}
                />

                <TextInput
                  style={styles.inpfil}
                  placeholder='Mobile No'
                  keyboardType="numeric"
                  maxLength={10}
                  value={mobileNo}
                  onChangeText={handleMobNO}
                />

                <TextInput
                  style={styles.inpfil}
                  placeholder='Password'
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    setUserPassword(text)
                  }}
                  value={userPassword}

                />
                <TouchableOpacity style={styles.signbtn} onPress={()=>{
                  registeruser(userName,userEmail,mobileNo,userPassword)
                }}>
                  <Text style={{ color: '#05386B', fontWeight: 'bold', fontSize: 20 }}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.creatAcVi}>
                {/* <Text>Don't have an account Sign up</Text> */}
                <Text style={{ fontSize: 18 }}>
                  Already have a account?
                  <Text style={{ color: '#05386B', fontWeight: 'bold', fontSize: 20 }}
                    onPress={() => navigation.navigate('Login')}> Sign In
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'column',
    backgroundColor: "white"
  },
  img_container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 7,
    backgroundColor: "#379683",
    flexDirection: 'column',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  textcontent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20

  },
  inpcontent: {
    flex: 9,
    backgroundColor: "#5cdb95",
    flexDirection: 'column',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    //  marginTop:2, 
  },


  login: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#edf5e1"
  },
  inpcon: {
    padding: 50,
    flex: 8,
    justifyContent: 'center',

  },
  inpfil: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    // marginTop:0,
    paddingTop: 1,
    color: "white"
  },
  signbtn: {
    backgroundColor: 'white',
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  creatAcVi: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
})