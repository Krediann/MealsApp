import {View, Text, Pressable, Image, StyleSheet, Platform} from "react-native"
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

function Meal({id, title, imageUrl, duration, complexity, affordability}) {

  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("DetailsScreen", {
      mealId: id,
    });
  }

  return(
    <View style = {styles.meal}>
      <Pressable android_ripple={{color: "gray"}} style ={({pressed}) => (pressed ? styles.ifButtonPressed : null)} onPress = {selectMealItemHandler}>
        <View style = {styles.innerContainer}>
          <View>
            <Image source = {{uri: imageUrl}} style = {styles.image} />
              <Text style = {styles.title}>
                {title}
              </Text>
          </View>
          <MealDetails duration = {duration} affordability={affordability} complexity={complexity}/>
        </View>
      </Pressable>
    </View>
  )
}

export default Meal;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "sans-serif-light",
    padding: 8
  },
  meal: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "darkgray",
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible", 
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  ifButtonPressed: {
    opacity: 0.7
  },
});