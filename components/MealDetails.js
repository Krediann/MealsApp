import {Text, View, StyleSheet} from "react-native"

function MealDetails({duration, complexity, affordability}){
  return(
    <View style = {[styles.features]}>
      <Text style = {[styles.itemFeatures]}>
        {duration} minutes 
      </Text>
      <Text style = {[styles.itemFeatures]}>
        {complexity.toUpperCase()} 
      </Text>
      <Text style = {[styles.itemFeatures]}>
        {affordability.toUpperCase()} 
      </Text>
  </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  features: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  itemFeatures: {
    paddingHorizontal: 4,
    fontSize: 14,
    fontFamily: "sans-serif",
  },
});