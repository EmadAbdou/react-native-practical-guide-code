import { View, Text, TextInput, StyleSheet, Button, Modal, Image } from 'react-native';
import React, { useState } from 'react';

export default function GoalInput({ addGoalHandler, closeModal, isVisible }) {
  const [enteredText, setEnteredText] = useState('');

  function onHandleInput(text) {
    setEnteredText(text);
  }

  function onAddGoal() {
    addGoalHandler(enteredText);
    setEnteredText('');
    closeModal();
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image 
          source={require('../assets/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          onChangeText={onHandleInput}
          value={enteredText}
        />
        <View style={styles.btnContainer}>
        <View  style={styles.btn}>
            <Button title="Cancel" onPress={closeModal} color='#f31282' />
          </View>
          <View  style={styles.btn}>
            <Button
              title="Add Goal"
              onPress={onAddGoal}
              color='#b180f0'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 5,
    alignItems: 'center',
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    marginBlock: 20,
  },
  btn: {
    width: '40%',
    marginHorizontal: 8
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 1,
    width: '85%',
    padding: 10,
  },
});
