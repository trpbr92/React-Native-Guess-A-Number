import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <View style={styles.inputContainer}>
               <Text>Select a Number</Text> 
               <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="reset" onPress={() =>{}} />
                    <Button title="confirm" onPress={() =>{}} />
                </View>
            </View>
        </View>
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
    }
});
export default StartGameScreen;