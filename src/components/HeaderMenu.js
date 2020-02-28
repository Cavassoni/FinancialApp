import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import { StyleSheet } from 'react-native';

const MenuIcon = ({ navigate }) => {
    return (
        <Icon
            name='three-bars'
            size={30}
            color='#fff'
            onPress={() => navigate.navigate('DrawerOpen')}
            style={styles.icon}
        />)
};

export default MenuIcon;

const styles = StyleSheet.create({
    icon: {
        paddingLeft: 15
    }
})