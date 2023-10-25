import {Text, StyleSheet, View} from "react-native"

function List({data}){
  return(
    data.map(dataPoint =>
    <View key={dataPoint} style = {styles.item}>
      <Text style = {styles.itemText}> 
        {dataPoint}
      </Text>
    </View>
    ));
};

export default List;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#8470ff",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  itemText: {
    color: "#483D8B",
    textAlign: "center",

  }
});