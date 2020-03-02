import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import HeaderIcon from './components/HeaderIcon';
import CustomDrawerNavigator from './components/CustomDrawerNavigator';


const DrawerStack = createDrawerNavigator({
    'Home': {
        screen: HomePage
    },
}, {
    gestureEnabled: false,
    contentComponent: CustomDrawerNavigator
})

const DrawerNavigation = createStackNavigator({
    DrawerStack: {
        screen: DrawerStack
    }
}, {
    headerMode: 'float',
    gestureEnabled: false,
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: 'green'
        },
        title: 'Financial Move',
        headerLeft: () => (
            <TouchableOpacity
                style={{
                    marginLeft: 20,
                    alignItems: 'center'
                }}
                onPress={() => {
                    navigation.toggleDrawer();
                }}>
                <Icon name='menu' size={25} color='#fff' />
            </TouchableOpacity>
        ),
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
})

// login stack
const LoginStack = createStackNavigator({
    'Login': {
        screen: LoginPage
    },
    // signupScreen: { screen: SignupScreen },
    // forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
    headerMode: 'float',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'red'
        },
        title: 'You are not logged in'
    }
})

const AppNavigator = createStackNavigator({
    loginStack: {
        screen: LoginStack
    },
    drawerStack: {
        screen: DrawerNavigation
    }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'drawerStack'
})


//



// const HamburgerNavigation = createDrawerNavigator({
//     Home: {
//         screen: HomePage
//     },
//     Login: {
//         screen: LoginPage
//     }
// }, {
//     initialRouteName: 'Login',
//     contentComponent: CustomDrawerContentComponent,
//     drawerBackgroundColor: '#212121',
//     defaultNavigationOptions: {
//         backgroundColor: '#212121',
//     }

// })

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;