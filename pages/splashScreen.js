/* eslint-disable prettier/prettier */
import {React, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import dashboard from './dashboard';
import { useNavigation } from '@react-navigation/native';

    const splashScreen = () => {
        const navigation = useNavigation();

        useEffect(() => {
            // Simulate a delay for the splash screen
            setTimeout(() => {
                // Navigate to the main screen after the delay
                // You can replace 'MainScreen' with the actual name of your main screen component
                navigation.replace(dashboard);
            }, 2000); // 2000 milliseconds = 2 seconds
        }, []);
    

return (
        <View style={styles.container}>
            <Text style={styles.text}>Splash Screen</Text>
        </View>
    );
};// Move this closing curly brace to the end of the code block


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default splashScreen;


