import React, { useState } from 'react';
import {View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        //any inputs entered that are not numbers 0-9 are immideiately replaced with an empty string
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        //reset button sets confirm to false
        setConfirmed(false);
        //clear inputs
        setEnteredValue('');
    };

    const confirmInputHandler = () => {
        //parseInt converts string to a number
        const chosenNumber = parseInt(enteredValue);
        //if choseNumber is not a number OR if chosen number is less than or equal to zero OR if greater than 99, return nothing to end function
        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number must be between 1-99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        };
        //confirms that user wants to submit number
        setConfirmed(true);
        //chosen number is the selected number
        setSelectedNumber(chosenNumber);
        //clear inputs
        setEnteredValue('');
        Keyboard.dismiss();
    };
    
    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = 
            <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onPress={() => {props.onStartGame(selectedNumber)}}>START GAME</MainButton>
            </Card>
    }

    return (
        //dismisses keyboard for iOS when user touches outside of keyboard
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
                <Card style={styles.inputContainer }>
               <Text>Select a Number</Text> 
               <Input 
                 style={styles.input} 
                 blurOnSubmit 
                 autoCapitalize='none' 
                 autoCorrect={false} 
                 keyboardType="number-pad" 
                 maxLength={2}
                 onChangeText={numberInputHandler}
                 value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent} /></View>
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} /></View>
                </View>
                </Card>
                {confirmedOutput}
            </View>
            </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});
export default StartGameScreen;