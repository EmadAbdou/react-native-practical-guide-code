import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

export default function GoalItem({ item, onDelete }) {
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{color: '#210644'}}
       style={({pressed}) => pressed? styles.pressedItem : styles.goalItem}
       onPress={() => onDelete(item.id)}>
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
});
