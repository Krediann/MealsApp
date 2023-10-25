import { Pressable, View, Text, StyleSheet, Dimensions, Platform} from "react-native";

const { height, width } = Dimensions.get("window");

function CategoryGrid({title, color, PressedButton}) {
  return(
    <View style = {styles.Items}>
      <Pressable android_ripple={{color: "gray"}} style ={({pressed}) => [styles.button, pressed ? styles.ifButtonPressed : null]} onPress = {PressedButton} >
        <View style = {[styles.content, {backgroundColor: color}]}>
          <Text style = {styles.title}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGrid;

const styles = StyleSheet.create({
  Items: {
    flex: 1,
    margin: 12,
    height: (height - 24) / 5,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "white",
    shadowColor: "darkgray",
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible", 
  },
  button: {
    flex: 1,
  },
  ifButtonPressed: {
    opacity: 0.7
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  title: {
    fontSize: 16,
    fontFamily: "sans-serif-light",
    fontWeight: "bold",
  },
});