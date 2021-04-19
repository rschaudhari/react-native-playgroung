import { Input, TopNavigation, Divider, Layout, Select, SelectItem, Button, } from '@ui-kitten/components';
import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, Text, SafeAreaView, View, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import { DrawerIcon } from '../../components/Icons';

export default function DriverRegistration({ navigation }) {

    const DrawerButton = () => (
        <Button accessoryLeft={DrawerIcon} onPress={toggleMenu} appearance='ghost' />
    );
    const toggleMenu = () => {
        navigation.toggleDrawer();
    }

    const DriverDetails = () => {
        return (
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
                    placeholder='Salutation'

                >
                    <SelectItem title='Option 1' />
                    <SelectItem title='Option 2' />
                    <SelectItem title='Option 3' />
                </Select>

                <Input
                    style={styles.input}
                    placeholder='first Name'

                />
                <Input
                    style={styles.input}
                    placeholder='LastName'

                />
                <Input
                    style={styles.input}
                    placeholder='Email '

                />
                <Input
                    style={styles.input}
                    placeholder='Mobile No '

                />
                <Input
                    style={styles.input}
                    placeholder='Alternate Contact No '

                />
                <Input
                    style={styles.input}
                    placeholder='Telephone '

                />

            </View>

        )
    }

    return (
        <SafeAreaView style={styles.androidSafeAreaView}>
            <ScrollView>
                <TopNavigation title='DRIVER REGISTRATION' alignment='center' accessoryRight={DrawerButton} />
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
                            label='Driver Details'
                            nextBtnTextStyle={{ color: "#FF8000" }}
                            previousBtnTextStyle={{ color: "#FF8000" }}
                            previousBtnText='Back'
                        >
                            <DriverDetails />

                        </ProgressStep>
                        <ProgressStep label="Address"
                            nextBtnTextStyle={{ color: "#FF8000" }}
                            previousBtnTextStyle={{ color: "#FF8000" }}
                            previousBtnText='Back'
                        >
                            <View style={styles.inputContainer}>

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
                                <Divider />
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
                            </View>


                        </ProgressStep>

                        <ProgressStep label="KYC"
                            nextBtnTextStyle={{ color: "#FF8000" }}
                            previousBtnTextStyle={{ color: "#FF8000" }}
                            previousBtnText='Back'
                            onSubmit={() => { alert('form Submitted') }}

                        >
                            <View style={styles.input}>
                                <Input style={styles.input}
                                    placeholder='PAN No'
                                />
                                <Input style={styles.input}
                                    placeholder='Aadhar No'
                                />
                                <Input style={styles.input}
                                    placeholder='Driving License No'
                                />
                                <Input style={styles.input}
                                    placeholder='Electricity Bill/Passport'
                                />
                                <Divider />
                                <Input style={styles.input}
                                    placeholder='Bank Name'
                                />
                                <Input style={styles.input}
                                    placeholder='Branch Name'
                                />
                                <Input style={styles.input}
                                    placeholder='IFSC Code'
                                />
                                <Input style={styles.input}
                                    placeholder='Account No'
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
        marginTop: '10%'
        //   justifyContent: 'center',
    },
    androidSafeAreaView: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: Constants.statusBarHeight,
    },
    inputContainer: {
        marginTop: '10%'
    },
    input: {
        padding: 10
    },
    button: {
        margin: 20,
        width: '90%'
    },
    title: {
        fontSize: 30,
        marginTop: 5
    }
});