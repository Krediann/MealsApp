import { View, FlatList, StyleSheet } from "react-native";
import Meal from "./Meal"
function MealsList({items}){
  function renderMeals(itemData) {
    const item = itemData.item
    const mealProps = {
    id: item.id,
    title: item.title,
    affordability: item.affordability,
    complexity: item.complexity,
    imageUrl: item.imageUrl,
    duration: item.duration,
    };

    return(
      <Meal {...mealProps} />
    )
  };

  return(
  <View style = {styles.container}>
    <FlatList data = {items} keyExtractor = {(item) => item.id} renderItem = {renderMeals} />
  </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  }
});