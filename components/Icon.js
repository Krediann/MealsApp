import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"

function Icon({icon, color, onTap}) {
  return(
    <Pressable onPress={onTap} style = {({pressed}) => pressed && styles.pressed}>
      <Ionicons name= {icon} size={28} color = {color} />
    </Pressable>
  )
}

export default Icon;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  }
});