import { Text, View, Image } from "react-native";
import { MEALS } from "../data/dummy-data";

function Details({route}) {
  const mealId = route.params.mealId;

  const ChosenMeal = MEALS.find((meal) => meal.id === mealId);
  return(
  <View>
    <Image source={{uri: ChosenMeal.imageUrl}}/>
    <Text>
      {ChosenMeal.title}
    </Text>
    <View>

    </View>
    <Text>Ingredients</Text>
    <Text>Steps:</Text>
  </View>
  )
}

export default Details;