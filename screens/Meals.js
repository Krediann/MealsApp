import { MEALS } from "../data/dummy-data";
import Meal from "../components/Meal";
import { View, FlatList, StyleSheet} from "react-native"; 
import { useRoute} from "@react-navigation/native"

function Meals({}) {
  
  const route = useRoute();
  const categoryID = route.params.id;
  const Meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryID) >= 0;
  })

  function renderMeals(itemData) {
    const item = itemData.item
    const mealProps = {
    title: item.title,
    affordability: item.affordability,
    complexity: item.complexity,
    imageUrl: item.imageUrl,
    duration: item.duration,
    }

    return(
      <Meal {...mealProps} />
    )
  };

  return(
  <View style = {styles.container}>
    <FlatList data = {Meals} keyExtractor = {(item) => item.id} renderItem = {renderMeals}/>
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