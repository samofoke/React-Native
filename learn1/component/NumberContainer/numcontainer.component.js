import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../Colors/colors.component';


const NumberContainer = props => {
    return (
        <View style={styles.container2}>
            <Text style={styles.number2}>{props.children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container2: {
        width: 2,
        borderColor: Colors.bordermecolor,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number2: {
        color: Colors.numbercolor,
        fontSize: 20
    }
});

export default NumberContainer;