import { Pressable, View, Text, StyleSheet, Dimensions} from "react-native";

const { height, width } = Dimensions.get("window");

function CategoryGrid({title, color}) {
  return(
    <View style = {styles.Items}>
      <Pressable style = {styles.button}>
        <View style = {styles.content}>
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
  },
  button: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 16,
    fontFamily: "sans-serif-light",
    fontWeight: "bold",
  },
});