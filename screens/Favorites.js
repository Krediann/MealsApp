//import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
//import { FavoritesContext } from "../store/context/favorites-context";
function Favorites(){
  //const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

  if(favoriteMeals.length === 0) {
    return(
      <View style = {styles.rootContainer}>
        <Text style = {styles.text}>You don't like any food :ccc</Text>
      </View>
    )
  }
  return(
    <MealsList items = {favoriteMeals} />
  )
}

export default Favorites;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
});