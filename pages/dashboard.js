/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const dashboard = (navigation,route) => {
    return (
        <View style={styles.container1}>
            <Text style={styles.title1}>Dashboard</Text>
            {/* Add your dashboard content here */}
            <Text>hishfhfffjdf</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default dashboard;