import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';

export default class HomePage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('./../../assets/background.jpg')}
                    style={styles.imageBackground}>
                    <Image source={require('./../../assets/logo.png')}
                        style={styles.image} />
                    <Text style={styles.text}>NEGÓCIOS INTERNACIONAIS</Text>
                    <Text style={styles.text}>AO SEU ALCANCE</Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',

        // flex-box
        flex: 1,
        // alignItems: "center",
        alignItems: 'center',
    },
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    image: {
        width: '80%',
        height: '50%',
        marginTop: 50,
        alignSelf: 'center'
    },
    text: {
        color: '#dbdbdb',
        alignSelf: 'center',
        textAlign: 'center',
        letterSpacing: 2,
        fontSize: 20,
        fontWeight: 'bold'
    }
})