import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Container, Header, Left, Icon, Content } from 'native-base';

class LoginPage extends React.Component {

    render() {
        return (
            <Container>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Text>Login Screen</Text>
                </Content>
            </Container>);
    }
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        // height: 55,

        // flex-box
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})