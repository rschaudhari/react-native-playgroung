import { Input,TopNavigation, Divider,Layout,Button } from '@ui-kitten/components';
import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, Text, SafeAreaView,View,  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DrawerIcon } from '../components/Icons';


export default function ProfileScreen({navigation}) { 
    const DrawerButton = () => (
        <Button accessoryLeft={DrawerIcon} onPress={toggleMenu} appearance='ghost'/>
    );
    const toggleMenu = () => {
        navigation.toggleDrawer();
    }
    
    return (
        <SafeAreaView style={styles.androidSafeAreaView}>
        <ScrollView>
        <TopNavigation title='MY PROFILE' alignment='center' accessoryRight={DrawerButton}  />
        <Divider />
        <Layout level='1'>
         <View style={styles.inputContainer}>
            <Input
            style={styles.input}
            placeholder='Business Name'
            />
             <Input
             style={styles.input}
            placeholder='Count Of Vehical'
            />
             <Input
             style={styles.input}
            label='Contact Person'
            placeholder='Salutaion'
            />
             <Input
             style={styles.input}
            placeholder='First Name'
            />
             <Input
             style={styles.input}
            placeholder='Last Name'
            />
             <Input
             style={styles.input}
            placeholder='Email'
            />
             <Input 
             style={styles.input}
            placeholder='Mobile No'
            />
             <Input
             style={styles.input}
            placeholder='Alternate Contact No'
            />
             <Input
             style={styles.input}
            placeholder='Telephone'
            />
        </View>
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
      marginTop:'10%'
    //   justifyContent: 'center',
    },
    androidSafeAreaView: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: Constants.statusBarHeight,
    },
    inputContainer:{
        marginTop:'10%'
    },
    input:{
        padding:10
    },
    button:{
        margin:20,
        width:'90%'
    },
    title:{
        fontSize:30,
        marginTop:5
    }
  });