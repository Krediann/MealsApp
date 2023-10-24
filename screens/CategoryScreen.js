import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";
import { FlatList } from "react-native";

function renderItemsInCategory(itemData) {
  return(
    <CategoryGrid title = {itemData.item.title} color = {itemData.item.color} />
  );
}

function CategoryScreen() {
  return(
    <FlatList data = {CATEGORIES} keyExtractor = {(item) => item.id} renderItem = {renderItemsInCategory} numColumns= {2}/>
  );
}

export default CategoryScreen;