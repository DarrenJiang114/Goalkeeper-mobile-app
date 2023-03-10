import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [modalVisible, setModalVisibility] = useState(false);
  const [goalList, setGoals] = useState([]); 
  function startAddGoalHandler(){
    setModalVisibility(true);
  }
  function endAddGoalHandler(){
    setModalVisibility(false);
  }
  function addGoalHandler(enteredGoalText) {
    setGoals(currentGoals => [
      ...currentGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    endAddGoalHandler();
  };
  function deleteGoalHandler(id){
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#fff8dc" 
      onPress={startAddGoalHandler}/>
      <GoalInput visible={modalVisible} onAddGoal={addGoalHandler}
      cancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={goalList} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} 
          onDelete={deleteGoalHandler} id={itemData.item.id}/>;
        }} keyExtractor={(item, index) => {
          return item.id;
        }}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#6495ed',
  },
  goalsContainer:{
    flex: 5,
  },
  
});
