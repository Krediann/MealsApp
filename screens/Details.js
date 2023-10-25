import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect, setOptions } from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List"
import Icon from "../components/Icon"

function Details({route, navigation}) {
  const mealId = route.params.mealId;

  const ChosenMeal = MEALS.find((meal) => meal.id === mealId);
  
  function headerButtonHandler() {
    console.log("Pressed!!!!!!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Icon onTap = {headerButtonHandler} icon = "heart" color= "red"/>
      }
    });
  },[navigation, headerButtonHandler]);
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