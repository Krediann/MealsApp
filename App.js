import 'react-native-gesture-handler';
import CategoryScreen from "./screens/CategoryScreen.js";
import Meals from "./screens/Meals.js";
import Details from "./screens/Details.js";
import Favorites from "./screens/Favorites.js";
//import FavoritesContextProvider from './store/context/favorites-context.js';
import { store } from "./store/redux/store.js"

import { Provider } from 'react-redux';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons"

const screenStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNav() {
  return(
    <Drawer.Navigator screenOptions={{
      headerStyle: {backgroundColor: "#F08080"},
      headerTintColor: "black",
      sceneContainerStyle: {backgroundColor: "#483D8B"},
      drawerContentStyle: {backgroundColor: "#483D8B"},
      drawerInactiveTintColor: "white",
      drawerActiveTintColor: "black",
      drawerActiveBackgroundColor: "#F08080"
    }}>
      <Drawer.Screen name = "DrawerCategories" component = {CategoryScreen} options = {{
        title: "Categories",
        drawerIcon: ({color, size}) => (
        <Ionicons color={color} size={size} />
          ),
        }}/>
      <Drawer.Screen name = "Favorites" component = {Favorites} options = {{
        drawerIcon: ({color, size}) => (
        <Ionicons name = "heart" color={color} size={size} />
          ),
      }} />
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <>
    {/*<FavoritesContextProvider>*/}
    <Provider store = {store}>
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
    </Provider>
    {/*</FavoritesContextProvider>*/}
      <StatusBar style = "dark" />
    </>
  );
}
