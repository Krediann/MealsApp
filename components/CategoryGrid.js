import { Pressable, View, Text, StyleSheet, Dimensions} from "react-native";

const { height, width } = Dimensions.get("window");

function CategoryGrid({title, color}) {
  return(
    <View style = {styles.Items}>
      <Pressable>
        <Text>
          {title}
        </Text>
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
    elevation: 2
  }
});