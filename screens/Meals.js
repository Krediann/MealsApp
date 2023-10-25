import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet} from "react-native"; 

function Meals() {
  return(
  <View style = {styles.container}>
    <Text>Here are the meals!</Text>
  </View>
  )
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  }
});