import { SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,Image,StyleSheet,Alert } from 'react-native'
import React,{useContext,useState} from 'react'
import Lottie from 'lottie-react-native';
import { AuthContext } from '../src/context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';


const Login = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const {isLoading,loginUser}=useContext(AuthContext);
  // const val=useContext(AuthContext);
  return (
    <View style={styles.container}>
       <Spinner visible={isLoading}/>
        <View style={styles.img_container}> 
            <Lottie style={styles.image} source={require('../assets/lottie/107617-bitcoin-mining.json')} autoPlay loop />
        </View>
        <View style={styles.content} >
            <View style={styles.textcontent} >
                <Text style={styles.login}>Sign In</Text>
            </View>
            <View style={styles.inpcontent}>
                <View style={styles.inpcon}>
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
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      setUserPassword(text)
                    }}
                    value={userPassword}
                    
                    />
                    <TouchableOpacity style={styles.signbtn} onPress={()=>{
                        // Alert.alert(BASE_URL);
                        loginUser(userEmail,userPassword);
                        
                      }}>
                      <Text style={{ color: '#05386B', fontWeight: 'bold', fontSize:20 }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.creatAcVi}>
                        {/* <Text>Don't have an account Sign up</Text> */}
                        <Text style={{ fontSize: 18 }}>
                            Don't have an account?  
                            <Text style={{ color: '#05386B',fontWeight: 'bold',fontSize:20 }} 
                                onPress={() => navigation.navigate('Register')}> Sign up
                            </Text>
                        </Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        flexDirection: 'column',
      },
      img_container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20
      },
      image: {
        width: '100%',
        resizeMode: 'cover',
      },
      content: {
        flex: 7,
        backgroundColor:"#379683",
        flexDirection: 'column',
       borderTopLeftRadius: 50, 
       borderTopRightRadius: 50,
      },
      textcontent:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20
        
      },
      inpcontent:{
        flex: 9,
        backgroundColor:"#5cdb95",
        flexDirection: 'column',
         borderTopRightRadius: 50,
         borderTopLeftRadius: 50, 
      },


      login:{
        fontSize:30,
        fontWeight: 'bold',
        color:"#edf5e1"
      },
      inpcon:{
        padding:50,
        flex:8,
        justifyContent: 'center',
        
      },
      inpfil:{
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginTop:10,
        color:"white"
      },
      signbtn:{
        backgroundColor: 'white',
        borderRadius: 22,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
      },
      creatAcVi:{
        flex:2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      
})