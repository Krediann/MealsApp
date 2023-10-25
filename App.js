import CategoryScreen from "./screens/CategoryScreen.js";
import Meals from "./screens/Meals.js";
import Details from "./screens/Details.js"
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const screenStack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <screenStack.Navigator screenOptions={{
          headerStyle: {backgroundColor: "#F08080"},
          headerTintColor: "black",
          contentStyle: {backgroundColor: "#483D8B"}
        }}>
          <screenStack.Screen name = "Categories" component = {CategoryScreen} 
            options = {{
              title: "All food categories"}} />
          <screenStack.Screen name = "Meals" component = {Meals} 
          options={({route}) => {
            const title = route.params.title;
            return {
              title: title 
            };
            }}
          />
          <screenStack.Screen name = "DetailsScreen" component = {Details} />
        </screenStack.Navigator>
      </NavigationContainer>
      <StatusBar style = "dark" />
    </>
  );
}
