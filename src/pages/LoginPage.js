import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Input, Button } from 'react-native-elements';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        })
    }

    login() {
        this.props.navigation.navigate('Home');
    }

    redirectPageCadastro() {
        this.props.navigation.navigate('Cadastro');
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./../../assets/logo.png')}
                    style={styles.image} />
                <View style={styles.inputs}>
                    <Input
                        leftIcon={
                            <Icon style={styles.searchIcon} name="account-outline" size={20} color="#fff" />
                        }
                        spellCheck={false}
                        placeholder="Usuário Telegram"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('username', value)}
                        autoCapitalize="none"
                        autoCompleteType="username"
                    />
                </View>
                <View style={styles.inputs}>
                    <Input
                        leftIcon={
                            <Icon style={styles.searchIcon} name="key-variant" size={20} color="#fff" />
                        }
                        placeholder="******"
                        spellCheck={false}
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                        secureTextEntry
                        autoCompleteType="password"
                    />
                </View>
                <Button
                    title="Login"
                    onPress={() => this.login()}
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                />
                <Text
                    onPress={() => this.redirectPageCadastro()}
                    style={[styles.text, styles.textCadastro]}>
                    Não possui cadastro? Clique aqui e saiba mais
                </Text>
            </View>
        );
    }
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',

        // flex-box
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: '#fff'
    },
    image: {
        width: '60%',
        height: '40%',
        alignSelf: 'center'
    },
    searchIcon: {
        paddingRight: 10
    },
    inputs: {
        paddingTop: 50,
        flexDirection: 'row',
        paddingHorizontal: 50
    },
    button: {
        marginTop: 60,
        width: 220,
        backgroundColor: '#fff',
        borderRadius: 30
    },
    buttonTitle: {
        color: 'black'
    },
    textCadastro: {
        marginTop: 80,
        alignContent: 'flex-end',
        fontSize: 14
    }
})