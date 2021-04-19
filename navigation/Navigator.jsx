import React from 'react';
import { StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator,DrawerContentScrollView} from '@react-navigation/drawer';
import HomeScreen from '../screens/dashboard/HomeScreen';
import AuthScreen from '../screens/auth/AuthScreen';
import {Drawer,DrawerItem, IndexPath, Icon, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import ProfileScreen from '../screens/ProfileScreen';
import VehicalRegistrationScreen from '../screens/vehicalRegistration/VehicalRegistrationScreen';
import DriverRegistration from '../screens/driverOnboarding/driverRegistration';


const ForwardIcon = (props) => (
    <Icon {...props} name='arrow-ios-forward'/>
);


const NWDrawer = createDrawerNavigator();

const HomeTabs = createBottomTabNavigator();

const  BottomTabBarHome= ({navigation, state }) => (
    <BottomNavigation
        style={styles.bottomNavigation}
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Home'/>
      <BottomNavigationTab title='Profile'/>
    </BottomNavigation>
);
function HomeScreenTabs() {
    return(
        <HomeTabs.Navigator tabBar={props => <BottomTabBarHome {...props} />} >
            <HomeTabs.Screen name='HomeScreen' component={HomeScreen}/>
            <HomeTabs.Screen name='Profile' component={ProfileScreen} />
        </HomeTabs.Navigator>
    )
}
const HomeStack = createStackNavigator();
function HomeScreenStack() {
  return (<HomeStack.Navigator headerMode='none'>
    <HomeStack.Screen name="HomeScreen" component={HomeScreenTabs}/>
  </HomeStack.Navigator>);
}


const DrawerContentPublic = ({ navigation, state }) => (
    <DrawerContentScrollView>
        <Drawer
        selectedIndex={new IndexPath(state.index)}
        onSelect={index => navigation.navigate(state.routeNames[index.row])}
        style={styles.drwaerContainer}>
                <DrawerItem title='Home' accessoryRight={ForwardIcon} />
                <DrawerItem title='Login' accessoryRight={ForwardIcon} />
                <DrawerItem title='Profile' accessoryRight={ForwardIcon} />
                <DrawerItem title='Vehical Registration' accessoryRight={ForwardIcon} />
                <DrawerItem title='Driver Registration' accessoryRight={ForwardIcon} />
        </Drawer>
    </DrawerContentScrollView>
);


export default function AppNavigator () {
return(
  <NavigationContainer>
      <NWDrawer.Navigator  initialRouteName="Home" 
            drawerType='slide'
            drawerContent={props => {
                return (
                   <DrawerContentPublic {...props}/>
                )
            }}
            drawerContentOptions={{
                itemStyle: { marginVertical: 5 },
            }}
      >
    <NWDrawer.Screen name='Home' component={HomeScreenStack} />
    <NWDrawer.Screen name='Login' component={AuthScreen}  />
    <NWDrawer.Screen name='Profile' component={ProfileScreen} />
    <NWDrawer.Screen name='VehicalRegistration' component={VehicalRegistrationScreen}/>
    <NWDrawer.Screen name='DriverRegistration' component={DriverRegistration}/>

    </NWDrawer.Navigator>
    
  </NavigationContainer>
)};

const styles = StyleSheet.create({
    drwaerContainer: {
    //   marginTop: 44
    },
    bottomNavigation: {
        marginVertical: 8
    }
});