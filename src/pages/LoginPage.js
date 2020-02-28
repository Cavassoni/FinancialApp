import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={{uri: './../../content/logo.png' }} />
                <View>
                    <Text>Tela de loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Text>
                    <Text>Tela de loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Text>
                    <Text>Tela de loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Text>
                    <Text>Tela de loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Text>
                    <Text>Tela de loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Text>
                    <Text>Tela de loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Text>
                    <Text>Tela de loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Text>
                    <Text>Tela de loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Text>
                    <Text>Tela de loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Text>
                    <Text>Tela de loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Text>
                </View>
            </View>
        )
    }
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        height: 55,

        // flex-box
        alignItems: "center",
        flexDirection: "row"
    },
    logo: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50,
    }
})