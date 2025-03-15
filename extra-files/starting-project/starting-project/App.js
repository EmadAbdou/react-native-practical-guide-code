import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredText) {
    setGoals((currentGoals) => {
      return [
        ...currentGoals,
        {
          text: enteredText,
          id: Math.random().toString(),
        },
      ];
    });
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        color="#b180f0"
        onPress={() => setModalIsVisible(true)}
      />
      <GoalInput isVisible={modalIsVisible} closeModal={() => setModalIsVisible(false)} addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* <ScrollView> Scroll View render all elements */}
        {/* FlatList render elements in ui like virtual scroll in web */}
        <FlatList
          data={goals}
          alwaysBounceVertical={true}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <GoalItem
              key={itemData.index}
              item={itemData.item}
              onDelete={deleteGoalHandler}
            />
          )}
        ></FlatList>
        {/* </ScrollView> */}
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10
  },

  goalsContainer: {
    flex: 4,
    marginTop: 16
  },
});
