import React, {useState} from 'react';

import {StyleSheet, View, Text, Button, Alert, Keyboard} from 'react-native';
import Card from '../../component/Card/card.component';
import Input from '../../component/Input/input.component';
import Colors from '../../component/Colors/colors.component';
import NumberContainer from '../../component/NumberContainer/numcontainer.component';

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
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Numer is not between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInput}]
            );
            return;
        }
        setconFirmed(true);
        setSelectNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (conFirmed) {
        confirmedOutput = (
            <Card style={styles.sumContainer}>
                <Text>The number chosen</Text>
                <NumberContainer>{selectNumber}</NumberContainer>
                <Button title="Start Game" />
            </Card>
        );
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
                        <Button title="reset" onPress={resetInput} color={Colors.resetcolor} />
                    </View>
                    <View style={styles.button}>
                        <Button title="confirm" onPress={enterInput} color={Colors.confirmcolor} />
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
    },
    sumContainer: {
        marginTop: 20
    }
});

export default startGame;