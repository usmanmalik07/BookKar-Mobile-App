import React from "react";
import SplashScreen from "./pages/splashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import dashboard from "./pages/dashboard";
const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
         <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" component={SplashScreen}/>
         </Stack.Navigator>
         </NavigationContainer>
    );
};
export default App;