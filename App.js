import CategoryScreen from "./screens/CategoryScreen.js";
import Meals from "./screens/Meals.js";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const screenStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <screenStack.Navigator>
          <screenStack.Screen name = "Categories" component = {CategoryScreen} />
          <screenStack.Screen name = "Meals" component = {Meals} />
        </screenStack.Navigator>
      </NavigationContainer>
      <StatusBar style = "dark" />
    </>
  );
}
