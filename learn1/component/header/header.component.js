import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../Colors/colors.component';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 85,
        paddingTop: 30,
        backgroundColor: Colors.maincolor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 16
    }
});

export default Header;