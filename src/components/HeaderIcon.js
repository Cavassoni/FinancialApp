import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';


const HeaderIcon = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
            style={styles.logo}
            source={require('./../../assets/logo33.png')}
        />
    </TouchableOpacity>
);

export default HeaderIcon;

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 50
    }
})