import React from 'react';
import { View, StyleSheet, Linking, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Button } from 'react-native-elements';

export default class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    openBotTelegram() {
        // Linking.openURL('https://t.me/Cryptointeliggencebot');
        Linking.canOpenURL('tg://resolve?domain=Cryptointeliggencebot')
            .then((supported) => {
                if (!supported) {
                    // sem telegram instalado, abre pelo navegador
                    Linking.openURL('https://t.me/Cryptointeliggencebot');
                } else {
                    // abre o app do Telegram
                    return Linking.openURL('tg://resolve?domain=Cryptointeliggencebot');
                }
            })
            .catch((err) => console.error('An error occurred', err));
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./../../assets/logo.png')}
                    style={styles.image} />
                <Text style={styles.text}>
                    {`\t`} A Financial Move é uma Empresa de
                        Consultoria Financeira
                        Especializada no Mercado Financeiro Nacional
                        e Internacional.
                    </Text>
                <Text style={styles.text}>
                    {`\t`} Nosso canal de comunicação oficial é o
                        Telegram. Temos grupos/canais "FREE" /
                        "VIP" e um bot de apoio.
                    </Text>
                <Text style={styles.text}>
                    {`\t`} Seu primeiro acesso será concedido pelo bot.
                        Basta iniciar uma conversa, fornecer os
                        dados iniciais e solicitar os dados de acesso
                        enviando uma mensagem com o comando: /app
                    </Text>

                <Button
                    title="Acessar"
                    onPress={() => this.openBotTelegram()}
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                    icon={
                        <Icon name="external-link" size={30} color="black" />
                    }
                    iconRight={true}
                    iconContainerStyle={styles.btnIcon}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',

        // flex-box
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 50,
        fontSize: 18,
        textAlign: 'justify'
    },
    button: {
        marginTop: 60,
        width: 200,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    buttonTitle: {
        color: 'black',
        flex: 1,
    },
    btnIcon: {
    },
    image: {
        width: '50%',
        height: '30%',
        alignSelf: 'center'
    },
})