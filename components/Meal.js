import {View, Text, Pressable, Image, StyleSheet} from "react-native"

function Meal({title, imageUrl, duration, complexity, affordability}) {
  return(
    <View>
      <Pressable>
        <View>
          <Image source = {{uri: imageUrl}} style = {styles.image} />
            <Text style = {styles.title}>
              {title}
            </Text>
        </View>
        <View>
          <Text>
            {duration} minutes
          </Text>
          <Text>
            {complexity.toUpperCase()}
          </Text>
          <Text>
            {affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Meal;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "sans-serif-light"
  }
});