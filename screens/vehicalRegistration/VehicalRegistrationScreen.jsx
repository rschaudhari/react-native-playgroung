import { Input,TopNavigation, Divider,Layout, Select, SelectItem ,Button, } from '@ui-kitten/components';
import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, Text, SafeAreaView,View, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import { DrawerIcon } from '../../components/Icons';

export default function VehicalRegistrationScreen({navigation}) { 
  
    const DrawerButton = () => (
        <Button accessoryLeft={DrawerIcon} onPress={toggleMenu} appearance='ghost' />
    );
    const toggleMenu = () => {
        navigation.toggleDrawer();
    }

    return (
        <SafeAreaView style={styles.androidSafeAreaView}>
            <ScrollView>
                <TopNavigation title='VEHICAL REGISTRATION' alignment='center' accessoryRight={DrawerButton} />
                <Divider />
                <Layout level='1'>
                    <ProgressSteps 
                    progressBarColor='#FF8000'
                    completedProgressBarColor='#FF8000'
                    completedStepIconColor='#FF8000'
                    activeStepIconBorderColor='#FF8000'
                    activeLabelColor='#FF8000'

                    >
                    <ProgressStep
                    label='Vehical info'
                    nextBtnTextStyle={{color:"#FF8000"}}
                    previousBtnTextStyle={{color:"#FF8000"}}
                    previousBtnText='Back'
                    >
                    
                    <View style={styles.inputContainer}>
                        <Select
                        placeholder='Select your State'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select
                         style={styles.input}
                        placeholder='Select your city'
                         
                         >
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select style={styles.input}
                        placeholder='Select provider'
                        
                        >
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select style={styles.input}
                        placeholder='Vehical Category'
                        
                        >
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select style={styles.input}
                        placeholder='Vehical Sub Category'
                        >
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select style={styles.input}
                        placeholder='Vehical Make'
                        
                        >
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select style={styles.input}
                        placeholder='Vehical Model'
        
                        >
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select style={styles.input}
                        placeholder='Vehical Size'
                        
                        >
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Input 
                        style={styles.input}
                        placeholder='Vehical Number'  
                        /> 
                        <Select style={styles.input}
                        placeholder='Emmission Norms'
                        
                        >
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select style={styles.input}
                        placeholder='Fuel Type'
                        
                        >
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Divider />
                         <Input 
                         style={styles.input}
                         placeholder='Registration Address'

                         /> 
                          <Input 
                         style={styles.input}
                         placeholder='Landmark'
                         
                         />  
                          <Input 
                         style={styles.input}
                         placeholder='Pin '
                         
                         />    

                        <Select style={styles.input}
                        placeholder='Locality'
                        
                        >
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select style={styles.input}
                        placeholder='City'
                        
                        >
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select style={styles.input}
                        placeholder='State'
                        
                        >
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                    </View>
                        </ProgressStep>
                        <ProgressStep label="Second Step"
                         nextBtnTextStyle={{color:"#FF8000"}}
                         previousBtnTextStyle={{color:"#FF8000"}}
                         previousBtnText='Back'
                        >
                       <View style={styles.inputContainer}>
                       <Select
                        placeholder='Salutation'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Input style={styles.input} 
                        placeholder='First Name'
                        />
                        <Input style={styles.input} 
                        placeholder='Middle Name'
                        />
                        <Input style={styles.input} 
                        placeholder='Last Name'
                        />
                        <Input style={styles.input} 
                        placeholder='Email'
                        />
                        <Input style={styles.input} 
                        placeholder='Mobile No'
                        />
                        <Input style={styles.input} 
                        placeholder='Alternate Contact No'
                        />
                        <Input style={styles.input} 
                        placeholder='Telephone'
                        />
                             <Select
                        placeholder='Vehical Size'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Input style={styles.input} 
                        placeholder='Vehical No'
                        />
                        <Select
                        placeholder='Emmission Norm'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select
                        placeholder='Fuel Type'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Divider/>
                        <Input style={styles.input} 
                        placeholder='Current Address'
                        />
                        <Input style={styles.input} 
                        placeholder='Landmark'
                        />
                        <Input style={styles.input} 
                        placeholder='Pin'
                        />
                        <Select
                        placeholder='Localitu'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select
                        placeholder='City'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select
                        placeholder='State'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Input style={styles.input} 
                        placeholder='Permanent Address'
                        />
                        <Input style={styles.input} 
                        placeholder='Landmark'
                        />
                        <Input style={styles.input} 
                        placeholder='Pin'
                        />
                          <Select
                        placeholder='Locality'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select
                        placeholder='City'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select
                        placeholder='State'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Input style={styles.input} 
                        placeholder='Pan No'
                        />
                        <Input style={styles.input} 
                        placeholder='Aadhar No'
                        />
                        <Input style={styles.input} 
                        placeholder='Driving License No'
                        />
                        <Input style={styles.input} 
                        placeholder='Address Proof'
                        />
                        </View> 
                        </ProgressStep>

                        <ProgressStep label="KYC"
                         nextBtnTextStyle={{color:"#FF8000"}}
                         previousBtnTextStyle={{color:"#FF8000"}}
                         previousBtnText='Back'  
                        onSubmit={()=>{ alert('form Submitted')}}

                        >
                        <View style={styles.input}>
                        <Input style={styles.input} 
                        placeholder='Registering Autherity'
                        />
                          <Select
                        placeholder='State'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select
                        placeholder='City'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Input style={styles.input} 
                        placeholder='Registration Certificate No (RC)'
                        />
                        <Input style={styles.input} 
                        placeholder='Date of Registration'
                        />
                        <Input style={styles.input} 
                        placeholder='Chassis No'
                        />
                        <Input style={styles.input} 
                        placeholder='Engine No'
                        />
                        <Input style={styles.input} 
                        placeholder='Fitness Registration Upto'
                        />
                        <Input style={styles.input} 
                        placeholder='Motor Vehical Tax Upto'
                        />
                        <Input style={styles.input} 
                        placeholder='Insurance Policy number'
                        />
                        <Input style={styles.input} 
                        placeholder='Insurance Autherity'
                        />
                         <Select
                        placeholder='Insurance Type'
                        style={styles.input}>
                            <SelectItem title='Option 1' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        
                        <Input style={styles.input} 
                        placeholder='Insurance Amount'
                        />
                        </View>
                        </ProgressStep>
                     </ProgressSteps>   
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