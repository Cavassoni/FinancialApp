import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


export default class AnalisePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Analise do btc... analise'
        }
    }

    // static navigationOptions = ({ navigation }) => {
    //     const params = navigation.state || {};
    //     console.log('navigationOptions', navigation);
    //     return {
    //       title: 'title',
    //     };
    //   };

    componentDidMount() {
        // this.props.navigation.setParams({ title: 'Main!!!' });
    }


    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.text}
                >{this.state.text}</Text>
                <Button
                    title="Historico"
                    style={styles.button}
                    onPress={() => this.props.navigation.setParams({ title: 'Updated!' })}
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        color: '#fff',
    },
    button: {
        flex: 1,

    },
})