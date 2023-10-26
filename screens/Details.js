import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect, /*useContext*/ } from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List"
import Icon from "../components/Icon"
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
//import { FavoritesContext } from "../store/context/favorites-context";

function Details({route, navigation}) {

  //const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;
  const ChosenMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);
  
  function ChangeFavorite() {
    if (mealIsFavorite) {
      //favoriteMealsContext.removeFavorite(mealId);
      dispatch(removeFavorite({id: mealId}));
    }
    else{
      //favoriteMealsContext.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Icon onTap = {ChangeFavorite} icon = {mealIsFavorite ? "heart" : "heart-outline"} color= "red"/>
      }
    });
  },[navigation, ChangeFavorite]);
  return(
    <ScrollView style = {styles.container}>
      <Image style = {styles.image} source={{uri: ChosenMeal.imageUrl}} />
      <Text style = {styles.title}>
        {ChosenMeal.title}
      </Text>
      <MealDetails duration={ChosenMeal.duration} complexity={ChosenMeal.complexity} affordability={ChosenMeal.affordability} />
      <View style = {styles.outerContainer}>
        <View style = {styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data = {ChosenMeal.ingredients}/>
          <Subtitle>Steps</Subtitle>
          <List data = {ChosenMeal.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default Details;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    padding: 10,
    textAlign: "center",
  },
  listContainer: {
    maxWidth: "80%"
  },
  outerContainer: {
    alignItems: "center"
  },
  container:{
    marginBottom: 32
  }
});