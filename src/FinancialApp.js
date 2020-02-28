import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Router from './Router';

const FinancialApp = props => (
    <Router />
);

export default FinancialApp;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        color: '#dbdbdb',
        alignItems: 'center',
        justifyContent: 'center'
    },
});