import React, {useState} from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';
import Card from '../../component/Card/card.component';
import Input from '../../component/Input/input.component';

const startGame = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [conFirmed, setconFirmed] = useState(false);
    const [selectNumber, setSelectNumber] = useState();

    const inputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInput = inputText => {
        setEnteredValue('');
        setconFirmed(false);
    };

    const enterInput = inputText => {
        const chosenNumber = parseInt(enteredValue);
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
            return;
        }
        setconFirmed(true);
        setEnteredValue('');
        setSelectNumber(chosenNumber);
    };

    let confirmedOutput;

    if (conFirmed) {
        confirmedOutput = <Text>chosen Number: {selectNumber}</Text>
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    outoCapitalize='none'
                    outoCorrect={false}
                    keybordType="numeric"
                    maxLength={2}
                    onChangeText={inputHandler}
                    value={enteredValue}
                />
                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        <Button title="reset" onPress={resetInput} color="#FF7F50" />
                    </View>
                    <View style={styles.button}>
                        <Button title="confirm" onPress={enterInput} color="#7FFF00" />
                    </View>
                </View>
            </Card>
            {confirmedOutput}
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
    },
    input: {
        width: 50
    }
});

export default startGame;