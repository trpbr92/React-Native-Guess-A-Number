import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
           <Text>Game Over</Text> 
           <View style={styles.imageContainer}>
           <Image source={require('../assets/success.png')} style={styles.image} />
           </View>
           <Text>Number of rounds: {props.roundsNumber}</Text>
           <Text>Number was: {props.userNumber}</Text> 
           <Button title ="NEW GAME" onPress={props.onRestart} />

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%',
    },
})

export default GameOverScreen;