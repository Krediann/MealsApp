import { MEALS } from "../data/dummy-data";
import { useRoute, useNavigation} from "@react-navigation/native"
import MealsList from "../components/MealsList/MealsList";
//import { useLayoutEffect } from "react";

function Meals({}) {
  
  const route = useRoute();
  const categoryID = route.params.id;
  const Meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryID) >= 0;
  });
  /*useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === categoryID).title;
    navigation.setOptions({title: catTitle});
  }, [categoryID, navigation]); */

  return(
    <MealsList items={Meals} />
  )
};

export default Meals;