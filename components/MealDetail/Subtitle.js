import {View, Text, StyleSheet} from "react-native";

function Subtitle({children}){
  return(
    <Text style = {styles.subtitle}>{children}</Text>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#8470ff",
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 4,
    textAlign: "center",
    borderBottomColor: "#8470ff",
    borderBottomWidth: 2,
  }
});