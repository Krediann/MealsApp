import 'react-native-gesture-handler';
import CategoryScreen from "./screens/CategoryScreen.js";
import Meals from "./screens/Meals.js";
import Details from "./screens/Details.js";
import Favorites from "./screens/Favorites.js";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const screenStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNav() {
  return(
    <Drawer.Navigator screenOptions={{
      headerStyle: {backgroundColor: "#F08080"},
      headerTintColor: "black",
      sceneContainerStyle: {backgroundColor: "#483D8B"}
    }}>
      <Drawer.Screen name = "DrawerCategories" component = {CategoryScreen} options = {{title: "Categories"}}/>
      <Drawer.Screen name = "Favorites" component = {Favorites} />
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <>
      <NavigationContainer>
        <screenStack.Navigator screenOptions={{
          headerStyle: {backgroundColor: "#F08080"},
          headerTintColor: "black",
          contentStyle: {backgroundColor: "#483D8B"}
        }}>
          <screenStack.Screen name = "Categories" component = {DrawerNav} 
            options = {{
              headerShown: false}} />
          <screenStack.Screen name = "Meals" component = {Meals} 
          options={({route}) => {
            const title = route.params.title;
            return {
              title: title 
            };
            }}
          />
          <screenStack.Screen name = "DetailsScreen" component = {Details} options = {{
            title: "Recipe"
          }} />
        </screenStack.Navigator>
      </NavigationContainer>
      <StatusBar style = "dark" />
    </>
  );
}
