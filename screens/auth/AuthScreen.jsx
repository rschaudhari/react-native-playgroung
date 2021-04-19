import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { Button, Divider, Icon,Input, TopNavigation,Layout} from '@ui-kitten/components';
import { Link } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from "expo-constants";
import { useDispatch } from 'react-redux';
import { loginFlowAction } from '../store/actions/loginFlowAction';

import { PersonIcon ,LockIcon} from '../../components/Icons';
import { Login } from '../../services/authentication/Authentication';
import { loginAction } from '../../store/actions/loginAction';



const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline'/>
  );

  
  // dispatch(loginFlowAction(mobileNumber)); // To Save mobile for OTP screen
  // navigation.navigate('LoginStack', { screen: 'Otp', mobileNumber:  mobileNumber});

export default function AuthScreen ({navigation})  {


  const [email,setEmail]=useState();
  const[password,setPassword]=useState();
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);


      const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
      };

      const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
          <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
      );

  const dispatch = useDispatch();
  const doLogin = () => {
    Login(email, password).then(response => {
      if (response.user) {
        dispatch(loginAction(response)); // To Save user for later use
        navigation.navigate('Home',)
      }        
    })

  }
      
    return (
        <SafeAreaView style={styles.androidSafeAreaView}>
        <ScrollView>
        <TopNavigation title='Login' alignment='center'  />
        <Divider />
        <Layout level='1'>
            <View>
                <Text  style={styles.title}>Now WAGON</Text>
            </View>
            <View style={styles.inputContainer}>
            <Input
            style={styles.input}
            label='Email'
            placeholder='Enter Email'
            value={email}
            onChangeText={nextValue => setEmail(nextValue)}
            accessoryLeft={PersonIcon}
         />       
            <Input
            style={styles.input}
                value={password}
                label='Password'
                placeholder='Enter Password'
                caption='Should contain at least 8 symbols'
                accessoryRight={renderIcon}
                accessoryLeft={LockIcon}
                captionIcon={AlertIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={nextValue => setPassword(nextValue)}
            />
            </View>
            <Button style={styles.button}>Log-In</Button>
            <Link style={styles.link} to='/Home'>Forgot Password</Link>
            </Layout>
        </ScrollView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    androidSafeAreaView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Constants.statusBarHeight,

    },
    inputContainer:{
        margin:10,
        flex:1,
        alignItems: 'center',
        marginTop:'20%'

    },
    input:{
        padding:8
    },
    button:{
        margin:20,
        width:'90%'
    },
    link:{
       textAlign:'center'
    },
    title:{
        textAlign:'center',
        fontSize:30,
        marginTop:'10%'
    }
    
  });

