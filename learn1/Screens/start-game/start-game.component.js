import React from 'react';

import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import Card from '../../component/Card/card.component';

const startGame = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        <Button title="reset" onPress={() => {

                        }} color="#FF7F50" />
                    </View>
                    <View style={styles.button}>
                        <Button title="confirm" onPress={() => {

                        }} color="#7FFF00" />
                    </View>
                </View>
            </Card>
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
    },
    button: {
        width: 90
    }
});

export default startGame;