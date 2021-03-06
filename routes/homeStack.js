import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
        // navigationOptions: {
        //     headerTitle: () => <Header />,
        //     // headerStyle: { backgroundColor: '#eee' }
        // }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            // headerStyle: { backgroundColor: '#333' }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default HomeStack;