import * as React from 'react';
// import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { loginAction } from '../store/actions/loginAction';
import { logoutAction } from '../store/actions/logoutAction';
// import MapViewDirections from 'react-native-maps-directions';
// import Geolocation from 'react-native-geolocation-service';
// import Permissions from 'expo-permissions';


// const GOOGLE_MAP_API_KEY = 'AIzaSyCaMswcOXbUtpLoJgqphaBcPHiord03BJM';

export default function HomeScreen() {

  // const email = useSelector(state => state.loginFlow.email);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);

  const [state, setState] = React.useState({
    pickUpCords: {
      latitude: 21.245199,
      longitude: 76.036598,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0423
    },
    dropLocationCords: {
      latitude: 18.520430,
      longitude: 73.856743,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0423
    }
  })
  const { pickUpCords, dropLocationCords } = state;

  
    return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {/* <MapView style={styles.map}
        initialRegion={pickUpCords}
      >
        <Marker coordinate={pickUpCords} />
        <Marker coordinate={dropLocationCords} />
        <MapViewDirections
          origin={pickUpCords}
          destination={dropLocationCords}
          apikey={GOOGLE_MAP_API_KEY}
          strokeColor='hotpink'
          strokeWidth={3}
        />
      </MapView> */}
    </View>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
