import {CATEGORIES} from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";
import {FlatList} from "react-native";
import {useNavigation} from "@react-navigation/native";


function CategoryScreen({}) {

  const navigation = useNavigation();
  
  function renderItemsInCategory(itemData) {
    function handlePress () {
      navigation.navigate("Meals", {
        id: itemData.item.id,
      });
    }
    return(
      <CategoryGrid title = {itemData.item.title} color = {itemData.item.color} PressedButton = {handlePress}/>
    );
  }

  return(
    <FlatList data = {CATEGORIES} keyExtractor = {(item) => item.id} renderItem = {renderItemsInCategory} numColumns= {2}/>
  );
}

export default CategoryScreen;