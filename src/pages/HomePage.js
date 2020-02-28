import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HomePage = props => (
    <View style={styles.container}>
        <View>
            <Text>Tela HOME</Text>
        </View>
    </View>
);

export default HomePage;

const styles = StyleSheet.create({
    container: {
        height: 55,

        // flex-box
        alignItems: "center",
        flexDirection: "row"
    },
})