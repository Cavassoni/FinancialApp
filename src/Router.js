import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import HeaderIcon from './components/HeaderIcon';
import HeaderMenu from './components/HeaderMenu';

const AppNavigator = createStackNavigator({
    'Login': {
        screen: LoginPage,
        navigationOptions: {
            title: 'Login'
        }
    },
    'Home': {
        screen: HomePage
    },
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        title: "Mudar HEADER",
        headerTintColor: 'black',
        backgroundColor: '#212121',
        headerLeft: () => (<HeaderMenu navigate={navigation} />),
        headerRight: () => (<HeaderIcon />),
        headerStyle: {
            backgroundColor: '#212121'
        },
        headerTitleStyle: {
            color: '#d6d0d0',
            fontSize: 25
        },
        headerTitleAlign: 'center'
    })
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;