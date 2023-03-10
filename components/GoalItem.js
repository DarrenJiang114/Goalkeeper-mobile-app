import {StyleSheet, View, Text, Pressable} from 'react-native';


function GoalItem(props){

    return(
        <View style={styles.goalItem}>
        <Pressable onPress={props.onDelete.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
        </View> 
    );
}


export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#e4d0ff',
        padding: 8,
        
      },
      pressedItem:{
        opacity: 0.5,
      },
      goalText: {
        color: 'black'
      }
})