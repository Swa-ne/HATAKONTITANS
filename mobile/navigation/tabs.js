import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import RequestFormsScreen from './tabs/RequestFormsScreen';
import HistoryScreen from './tabs/HistoryScreen';
import ProfileScreen from './tabs/ProfileScreen';
import { accountlogo, favicon, historylogo, requestformslogo } from '../imagepaths';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { loadAsync } from 'expo-font';

const loadFontsAsync = async () => {
    await loadAsync({
        'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
        'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    });
};

loadFontsAsync();

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarPosition='bottom'
        screenOptions={{
            tabBarLabelStyle: {
                marginTop: 20,
                color: 'white',
                fontFamily: 'Ubuntu-Regular',
                fontSize: 10
            },
            tabBarIndicatorStyle: {backgroundColor: '#e0ffbfc5'},
            tabBarStyle: {
                backgroundColor: '#3a4f24',
                height: 90,

                ...styles.shadow
            }
        }}>
            <Tab.Screen name="Request Forms" component={RequestFormsScreen} style={{
                height: "100%"
            }}  options={{
                tabBarIcon: ({focused}) => (
                    <View style= {{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                        source={requestformslogo}
                        resizeMode='contain'
                        style = {{
                        height: 50,
                        width: 50,
                        }}
                        />
                    </View>
                ),
            }} />

            <Tab.Screen name="History" component={HistoryScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style= {{alignItems: 'center', justifyContent: 'center'}}>
                         <Image
                        source={historylogo}
                        resizeMode='contain'
                        style = {{
                        height: 50,
                        width: 50
                        }}
                        />
                    </View>
                ),
            }}/>
            
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style= {{alignItems: 'center', justifyContent: 'center'}}>
                         <Image
                        source={accountlogo}
                        resizeMode='contain'
                        style = {{
                        height: 50,
                        width: 50
                        }}
                        />
                    </View>
                ),
            }}/>


        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});


export default Tabs;