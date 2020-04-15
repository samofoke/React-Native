import React from 'react';

import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

const startGame = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.containerButton}>
                    <Button title="reset" onPress={() => {

                    }} />
                    <Button title="confirm" onPress={() => {

                    }} />
                </View>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    containerButton: {
       flexDirection: 'row',
       width: '100%',
       justifyContent: 'space-between',
       paddingHorizontal: 15
    }
});

export default startGame;