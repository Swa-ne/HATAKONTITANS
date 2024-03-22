import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './auth-nav-screens/LoginScreen';
import tabs from './tabs'

const Stack = createStackNavigator();

function AuthNavigator() {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // useEffect(() => {
    //     authenticateToken()
    //         .then((isValid) => {
    //             setIsAuthenticated(isValid);
    //         })
    //         .catch(() => {});
    // }, []);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerBackTitleVisible: false,
                headerTintColor: '#32c069',
                headerStyle: {
                    backgroundColor: '#32c069',
                },
            }}
            // initialRouteName={isAuthenticated ? 'FeedScreen' : 'Login'}
        >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='HomeScreen' component={tabs} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
