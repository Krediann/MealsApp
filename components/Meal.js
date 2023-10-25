import {View, Text, Pressable, Image, StyleSheet, Platform} from "react-native"

function Meal({title, imageUrl, duration, complexity, affordability}) {
  return(
    <View style = {styles.meal}>
      <Pressable android_ripple={{color: "gray"}} style ={({pressed}) => (pressed ? styles.ifButtonPressed : null)}>
        <View style = {styles.innerContainer}>
          <View>
            <Image source = {{uri: imageUrl}} style = {styles.image} />
              <Text style = {styles.title}>
                {title}
              </Text>
          </View>
          <View style = {styles.features}>
            <Text style = {styles.itemFeatures}>
              {duration} minutes 
            </Text>
            <Text style = {styles.itemFeatures}>
              {complexity.toUpperCase()} 
            </Text>
            <Text style = {styles.itemFeatures}>
              {affordability.toUpperCase()} 
            </Text>
          </View>
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
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  ifButtonPressed: {
    opacity: 0.7
  },
});