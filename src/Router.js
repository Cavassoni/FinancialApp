import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import AnalisePage from './pages/AnalisePage';
import FearAndGreedPage from './pages/FearAndGreedPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NoticiasFinMovPage from './pages/NoticiasFinMovPage';
import NoticiasGeraisPage from './pages/NoticiasGeraisPage';
import PagamentoPage from './pages/PagamentoPage';
import SignupScreen from './pages/SignupScreen';
import TradesPage from './pages/TradesPage';

import HeaderIcon from './components/HeaderIcon';
import CustomDrawerNavigator from './components/CustomDrawerNavigator';


const StackNav = createStackNavigator({
    'Home': {
        screen: HomePage
    },
    'Trades': {
        screen: TradesPage,
        navigationOptions: {
            title: 'Trades'
        }
    },
    'Analise': {
        screen: AnalisePage,
        navigationOptions: ({ navigation }) => {
            const { title } = navigation.state.params || 'Análise';
            return ({
                title
            })
        }
    },
    'FearAndGreed': {
        screen: FearAndGreedPage,
        navigationOptions: {
            title: 'Fear And Greed Index'
        }
    },
    'NoticiasFinMov': {
        screen: NoticiasFinMovPage,
        navigationOptions: {
            title: 'Notícias'
        }
    },
    'NoticiasGerais': {
        screen: NoticiasGeraisPage,
        navigationOptions: {
            title: 'Notícias'
        }
    },
    'Pagamento': {
        screen: PagamentoPage,
        navigationOptions: {
            title: 'Pagamento'
        }
    },
}, {
    gestureEnabled: false,
    defaultNavigationOptions: ({ navigation }) => ({
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
        headerRight: () => (<HeaderIcon navigation={navigation} />),
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

const DrawerNavigation = createDrawerNavigator({
    DrawerStack: {
        screen: StackNav
    }
}, {
    headerMode: 'float',
    gestureEnabled: false,
    contentComponent: CustomDrawerNavigator,
})

// login stack
const LoginStack = createStackNavigator({
    'Login': {
        screen: LoginPage
    },
    'Cadastro': {
        screen: SignupScreen
    },
}, {
    headerMode: 'none'
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

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;