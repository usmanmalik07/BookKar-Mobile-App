import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/stack";

import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={splashScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const splashScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/splash.jpg')}
      style={styles.imageBackground2}
    >
      <View style={styles.overlay2}>
        <Text style={styles.companyName2}>Welcome To RentKar</Text>
        <Text style={styles.description2}>
          Your ultimate companion for seamless car rental experiences.
          Whether it's a spontaneous road trip or planned travel, BookKar puts the power of mobility in your hands.
          With just a few taps, explore a diverse fleet of vehicles tailored to your needs
        </Text>
        <TouchableOpacity style={styles.button2} >
          <Text style={styles.buttonText2}>Get Started</Text>
          onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


const dashboard = ({navigation,route}) => {
  return (
      <View style={styles.container1}>
          <Text style={styles.title1}>Dashboard</Text>
          {/* Add your dashboard content here */}
          <Text>hishfhfffjdf</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  imageBackground2: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay2: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  companyName2: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  description2: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button2: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
  },
});



export default App;