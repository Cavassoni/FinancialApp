import React from 'react';
import { View, StyleSheet, Image } from 'react-native';


const HeaderIcon = () => (
    <View>
        <Image
            style={styles.logo}
            source={require('./../../content/logo33.png')}
        />
    </View>
);

export default HeaderIcon;

const styles = StyleSheet.create({
    logo: {
        width: 80, 
        height: 50
    }
})