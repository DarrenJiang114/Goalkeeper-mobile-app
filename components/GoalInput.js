import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] =useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);

    };
    function goalHandler() {
        if(enteredGoalText.length > 0){
            props.onAddGoal(enteredGoalText);
        }
        setEnteredGoalText('');
    }
  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput style={styles.textInput} placeholder='Your goal' 
        onChangeText={goalInputHandler} value={enteredGoalText}/>
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title='Add Goal' onPress={goalHandler} color="#fff8dc"/>
            </View>
            <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancel} color="#f31282"/>
            </View>
        </View>
      </View>
    </Modal>
  );

};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#6495ed',
      },
      image:{
        width: 100,
        height: 100,
        margin: 20,
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        color: '#120438',
        width: '100%',
        padding: 8,

      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      }
})